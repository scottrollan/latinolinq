export default {
  name: 'event',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleEsp',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subitle',
      type: 'string',
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Start Date,',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
    {
      name: 'end',
      title: 'End Date',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
    {
      name: 'allDay',
      type: 'boolean',
      title: 'All Day Event?',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Event Info (English)',
    },
    {
      name: 'descriptionEsp',
      type: 'string',
      title: 'Información del Evento (español)',
    },
    {
      name: 'link1Description',
      type: 'string',
      title: 'Any explanation for the first link.',
    },
    {
      name: 'link1',
      type: 'url',
      title: 'First URL to Event (if any) in this form: http://google.com',
    },
    {
      name: 'link2Description',
      type: 'string',
      title: 'Any explanation for the second link.',
    },
    {
      name: 'link2',
      type: 'url',
      title: 'Second URL to Event (if any) in this form: http://facebook.com',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'importantInfo',
      type: 'string',
      title:
        'Any emphasized information (Ex: "Register Now!!" - this will be bolded at the bottome of the event)',
    },
    {
      name: 'informaci0nImportante',
      type: 'string',
      title:
        'Cualquier información enfatizada (Ej: "¡Regístrese ahora!" - esto estará en negrita al final de la descripción del evento)',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
