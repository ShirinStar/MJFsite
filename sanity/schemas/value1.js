import { MdFavoriteBorder } from 'react-icons/md';

export default {
  name: 'value1',
  title: 'Value section one',
  type: 'document',
  icon: MdFavoriteBorder,
  fields: [
    {
      name: 'name',
      title: 'Person name',
      type: 'string',
    },
    {
      name: 'personLink',
      title: 'Person link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      title: 'Person image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
