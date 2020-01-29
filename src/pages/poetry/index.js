import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Poetry = () => {
    return(
        <Layout>
            <SEO title="Poetry"/>
            <div>
                {/* Poetry Content */}
                <h1>Poetry Content Goes Here</h1>
            </div>
            <Link to="/poetry/post">Go To Poetry Post</Link>
        </Layout>
    )
}

export default Poetry