export default {
  name: 'job',
  type: 'document',
  title: 'Position',
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
  ],
};
