import html from "html-literal";
import logo from "../Docs/img/Holistic Dominion LOGO.jpg";
export default state => html`
  <header>
    <div class="header-container"></div>
      <h1>${state.header}</h1>
      <img class ="logo" src="${logo}" alt="DM logo" />
          </div>
  </header>
`;
