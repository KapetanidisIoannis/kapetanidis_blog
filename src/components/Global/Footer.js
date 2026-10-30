import { React } from "react";
import { Link } from "react-router-dom";
import FooterSectionCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={FooterSectionCSS.header_section}>
      <div className={FooterSectionCSS.container}>
        <div className={FooterSectionCSS.logo}>
          <Link to="/">Κωστας Καπετανίδης</Link>
        </div>
        <div className={FooterSectionCSS.links}>
          <nav className={FooterSectionCSS.navbar}>
            <ul className={FooterSectionCSS.list}>
              <li className={FooterSectionCSS.item}>
                <Link to="/book">Βιβλίο</Link>
              </li>
              <li className={FooterSectionCSS.item}>
                <Link to="/biography">Βιογραφικό</Link>
              </li>
              <li className={FooterSectionCSS.item}>
                <Link to="/kapetanidis">Νίκος Καπετανίδης</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* <li className={FooterSectionCSS.item}>
                <Link to="/contact">Επικοινωνία</Link>
              </li> */
