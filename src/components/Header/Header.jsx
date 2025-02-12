import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import Button from "../Button/Button";
import logo from "../../assets/icons/logo.svg";
import lkt from "../../assets/icons/lkt.svg";
import about from "../../assets/icons/about.svg";
import work from "../../assets/icons/work.svg";

export default function Header({ headerClass }) {
  const navigate = useNavigate();

  function aboutClick() {
    navigate("/about");
  }

  function workClick() {
    navigate("/work");
  }

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
            <Button text="ABOUT" onClick={aboutClick} icon={about} />
            <Button text="WORK" onClick={workClick} icon={work} />
          </nav>
        </div>
      </header>
    </>
  );
}
