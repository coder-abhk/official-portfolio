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
            <em>
              CSS Tricks ::marker | range slider | text overflow | clip-path |
              custom scrollbar
            </em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/15"
            alt="How to move a file from one folder to another using linux/ubuntu terminal?"
            target="_blank"
            rel="noreferrer"
          >
            <em>
              How to move a file from one folder to another using linux/ubuntu
              terminal?
            </em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/13"
            alt="make your code look elegant in VSCode?"
            target="_blank"
            rel="noreferrer"
          >
            <em>Make your code look elegant in VSCode?</em>
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/c_sql/"
            alt="CRUD operations in sql or mysql?"
            target="_blank"
            rel="noreferrer"
          >
            <em>CRUD operations in sql/mysql?</em>
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
