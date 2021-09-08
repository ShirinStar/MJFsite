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
      name: 'setOrder',
      title: 'Set order',
      type: 'number',
      options: {
        list: [
          { value: 1, title: 1 },
          { value: 2, title: 2 },
        ],
      },
    },
  ],
};
