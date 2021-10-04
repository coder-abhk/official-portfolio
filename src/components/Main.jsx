import "./Main.css";
import ppic from "../assets/images/abhk_pp.jpg";

function Main() {
  return (
    <main className="main__wrapper dim">
      <h1>Who am I?</h1>
      <img className="profile__pic" src={ppic} alt="coder abhk" />
      <p>
        Hey! my name is Abhishek Rawat. I want to be a fullstack web developer,
        ❤️ love to design, 🛠 build and create 🦋 beautiful websites. To showcase
        my work I love to deploy them to GitHub.
      </p>
      <br />
      <p>
        I also run a friendly circle Telegram channel where I usually post
        articles on programming, linux operating system, and web technologies.
      </p>
      <br />
      <h1>My Qualifications?</h1>
      <ul className="list__container">
        <li>
          <p>
            <b>School</b>
          </p>
          <p>Touch Wood School (CISCE) 2018</p>
          <p>Course: PCM</p>
          <p>Percentage: 65.4%</p>
        </li>
        <li>
          <p>
            <b>College</b>
          </p>
          <p>Uttaranchal College Of Science And Technology 2018-2021</p>
          <p>Course: Bsc. Information Technology</p>
          <p>Second Year CGPA: 7.23/10</p>
          <p>Last Year CGPA: __/10</p>
        </li>
      </ul>
    </main>
  );
}

export default Main;
