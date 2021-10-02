import "./Other.css";

// other/extra links
function Other() {
  return (
    <div className="other__links dim">
      <h1>Other Links</h1>
      <p>Check out my repositories and mail me to contact.</p>
      <br />
      <p>
        <b>GitHub repo...</b>
      </p>
      <p className="github__btn">
        <a
          href="https://github.com/coder-abhk"
          target="_blank"
          rel="noreferrer"
        >
          my github repo.
        </a>
      </p>
      <p>
        <b>Contact me...</b>
      </p>
      <p className="mail__btn">
        <a href="mailto:abhkrwt07@gmail.com" target="_blank" rel="noreferrer">
          <span className="mail__text"> mail me</span>
        </a>
      </p>
    </div>
  );
}

export default Other;
