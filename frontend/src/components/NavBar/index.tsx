import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.scss";
function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/juliosoft">
            <div className="contact-container">
              <GithubIcon />
              <p className="contact-link">juliosoft</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
