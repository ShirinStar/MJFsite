export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          // {
          //   name: 'internalLink',
          //   type: 'object',
          //   title: 'Internal link',
          //   fields: [
          //     {
          //       name: 'reference',
          //       type: 'reference',
          //       title: 'Reference',
          //       to: [{ type: 'singleProject' }],
          //     },
          //   ],
          // },
        ],
      },
    },
  ],
};
