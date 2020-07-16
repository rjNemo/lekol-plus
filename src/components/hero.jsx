import React from "react"
import PropTypes from "prop-types"

import ButtonCTA from "./buttonCTA"

const Hero = ({ title, subtitle }) => (
  <section
    id="hero"
    className="d-flex justify-content-center align-items-center"
  >
    <div className="container position-relative">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <ButtonCTA variant="secondary" />
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Hero
