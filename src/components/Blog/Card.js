import React from 'react'
import { Link } from 'gatsby'

const BlogCard = ({ ...props }) => {
    const { picture, title, description, publishDate, slug } = props
    return (
        <Link to={`/blog/${slug}`}>
            <div className="Blog-Card">
                <div className="Blog-Card-Picture">
                    <img src={ picture.file.url } />
                </div>
                <div className="Blog-Card-Body">
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                </div>
                <div className="Blog-Card-Footer">
                    <p>{ publishDate }</p>
                </div>
            </div>
        </Link>
        
    )
}

export default BlogCard