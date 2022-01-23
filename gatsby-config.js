module.exports = {
  siteMetadata: {
    title: 'Carlos A. Ospina',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: 'src',
      },
    },
  ],
}
