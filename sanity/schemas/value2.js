import { MdFavoriteBorder } from 'react-icons/md';

export default {
  name: 'value2',
  title: 'Value section two',
  type: 'document',
  icon: MdFavoriteBorder,
  fields: [
    {
      name: 'name',
      title: 'Organization name',
      type: 'string',
    },
    {
      name: 'orgLink',
      title: 'Organization link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      title: 'Organization image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
