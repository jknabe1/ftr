export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
          hotspot: true,
      }
  },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      description: 'Check this box if the post is featured.',
    },
  ],
};
