import { MdDashboard } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: MdDashboard,
  fields: [
    {
      name: 'name',
      title: 'Project name',
      type: 'string',
      description: 'Name of the project',
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
};
