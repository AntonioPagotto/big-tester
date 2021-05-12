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
        <div>
          <img class="rede-social" src={facebook} />
          <img class="rede-social" src={youtube} />
          <img class="rede-social" src={twitter} />
          <img class="rede-social" src={instagram} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
