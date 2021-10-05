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
            CSS Tricks ::marker | range slider | text overflow | clip-path |
            custom scrollbar
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/15"
            alt="How to move a file from one folder to another using linux/ubuntu terminal?"
            target="_blank"
            rel="noreferrer"
          >
            How to move a file from one folder to another using linux/ubuntu
            terminal?
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/details/13"
            alt="make your code look elegant in VSCode?"
            target="_blank"
            rel="noreferrer"
          >
            Make your code look elegant in VSCode?
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/c_sql/"
            alt="CRUD operations in sql or mysql?"
            target="_blank"
            rel="noreferrer"
          >
            CRUD operations in sql/mysql?
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/c_py/"
            alt="how to connect to mysql database using python"
            target="_blank"
            rel="noreferrer"
          >
            connect to mysql database using python?
          </a>
        </li>
        <li>
          <a
            href="https://channel-live.herokuapp.com/linux_commands/"
            alt="linux useful commands for beginners"
            target="_blank"
            rel="noreferrer"
          >
            linux useful commands for beginners?
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Blogs;
