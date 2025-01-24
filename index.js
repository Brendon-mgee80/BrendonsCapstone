import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
}

router.hooks({
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

//  // Add a switch case statement to handle multiple routes
//  switch (view) {
//   // Add a case for each view that needs data from an API
//   case "naturenearyou":
//     // New Axios get request utilizing already made environment variable
//     axios
//       .get(`https://api.geoapify.com/v1/postcode/search?postcode=76131&countrycode=us&limit=6&geometry=original&apiKey=72da75e9a3134a67b7c0e3a27713f81b`)
//       .then(response => {
//         // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
//         console.log("response", response);
//         done();
//       })
//       .catch((error) => {
//         console.log("It puked", error);
//         done();
//       });
//       break;
//   default :
//     // We must call done for all views so we include default for the views that don't have cases above.
//     done();
//     // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
// }
// },

    done();
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    switch (view) {
      // Add a case for each view that needs data from an API
      case "naturenearyou":
        axios
          .get(
            `https://api.geoapify.com/v1/postcode/search?postcode=76131&countrycode=us&limit=6&geometry=original&apiKey=72da75e9a3134a67b7c0e3a27713f81b`)
          .then(response => {
            console.log("places response data:", response.data.features[0].properties);
            store.naturenearyou.latitude = response.data.features[0].properties.lat;
            store.naturenearyou.longitude = response.data.features[0].properties.lon;
          })
          .get(`https://api.geoapify.com/v2/places?lat=${store.naturenearyou.latitude}&lon=${store.naturenearyou.longitude}&categories=leisure.park&limit=10&apiKey=72da75e9a3134a67b7c0e3a27713f81b`)
          .then(response => {
            let map = L.map('map').setView([51.505, -0.09], 13)
          })
          .catch(error => {
            console.log("It puked", error);
          });
        break;
      default:
        break;
    }

    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
  });

  router
  .on({
    "/": () => render(store.home),
    ":view": (match) => {
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();


