import { FaRegNewspaper } from 'react-icons/fa';

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bodyPortableText',
      type: 'array',
      title: 'Press description and link',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
