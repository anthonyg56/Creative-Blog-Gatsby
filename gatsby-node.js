/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
    return graphql(
        `
            {allContentfulBlogPost {
                edges {
                    node {
                        id
                        title
                        tags
                        slug
                        description {
                            description
                        }
                        heroImage {
                            file {
                                url
                            }
                            title
                        }
                        body {
                            body
                        }
                    }
                }
            }}
        `
    ).then(results => {
        if(results.error){
            throw results.error
        }

        const posts = results.data.allContentfulBlogPost.edges

        posts.forEach((post, index) => {
            const previous = index === 0 ? null : posts[index - 1].node
            const next = index === posts.length - 1 ? null : posts[index + 1].node

            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next
                }

            })
        })
    })
}