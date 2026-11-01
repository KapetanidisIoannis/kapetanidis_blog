import { React } from "react";
import { Link } from "react-router-dom";
import FooterSectionCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={FooterSectionCSS.header_section}>
      <div className={FooterSectionCSS.container}>
        <div className={FooterSectionCSS.logo}>
          <Link to="/">Νίκος Καπετανίδης</Link>
        </div>
        <div className={FooterSectionCSS.links}>
          <nav className={FooterSectionCSS.navbar}>
            <ul className={FooterSectionCSS.list}>
              <li className={FooterSectionCSS.item}>
                <Link to="/n_biography">Βιογραφικό</Link>
              </li>
              <li className={FooterSectionCSS.item}>
                <Link to="/kapetanidis">Αγώνες</Link>
              </li>
              <li className={FooterSectionCSS.item}>
                <Link to="/paper">εφημερίδα "ΕΠΟΧΗ"</Link>
              </li>
              <li className={FooterSectionCSS.item}>
                Powered by Ioannis Kapetanidis & Nikos Kapetanidis
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
