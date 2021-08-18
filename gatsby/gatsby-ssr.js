import React from 'react';
import Layout from './src/components/Layout';

import './src/styles/globalStyles.css';
import './src/styles/homePage.css';
import './src/styles/projectsGrid.css';
import './src/styles/projectPage.css';
import './src/styles/nav.css';
import './src/styles/about.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
