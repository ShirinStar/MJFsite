import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Mary John Frank`,
    siteUrl: 'http://www.maryjohnfrank.com/',
    description:
      'Mary John Frank is a New York-based choreographer and filmmaker',
    instagram: '/maryjohnfrank/',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'yzzh7fu1',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
