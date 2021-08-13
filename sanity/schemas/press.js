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
  ],
};
