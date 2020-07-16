import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as ROUTES from "../global/routes"

const CourseItem = ({ title, price, description, image, slug }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="course-item">
        <img src={image} className="img-fluid" alt="..." />
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{title}</h4>
            <p className="price">{`${price}€/h`}</p>
          </div>

          <h3>
            <Link to={`${ROUTES.COURSES}/${slug}`}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseItem

CourseItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
}
