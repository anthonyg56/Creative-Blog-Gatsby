import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Art = () => {
    return(
        <Layout>
            <SEO title="Art"/>
            <div>
                {/* Art Content */}
                <h1>Art Content Goes Here</h1>
            </div>
            <Link to="/art/post">Go To Post</Link>
        </Layout>
    )
}

export default Art