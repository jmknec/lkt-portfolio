// import { Link } from "react-router-dom";
import "./Header.scss";
import github from "../../assets/icons/github.svg";
import linked from "../../assets/icons/linkedin.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__icon-container">
            <ul className="header__icon-list">
              <li className="header__icon">
                <a
                  className="header__link"
                  href="https://github.com/jmknec"
                  target="_blank"
                >
                  <img className="icon" src={github} alt="GitHub icon" />
                </a>
              </li>
              <li className="header__icon">
                <a
                  className="header__link"
                  href="https://www.linkedin.com/in/jenna-knechtel/"
                  target="_blank"
                >
                  <img className="icon" src={linked} alt="LinkedIn icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header__title-container"></div>
          <nav className="header__site-nav"></nav>
        </div>
      </header>
    </>
  );
}
