import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero
      title="Le PLUS pour mener votre enfant vers la réussite"
      subtitle="Accompagnement et suivi personnalisé orienté vers l'international"
    />
    <About />
  </Layout>
)

export default IndexPage
