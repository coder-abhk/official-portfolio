import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Blogs from "./blogs/Blogs";
import { useState } from "react";
import Other from "./Other";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  // get list of .dim classes to handle opacity on isToggle handler
  const classDims = Array.from(document.getElementsByClassName("dim"));
  isToggle
    ? classDims.map((ele) => (ele.style.opacity = 0.25))
    : classDims.map((ele) => (ele.style.opacity = 1));
  return (
    <div className="app__wrapper">
      <Header setIsToggle={setIsToggle} isToggle={isToggle} />
      {isToggle ? <Blogs /> : ""}
      <Main />
      <Skills />
      <Projects />
      <Other />
      <Footer />
    </div>
  );
}

export default App;
