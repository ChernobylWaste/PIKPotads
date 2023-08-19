import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <br />
          <div className="socialIcons">
            <a href="">
              {/* <i className="fa-brands fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} className="xl" />
            </a>
            <a href="">
              {/* <i className="fa-brands fa-whatsapp"></i> */}
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <a href="/index.html">Beranda</a>
              </li>
              <li>
                <a href="/Edukasi/">Edukasi</a>
              </li>
              <li>
                <a href="/TentangKami/">Tentang</a>
              </li>
              <li>
                <a href="/FAQ/">FAQ</a>
              </li>
              <li>
                <a href="/Kegiatan/">Kegiatan</a>
              </li>
              <li>
                <a href="/Tim/">Tim</a>
              </li>
              <li>
                <a href="/Kontak/">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; PIK POTADS JABAR 2023</p>
        </div>
      </footer>
    </>
  );
}
