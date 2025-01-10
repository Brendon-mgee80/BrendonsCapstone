import html from "html-literal";
import blackman from "../Docs/img/Holistic Dominion BM Meditating.png";
export default () => html`
  <div>
    <img class ="locs" src="${blackman}" alt="Man Meditating" />
</div>
<div>
    <h2>What is Meditation<h2>
    <p>
    Meditation is a practice that involves focusing the mind to achieve a
    state of relaxation, clarity, and heightened awareness. It often includes
    techniques such as deep breathing, mindfulness, or repeating a mantra to calm
    the mind and reduce distractions. Meditation can be done in silence, with guidance,
    or through movement-based practices like yoga. It is a versatile tool used to promote
    mental, emotional, and physical well-being.
    </p>
</div>
  <div>
    <h2>Benefits of Meditation<h2>
    <p>
    Meditation offers numerous benefits for the mind and body. It helps reduce stress by calming
    the mind and lowering cortisol levels, which promotes overall relaxation. Regular practice can
    improve focus and concentration, enhancing productivity and mental clarity. Meditation is also
    known to support emotional well-being by fostering a greater sense of self-awareness and resilience
    against negative thoughts. Physically, it can lower blood pressure, improve sleep quality, and strengthen
    the immune system. Additionally, it fosters a deeper connection to the present moment, encouraging a sense
    of gratitude and mindfulness in daily life. With consistent practice, meditation can lead to lasting improvements
    in overall health and happiness.
    </p>
</div>
    <div>
      <p>Sample Meditation</p>
      <video controls>
        <source src="Media/Meditation by ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
`;
