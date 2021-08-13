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
      type: 'array',
      title: 'Project description',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Prroject hero image',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    // {
    //   name: 'imageGalley',
    //   type: 'array',
    //   title: 'Image Gallery',
    //   of: [
    //     // {
    //     //   type: 'block',
    //     // },
    //     {
    //       type: 'imageGallery',
    //     },
    //   ],
    // },
    // {
    //   name: 'videoPreview',
    //   type: 'array',
    //   title: 'Video embed',
    //   of: [
    //     {
    //       type: 'block',
    //     },
    //     {
    //       type: 'videoEmbed',
    //     },
    //   ],
    // },
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
