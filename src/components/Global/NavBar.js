import React from "react";
import { Link } from "react-router-dom";
import NavBarCSS from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={NavBarCSS.header_section}>
      <div className={NavBarCSS.container}>
        <div className={NavBarCSS.logo}>
          <Link to="/">Κωσταντίνος Καπετανίδης</Link>
        </div>
        <div className={NavBarCSS.links}>
          <nav className={NavBarCSS.navbar}>
            <ul className={NavBarCSS.list}>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
