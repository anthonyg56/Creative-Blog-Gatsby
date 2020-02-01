import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogCard from '../components/Blog/Card'

const Blog = ({ data }) => {
    const blogPost = data.allContentfulBlog.edges
    console.log(blogPost)
    return(
        <Layout>
            <SEO title="Blog"/>
            <div className="Blog">
                <div className="Blog-Header">
                    {/* Blog Content */}
                    <h1>Blog Title Goes Here</h1>
                </div>
                <div className="Blog-Content">
                    {blogPost.map(({node}, index) => {
                        const data = node
                        console.log(data)
                        return <BlogCard {...data} key={index} />
                    })}    
                </div>
                    
            </div>
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