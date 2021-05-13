import './Footer.css';

import facebook from "../../imgs/facebook.png";
import youtube from "../../imgs/youtube.png";
import twitter from "../../imgs/twitter.png";
import instagram from "../../imgs/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container space-between">
        <span id="logo-bee"></span>
        <div className="box-redes">
          <a><img className="rede-social" src={facebook}/></a>
          <a><img className="rede-social" src={youtube}/></a>
          <a><img className="rede-social" src={twitter}/></a>
          <a><img className="rede-social" src={instagram}/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
