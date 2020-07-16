import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../static/vendor/bootstrap/css/bootstrap.min.css"
import "../static/vendor/icofont/icofont.min.css"
import "../static/vendor/boxicons/css/boxicons.min.css"
import "../static/vendor/remixicon/remixicon.css"
import "../static/vendor/owl.carousel/assets/owl.carousel.min.css"
import "../static/vendor/animate.css/animate.min.css"
import "../static/vendor/aos/aos.css"
import "../static/css/style.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
