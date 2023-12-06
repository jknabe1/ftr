export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'bio',
        type: 'string',
        title: 'Bio',
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
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
        },
      }
    ],
  };
  