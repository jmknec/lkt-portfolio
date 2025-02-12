import "./Footer.scss";
import github from "../../assets/icons/github.svg";
import linked from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";

export default function Footer({ footerClass }) {
  return (
    <>
      <footer className={footerClass}>
        <div className="footer__top">
          <ul className="footer__list">
            <li className="footer__icon">
              <a
                className="footer__link"
                href="https://github.com/jmknec"
                target="_blank"
              >
                <img className="icon" src={github} alt="GitHub icon" />
              </a>
            </li>
            <li className="footer__icon">
              <a
                className="footer__link"
                href="https://www.linkedin.com/in/jenna-knechtel/"
                target="_blank"
              >
                <img className="icon" src={linked} alt="LinkedIn icon" />
              </a>
            </li>
            <li className="footer__icon">
              <a
                className="footer__link"
                href="mailto:ladyknechtech@gmail.com"
                target="_blank"
              >
                <img className="icon" src={mail} alt="Email icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© ladyKnech Tech 2025</span>
        </div>
      </footer>
    </>
  );
}
