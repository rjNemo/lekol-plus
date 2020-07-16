import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import * as ROUTES from "../global/routes"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="img-fluid"
      alt=""
    />
  )
}

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-title">
        <h2>À Propos</h2>
        <p>Qui sommes-nous</p>
      </div>

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2">
          <Image />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Éducateurs expérimentés</h3>
          <p className="font-italic">
            Des éducateurs innovants au service de la réussite de votre enfant.
          </p>
          <ul>
            <li>
              <i className="icofont-check-circled"></i> X années d'expériences.
            </li>
            <li>
              <i className="icofont-check-circled"></i> Méthode éprouvée à
              l'internationale.
            </li>
          </ul>
          <p>
            Nous nous concentrons sur le développement de l'autonomie de
            l'étudiant.
          </p>
          <Link to={ROUTES.A_PROPOS} className="learn-more-btn">
            En Savoir Plus
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default About
