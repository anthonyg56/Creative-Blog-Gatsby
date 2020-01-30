import React from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const backgrounds = data.contentfulHomePageBackgrounds
  const {
    about,
    blog,
    art,
    poetry
  } = backgrounds
  return(
    <div className="Home">
      <SEO title="Home"/>
      <h1>A Creatives Blog</h1>
      <div className="Collumn Section" id="Blog" style={{backgroundImage: `url(${blog.file.url})`}}>
          <Link to="/blog">
            <div className="Overlay">
              <h2>Blog</h2>
            </div>
          </Link>
      </div>
      <div className="Collumn Section" id="Art" style={{backgroundImage: `url(${art.file.url})`}}>
        <Link to="/art">
          <div className="Overlay">
            <h2>Art</h2>
          </div>
        </Link>
      </div>
      <div className="Collumn" id="About-Poetry">
          <div className="Section" id="About" style={{backgroundImage: `url(${about.file.url})`}}>
            <Link to="/about">
              <div className="Overlay">
                <h2>About</h2>
              </div>
            </Link>
          </div>
          <div className="Section" id="Poetry" style={{backgroundImage: `url(${poetry.file.url})`}}>
            <Link to="/poetry">
              <div className="Overlay">
                <h2>Poetry</h2>
              </div>
            </Link>
          </div>
      </div>
  </div>
  )
}

export default HomePage

export const PageQuery = graphql`
  query {
    contentfulHomePageBackgrounds(id: {eq: "b3ea46df-3799-515d-a632-085f914497fe" }) {
      about {
        file {
          url
        }
      }
      art {
        file {
          url
        }
      }
      blog {
        file {
          url
        }
      }
      poetry {
        file {
          url
        }
      }
    }
  }
`

