import "./Other.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

// other/extra links
function Other() {
  return (
    <div className="other__links dim">
      <h1>Other Links</h1>
      <p>Check out my repositories and mail me to contact.</p>
      <div className="other_links_row">
      <p className="github__btn">
        <a
          href="https://github.com/coder-abhk"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </p>
      <p className="mail__btn">
        <a href="mailto:abhkrwt07@gmail.com" target="_blank" rel="noreferrer">
          <MailIcon />
        </a>
      </p>
      </div>
    </div>
  );
}

export default Other;
