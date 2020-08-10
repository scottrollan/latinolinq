const sanityClient = require('@sanity/client');
export const client = sanityClient({
  projectId: 'q4pr99l8',
  dataset: 'production',
  token: '',
  useCdn: false,
});

export const fetchEvents = client.fetch("*[_type == 'event'] | order(start)");

export const fetchBoard = client.fetch(
  "*[_type == 'board'] | order(displayOrder)"
);

export const fetchServices = client.fetch(
  "*[_type == 'service'] | order(start)"
);
