import { FaFileImage } from 'react-icons/fa';

export default {
  name: 'homePageImage',
  title: 'Home Page Image',
  type: 'document',
  icon: FaFileImage,
  fields: [
    {
      name: 'homePortableText',
      type: 'portableText',
      title: 'Home page bio',
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
