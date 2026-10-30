import React from "react";
import { Link } from "react-router-dom";
import NavBarCSS from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={NavBarCSS.header_section}>
      <div className={NavBarCSS.container}>
        <div className={NavBarCSS.logo}>
          <Link to="/">Νίκος Καπετανίδης</Link>
        </div>
        <div className={NavBarCSS.links}>
          <nav className={NavBarCSS.navbar}>
            <ul className={NavBarCSS.list}>
              <li className={NavBarCSS.item}>
                <Link>Νίκος Καπετανίδης</Link>

                <ul className={NavBarCSS.dropdown}>
                  <li>
                    <Link to="/n_biography">Βιογραφικό</Link>
                  </li>
                  <li>
                    <Link to="/kapetanidis">Οι Αγώνες του ΝΚ</Link>
                  </li>
                  <li>
                    <Link to="/Paper">Εφημερίδα "Εποχή"</Link>
                  </li>
                </ul>
              </li>
              <li className={NavBarCSS.item}>
                <Link>Ιστορικό Υλικό</Link>

                <ul className={NavBarCSS.dropdown}>
                  <li>
                    <Link to="/photos">Φωτογραφίες Οικογένειας</Link>
                  </li>
                  <li>
                    <Link to="/photosNK">Φωτογραφίες Ν.Κ.</Link>
                  </li>
                  <li>
                    <Link to="/relic">Κειμήλια</Link>
                  </li>
                  <li>
                    <Link to="/architecture">Αρχιτεκτονική</Link>
                  </li>
                </ul>
              </li>
              <li className={NavBarCSS.item}>
                <Link>Σύλογος Νι. Καπ.</Link>

                <ul className={NavBarCSS.dropdown}>
                  <li>
                    <Link to="/history">Ιστορικό</Link>
                  </li>
                  <li>
                    <Link to="/action">Δράσεις</Link>
                  </li>
                </ul>
              </li>
              <li className={NavBarCSS.item}>
                <Link>Κώστας Καπετανίδης</Link>

                <ul className={NavBarCSS.dropdown}>
                  <li>
                    <Link to="/biography">Βιογραφικό</Link>
                  </li>
                  <li>
                    <Link to="/book">Βιβλίο</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* <li className={NavBarCSS.item}>
                <Link to="/contact">Επικοινωνία</Link>
              </li> */

/*
<li className={NavBarCSS.item}>
                <Link to="/book">Βιβλίο</Link>
              </li>
              <li className={NavBarCSS.item}>
                <Link to="/biography">Βιογραφικό</Link>
              </li>
              <li className={NavBarCSS.item}>
                <Link to="/blog">Δημοσιεύσεις</Link>
              </li>
              <li className={NavBarCSS.item}>
                <Link to="/kapetanidis">Νίκος Καπετανίδης</Link>
              </li>
              <li className={NavBarCSS.item}>
                <Link to="/contact">Επικοινωνία</Link>
              </li>
              <li className={NavBarCSS.item}>
                <Link to="/about">About</Link>

                <ul className={NavBarCSS.dropdown}>
                  <li>
                    <Link to="/about/1">1</Link>
                  </li>
                  <li>
                    <Link to="/about/2">2</Link>
                  </li>
                  <li>
                    <Link to="/about/3">3</Link>
                  </li>
                  <li>
                    <Link to="/about/4">4</Link>
                  </li>
                </ul>
*/
