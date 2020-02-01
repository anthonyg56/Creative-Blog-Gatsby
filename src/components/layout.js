/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from 'gatsby'
import '../Sass/index.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <div className="navbar">
      <div className="Logo">
        <Link to="/"><h4>A Creatives Blog</h4></Link>
      </div>
      <div className="navbar-container">
        <Link to="/blog">
          <p>Blog</p>
        </Link>
        <Link to="/art">
          <p>Art</p>
        </Link>
        {/* <Link to="/poetry">
          <p>Poetry</p>
        </Link> */}
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
    </div>
    { children }
    <div className="footer">
      {/* Social Media Links & Icons */}
    </div>
  </div>
)

export default Layout
