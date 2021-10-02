import "./Header.css";

function Header({ isToggle, setIsToggle }) {
  return (
    <header className="header">
      <h2>&lt;&gt;coder-abhk&lt;/&gt;</h2>
      <h2
        className="header__more__btn"
        onClick={() => {
          isToggle ? setIsToggle(false) : setIsToggle(true);
        }}
      >
        more...
      </h2>
    </header>
  );
}

export default Header;
