import "./Footer.scss";
import { image } from '../../assest/Images/festi_fronsac_logo.png'

export function Footer(image) {
  return (
    <footer className="footer">
      <img className="footer_logo" src={image} alt="Logo Festi' Fronsac"></img>
      <p className="footer__copyrightText">© 2024 Festi' Fronsac. All rights reserved</p>
    </footer>
  );
}
