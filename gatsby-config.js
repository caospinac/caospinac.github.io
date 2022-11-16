/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Carlos Ospina`,
    description: `Carlos Ospina' website`,
    siteUrl: `https://caospinac.github.io`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        rootFolder: `src`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400,700`, `source sans pro:300,400,400i,700`,
        ],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-H0VG488TD1`, // Google Analytics
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
