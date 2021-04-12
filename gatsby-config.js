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
        name: 'This Is Not A Blog',
        slug: '/',
      },
      {
        name: 'See the Gallery',
        slug: '/gallery/',
      },
    ],
    footerLinks: [
      {
        name: 'Constantin Goeldel',
        url: 'https://www.acctive.digital',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
