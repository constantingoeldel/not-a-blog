module.exports = {
  siteMetadata: {
    title: 'Constantin`s Madagascar ',
    description:
      'A collection of the events I experience here on Madagascar, updated maybe somewhat regularly',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'Constantin Goeldel',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro:
      'A collection of the events I experience here on Madagascar, updated maybe somewhat regularly',
    menuLinks: [
      {
        name: 'Constantin Goeldel',
        slug: '/',
      },
      {
        name: 'Example Page',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
