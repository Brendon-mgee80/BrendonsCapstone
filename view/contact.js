import html from "html-literal";
export default () => html`
  <body>
    <div class="form-container">
      <h2>Leave Your Feedback</h2>
      <form id="feedbackForm">
        <div class="form-group">
          <label for="feedback">Your Experience:</label>
          <textarea
            id="feedback"
            rows="4"
            placeholder="Share your experience..."
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div id="feedbackDisplay"></div>
    </div>
  </body>
`;
