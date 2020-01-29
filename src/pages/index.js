import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = () => (
  <div class="Home">
    <SEO title="Home"/>
    <h1>A Creatives Blog</h1>
    <div class="Collumn Section" id="Blog">
        <Link to="/blog">
          <div class="Overlay">
            <h2>Blog</h2>
          </div>
        </Link>
    </div>
    <div class="Collumn Section" id="Art">
      <Link to="/art">
        <div class="Overlay">
          <h2>Art</h2>
        </div>
      </Link>
    </div>
    <div class="Collumn" id="About-Poetry">
        <div class="Section" id="About">
          <Link to="/about">
            <div class="Overlay">
              <h2>About</h2>
            </div>
          </Link>
        </div>
        <div class="Section" id="Poetry">
          <Link to="/poetry">
            <div class="Overlay">
              <h2>Poetry</h2>
            </div>
          </Link>
        </div>
    </div>
</div>
)

export default HomePage
