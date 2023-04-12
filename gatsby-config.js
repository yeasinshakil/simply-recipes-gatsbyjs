/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
  ],
}
