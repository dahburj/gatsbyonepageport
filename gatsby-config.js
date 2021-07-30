
const path = require('path')
const pkg = require(`./package.json`);

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Dimension V2',
    author: 'Jamal Dahbur',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '.'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, `src/images`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: false,
        sourceMap: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [path.join(__dirname, `src/assets/scss/main.scss`)]
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}
