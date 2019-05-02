import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/About';
import Jobs from '../components/Jobs';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `frontend developer`]} />
    <About />
    <Jobs />
  </Layout>
)

export default IndexPage
