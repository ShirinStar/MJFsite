import { FaHubspot } from 'react-icons/fa';

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: FaHubspot,
  fields: [
    {
      name: 'name',
      title: 'Tag name',
      type: 'string',
    },
    {
      name: 'setOrder',
      title: 'Set order',
      type: 'number',
      options: {
        list: [
          { value: 1, title: 1 },
          { value: 2, title: 2 },
          { value: 3, title: 3 },
          { value: 4, title: 4 },
          { value: 5, title: 5 },
        ],
      },
    },
  ],
};
