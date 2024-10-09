import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer_logo" src={logo} alt="Logo Festi' Fronsac"></img>
      <p className="footer__copyrightText">© 2024 Festi' Fronsac. All rights reserved</p>
    </footer>
  );
}
