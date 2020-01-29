import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Post = () => {
    return(
        <Layout>
            <div id="Poetry-Post">
                <SEO title="Poetry Post"/>
                <div id="Poetry-Post-Header">
                    <h1>Title</h1>
                    <h4>Date</h4>
                </div>
                <div id="Poetry-Post-Photo">
                    <h4>Photo Goes Here</h4>
                </div>
                <div id="Poetry-Post-Body">
                    <p>Body</p>
                </div>
                <div id="Poetry-Post-Next-Posts">
                    <p>Next 3 Poetry posts</p>
                </div>
            </div>
        </Layout>
    )
}

export default Post