export default {
  name: 'job',
  type: 'document',
  title: 'Jobs',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'jobDescription',
      title: 'Job Description',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Is this job still open?',
      type: 'boolean',
    },
    {
      name: 'displayOrder',
      title: 'Order of Appearance',
      type: 'number',
    },
  ],
};
