import html from "html-literal";
export default state => html`
  <main>
    <p>
      Welcome to The Holistic Dominion Corner! Explore resources to enhance
      mindfulness, meditation, and connection with nature.
    </p>
  </main>
  <div class="home-view">
    <iframe
      src="https://www.youtube.com/embed/F6eyLnqVCGo?autoplay=1&loop=1&playlist=F6eyLnqVCGo"
      title="YouTube Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
`;
