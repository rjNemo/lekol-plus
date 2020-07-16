import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as ROUTES from "../global/routes"

const Header = ({ siteTitle }) => (
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto">
        <Link to={ROUTES.HOME}>{siteTitle}</Link>
      </h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li>
            <Link to={ROUTES.COURSES}>Cours</Link>
          </li>
          <li>
            <Link to={ROUTES.A_PROPOS}>À propos</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Link to={ROUTES.CALENDAR} class="get-started-btn">
        Inscription
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
