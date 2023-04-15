/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
   /* Your site config here */
   siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@johnsmilga",
    person: { name: "john", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cwstrm0wv02o`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
