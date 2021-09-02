import { MdMovie } from 'react-icons/md';

export default {
  name: 'reels',
  title: 'Reels',
  type: 'document',
  icon: MdMovie,
  fields: [
    {
      name: 'name',
      title: 'Reels name',
      type: 'string',
      description: 'Type of the reel',
    },
    // {
    //   name: 'reelPortableText',
    //   type: 'portableText',
    //   title: 'Reel description',
    // },
    {
      title: 'Reel Link',
      name: 'reelLink',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
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
};
