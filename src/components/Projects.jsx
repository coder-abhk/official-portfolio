import covidtracker from "../assets/projects/covidtracker.png";
import bmi from "../assets/projects/bmi.png";
import fts from "../assets/projects/fts.png";
import learningbag from "../assets/projects/learningbag.png";
import blog from "../assets/projects/blog.png";
import "./Projects.css";
import { useEffect } from "react";
import { gsap } from "gsap";

function Projects() {
  // get all images
  const images = [learningbag, covidtracker, blog, fts, bmi];
  useEffect(() => {
    // get all links
    const links = Array.from(document.getElementsByClassName("image__preview"));
    links.forEach((ele, idx) => {
      // add image ele and gsap on mouseover
      ele.addEventListener("mouseover", (e) => {
        const img = document.createElement("img");
        img.src = images[idx];
        img.setAttribute("class", "mousy__img");
        ele.append(img);
        gsap.fromTo(
          ".mousy__img",
          { y: -25, opacity: 0 },
          { y: 0, opacity: 1, ease: "Power0.easeInOut" }
        );
      });
      // remove image ele on mouseleave
      ele.addEventListener("mouseleave", (e) => {
        document
          .querySelectorAll(".mousy__img")
          .forEach((item) => item.remove());
      });
    });
  });
  return (
    <div className="projects__container dim">
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
                className="image__preview"
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
                className="image__preview"
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
                className="image__preview"
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
                className="image__preview"
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
                className="image__preview"
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
