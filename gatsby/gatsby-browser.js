import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/work-sans';
import '@fontsource/barrio';
import '@fontsource/open-sans';
import '@fontsource/barriecito';
import '@fontsource/roboto';
import '@fontsource/roboto-slab';
import '@fontsource/montserrat-alternates';

import './src/styles/globalStyles.css';
import './src/styles/homePage.css';
import './src/styles/projectsGrid.css';
import './src/styles/projectPage.css';
import './src/styles/nav.css';
import './src/styles/about.css';
import './src/styles/reels.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
