import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Counters from "../components/counters"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero
      title="Le PLUS pour mener votre enfant vers la réussite"
      subtitle="Accompagnement et suivi personnalisé orienté vers l'international"
    />
    <About />
    <Counters />
  </Layout>
)

export default IndexPage
