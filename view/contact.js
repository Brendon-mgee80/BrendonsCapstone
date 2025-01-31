import html from "html-literal";
export default state => html`
  <body>
    <div class="container">
      <h2>Feedback Form</h2>
      <form id="feedbackForm">
        <!-- //Name// -->
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <p class="error" id="nameError"></p>

        <!-- //Email// -->
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <p class="error" id="emailError"></p>

        <!-- //Message// -->
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <p class="error" id="messageError"></p>

        <!-- //Rating// -->
        <label for="rating">Rating (1-5)</label>
        <input type="number" id="rating" name="rating" min="1" max="5" />
        <p class="error" id="ratingError"></p>

        <!-- //Hidden Submitted At// -->
        <input type="hidden" id="submittedAt" name="submittedAt" />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>

    <div class="feedback-list">
      <h3>Recent Feedback</h3>
      <div id="feedbackContainer">
        <table>
          ${state.feedback
            .map(entry => {
              return `<tr><td>${entry.name}</td><td>${entry.message}</td><td>${entry.rating}</td><td>${entry.submittedAt}</td></tr>`;
            })
            .join("")}
        </table>
      </div>
    </div>
  </body>
`;
