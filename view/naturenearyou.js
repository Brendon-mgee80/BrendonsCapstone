import html from "html-literal";
export default () => html`
  <p>Search API for looking up parks and green spaces by city, state.</p>
  <div id="map"></div>

  <div class="search-container">
    <input
      type="text"
      id="postcode-input"
      placeholder="Enter postal code (e.g., 76131)"
      class="search-box"
    />
    <input
      type="text"
      id="countrycode-input"
      placeholder="Enter country code (e.g., us)"
      class="search-box"
    />
    <button id="search-button" class="search-button">Search</button>
  </div>

  <div id="map" style="width: 100%; height: 500px;"></div> <!-- Map container -->
    <!-- Search results will appear here -->
  </div>
`;
