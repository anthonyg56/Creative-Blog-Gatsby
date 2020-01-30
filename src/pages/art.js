import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const Art = ({ data }) => {
    const artPosts = data.allContentfulArt.edges
    return(
        <Layout>
            <SEO title="Art"/>
            <div>
                {/* Art Content */}
                <h1>Art Content Goes Here</h1>
            </div>
            {artPosts.map(({node}, index) => {
                const {
                    picture,
                    title,
                    description,
                    slug,
                    date
                } = node
                return <div><Link to={`/art/${slug}`}>{ title }</Link><br/></div>
            })}
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