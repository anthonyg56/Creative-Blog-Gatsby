import React from 'react'
import SEO from '../seo'

const SubCard = () => {
    return(
        <div id="Art-Sub-Card">
            <SEO title="Sub-Card"/>
            <div id="Art-Sub-Card-Photo">
                <h4>Photo Goes Here</h4>
            </div>
            <div id="Art-Sub-Card-Text">
                <h1>Title</h1>
                <h4>Date</h4>
                <p>Description</p>
            </div>
        </div>
    )
}

export default SubCard