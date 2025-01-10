import html from "html-literal";
import * as view from "../view";

export default state =>
  html`
    ${view[state.view](state)}
  `;
