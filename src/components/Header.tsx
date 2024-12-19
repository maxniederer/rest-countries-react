import toggleTheme from "../theme.tsx";
import { MoonOutline } from "react-ionicons";

function Header() {
  return (
    <>
      <header className="header-wrapper">
        <div className="header centered">
          <h1>
            <a>Where in the world?</a>
          </h1>
          <button className="btn dark-mode-btn" onClick={toggleTheme}>
            <MoonOutline
              color={"#00000"}
              title={"dark-mode"}
              height="20px"
              width="20px"
            />
            <span id="dark-mode-text">Dark Mode</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
