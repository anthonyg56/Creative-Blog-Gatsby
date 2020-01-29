import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Post = () => {
    return(
        <Layout>
            <div id="Art-Post">
                <SEO title="Art Post"/>
                <div id="Art-Post-Photo">
                    <h4>Photo Goes Here</h4>
                </div>
                <div id="Art-Post-Text">
                    <h1>Title</h1>
                    <h4>Date</h4>
                    <p>Description</p>
                </div>
                <div id="Art-Post-Next-Posts">
                    <p>Next 3 art posts</p>
                </div>
            </div>
        </Layout>
    )
}

export default Post