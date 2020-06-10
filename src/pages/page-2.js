import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Just adding some external links to see how lighthouse behaves</p>
    <iframe title="One nice video" width="1080" height="900" src="https://www.youtube.com/embed/C7dPqrmDWxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default SecondPage
