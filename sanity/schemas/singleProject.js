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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'showOnSite',
      title: 'Show on site',
      type: 'boolean',
    },
    // {
    //   name: 'setOrder',
    //   title: 'Set order',
    //   type: 'number',
    //   options: {
    //     list: [
    //       { value: 1, title: 1 },
    //       { value: 2, title: 2 },
    //       { value: 3, title: 3 },
    //       { value: 4, title: 4 },
    //       { value: 5, title: 5 },
    //       { value: 6, title: 6 },
    //     ],
    //   },
    // },
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
      name: 'projectLink',
      title: 'Project external link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'bodyPortableText',
      type: 'portableText',
      title: 'Project description',
    },
    {
      name: 'image',
      title: 'Project hero image',
      description: 'please upload a 1920X1080 resolution',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Video Link',
      name: 'videoLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'featurePortableText',
      type: 'portableText',
      title: 'Feature links',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'BHSimage1',
      title: 'BHS image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'BHSimage2',
      title: 'BHS image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'BHSimage3',
      title: 'BHS image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'BHSimage4',
      title: 'BHS image 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // order documents plugin
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [{ field: 'order', direction: 'asc' }],
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
