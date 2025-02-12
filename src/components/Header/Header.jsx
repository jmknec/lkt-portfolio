import { Link } from "react-router-dom";
import "./Header.scss";
// import github from "../../assets/icons/github.svg";
// import linked from "../../assets/icons/linkedin.svg";
import logo from "../../assets/icons/logo.svg";
import lkt from "../../assets/icons/lkt.svg";

export default function Header({ headerClass }) {
  return (
    <>
      <header className={headerClass}>
        <div className="header__container">
          {/* <div className="header__icon-container">
            <ul className="header__list">
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
          </div> */}
          <div className="header__logo-container">
            <Link className="header__link header__link--dt" to={"/"}>
              <img className="logo" src={logo} alt="ladyKnech Tech logo" />
            </Link>
            <Link className="header__link header__link--mobile" to={"/"}>
              <img className="small-logo" src={lkt} alt="ladyKnech Tech logo" />
            </Link>
          </div>
          <nav className="header__site-nav">
            <ul className="header__list">
              <li className="header__nav-item">
                <Link className="header__link" to={"about"}>
                  about
                </Link>
              </li>
              {/* <li className="header__nav-item">
                <Link className="header__link">work</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
