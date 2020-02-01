import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostContentfulTemplate = ({ data, location, pageContext }) => {
    console.log(data)
    const post = data.contentfulBlog
    const {
        picture,
        title,
        description,
        body,
        slug,
        publishDate
    } = post
    const metaData = data.site.siteMetadata
    const { previous, next } = pageContext
    return(
        <Layout>
            <SEO title="Blog-Post"/>
            <div className="Blog-Post">
                <div className="Blog-Post-Header">
                    <div className="Blog-Post-Header-Title">
                        <h1>{ title }</h1>    
                    </div>
                    <div className="Blog-Post-Header-Meta">
                        <p className="Blog-Post-Body-Description">{ description }</p>
                        <h4>{ publishDate }</h4>    
                    </div>
                </div>
                <div className="Blog-Post-Photo">
                    <img src={picture.file.url} />
                </div>
                <div
                    className="Blog-Post-Body"
                    dangerouslySetInnerHTML={{
                        __html: body.childContentfulRichText.html
                    }}
                />
                <div className="Blog-Post-Next-Posts">
                    <p>Next 3 blog posts</p>
                </div>
            </div>
            {/* {tags.map((tag, index) => <p key={ index }>{ tag }</p>)} */}
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
        contentfulBlog(slug: {eq: $slug } ) {
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
`