import React from 'react'
import { Link } from 'gatsby'

const ArtCard = ({ title, picture, slug}) => {
    return(
        <Link to={`/art/${slug}`}>
            <div className="Art-Card" style={{backgroundImage: `url(${picture.file.url})`}}>
                <div className="Art-Card-Overlay">
                    <div className="Art-Card-Overlay-Container">
                        <h4>{ title }</h4>
                        <p>Click To Read</p>    
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArtCard