import html from "html-literal";
import bio1 from "../Docs/img/Brendon Bio.jpg";
import bio2 from "../Docs/img/Sunshine Bio.jpg";
export default () => html`
  <h2>
    Get to know the creators!
    <h2>
      <p>
        <img src="${bio1}" alt="Brendon" />
        <img src="${bio2}" alt="Sunshine" />
      </p>
    </h2>
  </h2>
`;
