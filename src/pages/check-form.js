import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//That form smells like trouble.
const CheckForm = () => (
  <Layout>
    <h1>This is a form with somethings that should trigger some warnings</h1>
        <p>Please check my form</p>
        
    <form id="contact-form" onSubmit="#" method="POST">
          Some pretty info
          <input type="text" name="search" id="search">Search:</input> 
          <input type="text" name="email" id="email">Email:</input> 
        </form>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CheckForm