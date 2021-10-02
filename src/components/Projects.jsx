import "./Projects.css";

function Projects() {
  return (
    <div className="projects__container">
      <h1>Personal Projects.</h1>
      <p>Here are few projects, I had recently added.</p>
      <ul className="list__container">
        <li>
          <p>
            <b>LearningBAG e-commerce site in React + Redux</b>
          </p>
          <p>
            <em>
              <a
                href="https://learningbag.netlify.app/"
                alt=""
                target="_blank"
                rel="noreferrer"
              >
                https://learningbag.netlify.app/
              </a>
            </em>
          </p>
        </li>
        <li>
          <p>
            <b>Covid-19 tracker app</b>
          </p>
          <p>
            <em>
              <a
                href="https://covid19-tracker-abhk.netlify.app/"
                alt=""
                target="_blank"
                rel="noreferrer"
              >
                https://covid19-tracker-abhk.netlify.app/
              </a>
            </em>
          </p>
        </li>
        <li>
          <p>
            <b>Fully Functional Blog Website</b>
          </p>
          <p>
            <em>
              <a
                href="https://channel-live.herokuapp.com/"
                alt=""
                target="_blank"
                rel="noreferrer"
              >
                https://channel-live.herokuapp.com/
              </a>
            </em>
          </p>
        </li>
        <li>
          <p>
            <b>Cover page</b>
          </p>
          <p>
            <em>
              <a
                href="https://cover-page-abhk.netlify.app/"
                alt=""
                target="_blank"
                rel="noreferrer"
              >
                https://cover-page-abhk.netlify.app/
              </a>
            </em>
          </p>
        </li>
        <li>
          <p>
            <b>BMI Calculator</b>
          </p>
          <p>
            <em>
              <a
                href="https://bmi-calc-abhk.netlify.app/"
                alt=""
                target="_blank"
                rel="noreferrer"
              >
                https://bmi-calc-abhk.netlify.app/
              </a>
            </em>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
