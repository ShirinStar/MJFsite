import React from 'react';
import Layout from './src/components/Layout';

import './src/styles/globalStyles.css';
import './src/styles/homePage.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
