import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/icons/logo.svg";
import lkt from "../../assets/icons/lkt.svg";

export default function Header({ headerClass }) {
  return (
    <>
      <header className={headerClass}>
        <div className="header__container">
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
              <li className="header__nav-item">
                <Link className="header__link" to={"projects"}>
                  work
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
