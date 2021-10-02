import "./Blogs.css";

function Blogs() {
  return (
    <div className="blogs__container">
      <h2>Blogs</h2>
      <ul className="list__container">
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/14"
            alt="useful css tricks"
            target="_blank"
            rel="noreferrer"
          >
            <em>css tricks</em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/16"
            alt="how to embed github code in a webpage?"
            target="_blank"
            rel="noreferrer"
          >
            <em>embed github code in a webpage?</em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/c_py/"
            alt="how to connect to mysql database using python"
            target="_blank"
            rel="noreferrer"
          >
            <em>connect to mysql database using python?</em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/linux_commands/"
            alt="linux useful commands for beginners"
            target="_blank"
            rel="noreferrer"
          >
            <em>linux useful commands for beginners?</em>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Blogs;
