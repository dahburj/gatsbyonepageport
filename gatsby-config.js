
const path = require('path')
const pkg = require(`./package.json`);

module.exports = {
  siteMetadata: {
    title: 'Jdahbur',
    author: 'Jamal Dahbur',
    description: `Jamal Dahburs' Portfolio`,
    siteUrl: 'https://jdahbur.com',
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
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        srcPath: path.resolve(__dirname, 'src'),
      },
    },
    ],
}
