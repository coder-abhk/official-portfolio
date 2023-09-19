import "./Skills.css";

function Skills() {
  return (
    <div className="skills__section dim">
      <h1>Skills I Acquired.</h1>
      <p>
        To showcase and build projects, I generally use these technologies
        listed below.👇
      </p>
      <br />
      <h3>Frontend Technologies:</h3>
      <div className="skill__cards">
        <div className="skill__card">
          <h3>React js</h3>
        </div>
        <div className="skill__card">
          <h3>@reduxjs/toolkit</h3>
        </div>
        <div className="skill__card">
          <h3>Javascript</h3>
        </div>
        <div className="skill__card">
          <h3>Jquery</h3>
        </div>
        <div className="skill__card">
          <h3>Bootstrap</h3>
        </div>
        <div className="skill__card">
          <h3>HTML</h3>
        </div>
        <div className="skill__card">
          <h3>CSS</h3>
        </div>
        <div className="skill__card">
          <h3>SASS</h3>
        </div>
        <div className="skill__card">
          <h3>Figma/Xd</h3>
        </div>
      </div>
      <h3>Basic Backend Technologies:</h3>
      <div className="skill__cards">
        <div className="skill__card">
          <h3>Node js</h3>
        </div>
        <div className="skill__card">
          <h3>Express js</h3>
        </div>
        <div className="skill__card">
          <h3>MySql/SQL</h3>
        </div>
        <div className="skill__card">
          <h3>AJAX</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
