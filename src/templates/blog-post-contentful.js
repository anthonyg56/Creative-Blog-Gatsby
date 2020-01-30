import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostContentfulTemplate = ({ data, location, pageContext }) => {
    console.log(data)
    const post = data.contentfulBlogPost
    const {
        title,
        heroImage,
        description: {
            description
        },
        body,
        author,
        publishDate,
        tags
    } = post
    const metaData = data.site.siteMetadata
    const { previous, next } = pageContext
    return(
        <Layout>
            <SEO title={metaData.title} />
            <h1>{ title }</h1>
            <h2>{ description }</h2>
            <h4>{ author.name }</h4>
            <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html
            }}
            />
            <h4>{ publishDate }</h4>
            {tags.map((tag, index) => <p key={ index }>{ tag }</p>)}
        </Layout>
    )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title,
                author
            }
        }
        contentfulBlogPost(slug: {eq: $slug } ) {
            title
            slug
            heroImage {
                file {
                    url
                }
            }
            description {
                description
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
            author {
                name
            }
            publishDate
            tags
        }
    }
`