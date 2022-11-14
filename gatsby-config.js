module.exports = {
  siteMetadata: {
    title: 'Carlos A. Ospina',
    siteUrl: 'https://caospinac.github.io',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: 'src',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Montserrat:300,400', 'source sans pro:300,400,400i,700',
        ],
        display: 'swap',
      },
    },
  ],
}
