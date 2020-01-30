import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const Blog = ({ data }) => {
    const blogPost = data.allContentfulBlog.edges
    console.log(blogPost)
    return(
        <Layout>
            <SEO title="Blog"/>
            <div>
                {/* Blog Content */}
                <h1>Blog Content Goes Here</h1>
            </div>
            {blogPost.map(({node}, index) => {
                const {
                    picture,
                    title,
                    description,
                    slug,
                    publishDate
                } = node
                return <div><Link to={`/blog/${slug}`}>{ title }</Link><br/></div>
            })}
        </Layout>
    )
}

export default Blog

export const pageQuery = graphql`
    query {
        allContentfulBlog {
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
                    publishDate
                }
            }
        }
    }
`