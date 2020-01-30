/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const contentfulComponent = templatePath => path.resolve(`./src/templates/${templatePath}-post-contentful.js`)

    return graphql(
        `
            {
                allContentfulArt {
                    edges {
                        node {
                            picture {
                                file {
                                    url
                                }
                            }
                            title
                            description
                            body {
                                childContentfulRichText {
                                    html
                                }
                            }
                            slug
                            date
                        }
                    }
                }
                allContentfulBlog {
                    edges {
                        node {
                            picture {
                                file {
                                    url
                                }
                            }
                            title
                            description
                            body {
                                childContentfulRichText {
                                    html
                                }
                            }
                            slug
                            publishDate
                        }
                    }
                }
            }
        `
    )
    .then(results => {
        if(results.error){
            throw results.error
        }

        const artPosts = results.data.allContentfulArt.edges
        const blogPosts = results.data.allContentfulBlog.edges

        artPosts.forEach((post, index) => {
            const previous = index === 0 ? null : artPosts[index - 1].node
            const next = index === artPosts.length - 1 ? null : artPosts[index + 1].node

            createPage({
                path: `art/${post.node.slug}`,
                component: contentfulComponent(`art`),
                context: {
                    slug: post.node.slug,
                    previous,
                    next
                }

            })
        })

        blogPosts.forEach((post, index) => {
            const previous = index === 0 ? null : blogPosts[index - 1].node
            const next = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node

            createPage({
                path: `blog/${post.node.slug}`,
                component: contentfulComponent(`blog`),
                context: {
                    slug: post.node.slug,
                    previous,
                    next
                }
            })
        })
    })
}