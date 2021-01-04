import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Tait Website`,
    siteUrl: 'https://gatsby.pizza',
    description: 'Tait website',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '48u8yazd',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          // closeTimeoutMS: 5000,
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(103, 99, 99, 0.75)`,
              display: `flex`,
              justifyContent: `center`,
            },
            content: {
              maxWidth: '800px',
              left: 'auto',
              right: 'auto',
              width: '100%',
              boxSizing: 'border-box',
            },
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
