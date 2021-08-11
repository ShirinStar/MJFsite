import { FaFileSignature } from 'react-icons/fa';

export default {
  name: 'singleProject',
  title: 'Project page',
  type: 'document',
  icon: FaFileSignature,
  fields: [
    {
      name: 'name',
      title: 'Project name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      // connect it to react- to render only true
      name: 'showOnSite',
      title: 'Show on site',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'tagline',
      title: 'Project tagline',
      type: 'string',
      description: 'Tagline of the project',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'year of release',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'bodyPortableText',
      type: 'array',
      title: 'Full description',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Project image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoPreview',
      type: 'array',
      title: 'Video embed',
      of: [
        {
          type: 'block',
        },
        {
          type: 'videoEmbed',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
    },
    prepare: ({ title, media, ...tags }) => {
      console.log('stay');
      const projectTags = Object.values(tags).filter(Boolean);
      return {
        title,
        media,
        subtitle: projectTags.join(', '),
      };
    },
  },
};
