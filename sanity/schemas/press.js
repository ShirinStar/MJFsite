import { FaRegNewspaper } from 'react-icons/fa';

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
    {
      name: 'name',
      title: 'Magazine name',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'year of publish',
    },
    {
      name: 'pressLink',
      title: 'Press link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      title: 'Press hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    //       { value: 7, title: 7 },
    //       { value: 8, title: 8 },
    //       { value: 9, title: 9 },
    //       { value: 10, title: 10 },
    //       { value: 11, title: 11 },
    //       { value: 12, title: 12 },
    //       { value: 13, title: 13 },
    //       { value: 14, title: 14 },
    //       { value: 15, title: 15 },
    //       { value: 16, title: 16 },
    //       { value: 17, title: 17 },
    //       { value: 18, title: 18 },
    //       { value: 19, title: 19 },
    //       { value: 20, title: 20 },
    //       { value: 21, title: 21 },
    //       { value: 22, title: 22 },
    //       { value: 23, title: 23 },
    //       { value: 24, title: 24 },
    //       { value: 25, title: 25 },
    //       { value: 26, title: 26 },
    //       { value: 27, title: 27 },
    //       { value: 28, title: 28 },
    //       { value: 29, title: 29 },
    //       { value: 30, title: 30 },
    //     ],
    //   },
    // },
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
