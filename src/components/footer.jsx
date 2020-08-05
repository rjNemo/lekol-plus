import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as ROUTES from "../global/routes"

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>{siteTitle}</h3>
            <p>
              97190, Le Gosier
              <br />
              <strong>Téléphone :</strong>{" "}
              <a href="tel:+33698267634">06 98 26 76 34</a>
              <br />
              <strong>Email :</strong>{" "}
              <a href="mailto:info@lekolplus.com">info@lekolplus.com</a>
              <br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Liens</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.HOME}>Accueil</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.A_PROPOS}>À propos</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.CONTACT}>Contact</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.LEGAL}>Mentions légales</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Nos niveaux</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.PRIMAIRE}>Primaire</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.COLLEGE}>Collège</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.LYCEE}>Lycée</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <Link to={ROUTES.ATELIER}>Ateliers</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Restez au courant</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form
              name="newsletter"
              action="/success"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="email" name="email" required />
              <input type="submit" value="S'inscrire" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">
      <div className="mr-md-auto text-center text-md-left">
        <div className="copyright">
          &copy; {new Date().getFullYear()}{" "}
          <strong>
            <span>{siteTitle}</span>
          </strong>
          . Tous droits réservés.
        </div>
        <div className="credits">
          Design par{" "}
          <a href="https://sage-tech.com" target="_blank">
            Sage Tech
          </a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" className="Whatsapp">
          <i className="bx bxl-skype"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  </footer>
)

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}
