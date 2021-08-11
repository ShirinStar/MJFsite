import { FaRegMehBlank } from 'react-icons/fa';

export default {
  name: 'about',
  title: 'about MJF',
  type: 'document',
  icon: FaRegMehBlank,
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bodyPortableText',
      type: 'array',
      title: 'About paragraph',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'MJF image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
