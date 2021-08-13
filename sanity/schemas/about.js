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
      type: 'portableText',
      title: 'About text',
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
