import html from "html-literal";
export default () => html`
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
      <div id="feedbackContainer"></div>
    </div>

    <script>
      document
        .getElementById("feedbackForm")
        .addEventListener("submit", function(event) {
          event.preventDefault();

          // Get form values
          let name = document.getElementById("name").value.trim();
          let email = document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();
          let rating = document.getElementById("rating").value;
          let submittedAt = new Date().toISOString(); // Auto-set timestamp

          // Validation regex
          let nameRegex = /^[A-Za-z ]*$/;
          let emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;

          // Error elements
          let nameError = document.getElementById("nameError");
          let emailError = document.getElementById("emailError");
          let messageError = document.getElementById("messageError");
          let ratingError = document.getElementById("ratingError");

          // Clear errors
          nameError.innerText = "";
          emailError.innerText = "";
          messageError.innerText = "";
          ratingError.innerText = "";

          let valid = true;

          // Validate name
          if (!name) {
            nameError.innerText = "Name is required.";
            valid = false;
          } else if (!nameRegex.test(name)) {
            nameError.innerText = "Only letters and spaces are allowed.";
            valid = false;
          }

          // Validate email
          if (!email) {
            emailError.innerText = "Email is required.";
            valid = false;
          } else if (!emailRegex.test(email)) {
            emailError.innerText = "Invalid email format.";
            valid = false;
          }

          // Validate message
          if (!message) {
            messageError.innerText = "Message is required.";
            valid = false;
          } else if (message.length > 1000) {
            messageError.innerText = "Message cannot exceed 1000 characters.";
            valid = false;
          }

          // Validate rating
          rating = Number(rating);
          if (!rating) {
            ratingError.innerText = "Rating is required.";
            valid = false;
          } else if (rating < 1 || rating > 5) {
            ratingError.innerText = "Rating must be between 1 and 5.";
            valid = false;
          }

          // If all fields are valid, submit data
          if (valid) {
            let feedbackData = {
              name: name,
              email: email,
              message: message,
              rating: rating,
              submittedAt: submittedAt
            };

            console.log("Feedback Submitted:", feedbackData);
            alert("Feedback submitted successfully!");

            // Reset form after submission
            document.getElementById("feedbackForm").reset();
          }
        });
    </script>
  </body>
`;
