export default {
  name: 'service',
  type: 'document',
  title: 'Direct Services',
  fields: [
    {
      name: 'titleEng',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleEsp',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'displayOrder',
      title: 'Order on page',
      type: 'number',
      description:
        '1 will be the first to be displayed, 2 will be the second, etc.',
    },
    {
      name: 'descriptionEng',
      type: 'array',
      title: 'Description in English',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {},
        },
      ],
    },
    {
      name: 'descriptionEsp',
      type: 'array',
      title: 'Descripción en español',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {},
        },
      ],
    },
    {
      name: 'serviceImage',
      type: 'image',
      title: 'Service Image',
    },
  ],

  preview: {
    select: {
      title: 'titleEng',
      media: 'serviceImage',
    },
  },
};
