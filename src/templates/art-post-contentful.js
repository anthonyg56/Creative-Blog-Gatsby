import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../Sass/landing.scss'

const ArtPostContentfulTemplate = ({ data, location, pageContext }) => {
    console.log(data)
    const post = data.contentfulArt
    const {
        picture,
        title,
        description,
        body,
        slug,
        date
    } = post
    const metaData = data.site.siteMetadata
    const { previous, next } = pageContext
    return(
        <Layout>
            <SEO title="Art Post"/>
            <div className="Art-Post">
                <div className="Art-Post-Photo">
                    <img src={picture.file.url} />
                </div>
                <div className="Art-Post-Text">
                    <h1>{ title }</h1>
                    <h4>{ date }</h4>
                </div>
                <div
                        dangerouslySetInnerHTML={{
                            __html: body.childContentfulRichText.html
                        }}
                    />
                <div className="Art-Post-Next-Posts">
                    <p>Next 3 art posts</p>
                </div>
            </div>
            {/* {tags.map((tag, index) => <p key={ index }>{ tag }</p>)} */}
        </Layout>
    )
}

export default ArtPostContentfulTemplate

export const pageQuery = graphql`
    query ArtPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title,
                author
            }
        }
        contentfulArt(slug: {eq: $slug } ) {
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
`