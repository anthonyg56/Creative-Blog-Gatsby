import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import ArtCard from '../components/Art/Card'

const Art = ({ data }) => {
    const artPosts = data.allContentfulArt.edges
    return(
        <Layout>
            <SEO title="Art"/>
            <div className="Art">
                <div className="Art-Header">
                    {/* Art Content */}
                    <h1>Art Content Goes Here</h1>
                </div>
                <div className="Art-Content">
                    {artPosts.map(({node}, index) => {
                        // const {
                        //     picture,
                        //     title,
                        //     description,
                        //     slug,
                        //     date
                        // } = node
                        return <ArtCard {...node} />
                    })}    
                </div>
                    
            </div>
        </Layout>
    )
}

export default Art

export const pageQuery = graphql`
    query {
        allContentfulArt {
            edges {
                node {
                    picture {
                        file {
                            url
                        }
                    }
                    title
                    description
                    body {
                        childContentfulRichText {
                            html
                        }
                    }
                    slug
                    date
                }
            }
        }
    }
`