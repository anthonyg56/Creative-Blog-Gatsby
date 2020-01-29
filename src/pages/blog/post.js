import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Post = () => {
    return(
        <Layout>
            <div id="Blog-Post">
                <SEO title="Blog Post"/>
                <div id="Blog-Post-Header">
                    <h1>Title</h1>
                    <h4>Date</h4>
                </div>
                <div id="Blog-Post-Photo">
                    <h4>Photo Goes Here</h4>
                </div>
                <div id="Blog-Post-Body">
                    <p>Body</p>
                </div>
                <div id="Blog-Post-Next-Posts">
                    <p>Next 3 blog posts</p>
                </div>
            </div>
        </Layout>
    )
}

export default Post