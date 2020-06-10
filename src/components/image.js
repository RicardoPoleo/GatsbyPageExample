import React from "react"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
//This could go wrong (in fact, I know its not going to work)
  return <Img fluid="https://kyleclapper.com/static/6d91c86c0fde632ba4cd01062fd9ccfa/67d59/gatsby-astronaut.png"/>
}

export default Image
