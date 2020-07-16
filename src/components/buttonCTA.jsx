import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as ROUTES from "../global/routes"

const ButtonCTA = ({ text, variant }) => {
  let className = "get-started-btn"
  if (variant === "secondary") {
    className = "btn-get-started"
  }
  return (
    <Link to={ROUTES.CALENDAR} className={className}>
      {text}
    </Link>
  )
}

export default ButtonCTA

ButtonCTA.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
}

ButtonCTA.defaultProps = {
  text: "Inscription",
  variant: "primary",
}
