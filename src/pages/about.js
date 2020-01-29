import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'

const About = () => {
    return(
        <Layout>
            <SEO title="About"/>
            <div id="About">
                <div id="About-Photo">
                    {/* Photo of blog owner */}
                    <h1>Photo</h1>
                </div>
                <div id="About-Description">
                    {/* Description of Blog owner */}
                    <h1>Description</h1>
                </div>
            </div>    
        </Layout>
        
    )
}

export default About