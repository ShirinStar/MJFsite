// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import singleProject from './singleProject';
import videoEmbed from './videoEmbed';
import projectTag from './projectTag';
import press from './press';
import about from './about';
import imageGallery from './imageGallery';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    singleProject,
    videoEmbed,
    projectTag,
    press,
    about,
  ]),
});
