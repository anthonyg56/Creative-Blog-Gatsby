import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Blog = () => {
    return(
        <Layout>
            <SEO title="Blog"/>
            <div>
                {/* Blog Content */}
                <h1>Blog Content Goes Here</h1>
            </div>
            <Link to="/blog/post">Go To Post</Link>
        </Layout>
    )
}

export default Blog