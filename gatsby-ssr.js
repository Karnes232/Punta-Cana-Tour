/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import * as React from "react"
import WrapRootElement from './src/context/wrap-root-element';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

export const wrapRootElement = ({ element }) => (
  <WrapRootElement>{element}</WrapRootElement>
)
