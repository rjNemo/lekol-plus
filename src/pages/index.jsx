import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero
      title="Le PLUS pour mener votre enfant vers la réussite"
      subtitle="Accompagnement et suivi personnalisé orienté vers l'international"
    />
  </Layout>
)

export default IndexPage
