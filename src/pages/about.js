import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'

const About = ({ data }) => {
    const aboutData = data.contentfulAbout
    const {
        title,
        body,
        picture
    } = aboutData
    return(
        <Layout>
            <SEO title="About"/>
            <div className="About">
                <div className="About-Photo">
                    <img src={picture.file.url} />
                </div>
                <div className="About-Description">
                    <h1>{ title }</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: body.childContentfulRichText.html
                        }}
                    />
                </div>
            </div>    
        </Layout>
        
    )
}

export default About

export const PageQuery = graphql`
    query {
        contentfulAbout(id: {eq: "37febf53-5ea0-5cc8-b97c-2341ecd4e157"}) {
            title
            body {
                childContentfulRichText {
                    html
                }
            }
            picture {
                file {
                    url
                }
            }
        }
    }
`