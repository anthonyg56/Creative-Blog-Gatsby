/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div id="layout">
    <div id="navbar">
      <div id="navbar-container">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/blog">
          <p>Blog</p>
        </Link>
        <Link to="/art">
          <p>Art</p>
        </Link>
        <Link to="/poetry">
          <p>Poetry</p>
        </Link>
      </div>
    </div>
    { children }
    <div id="footer">
      {/* Social Media Links & Icons */}
    </div>
  </div>
)

export default Layout
