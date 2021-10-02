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
      <p>
        <a
          href="https://github.com/coder-abhk"
          target="_blank"
          rel="noreferrer"
        >
          <em>my github repo.</em>
        </a>
      </p>
      <p>
        <b>Contact me...</b>
      </p>
      <p>
        <a href="mailto:abhkrwt07@gmail.com" rel="noreferrer">
          <em>mail me</em>
        </a>
      </p>
    </div>
  );
}

export default Other;
