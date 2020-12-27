const SANITY_KEY = process.env.REACT_APP_SANITY_KEY;

const sanityClient = require('@sanity/client');
export const Client = sanityClient({
  projectId: 'erqpw4nh',
  dataset: 'production',
  token: SANITY_KEY,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export const fetchEvents = Client.fetch("*[_type == 'event'] | order(start)");

export const fetchBoard = Client.fetch(
  "*[_type == 'board'] | order(displayOrder)"
);

export const fetchServices = Client.fetch(
  "*[_type == 'service'] | order(displayOrder)"
);

export const fetchPledges = Client.getDocument(
  '10fa40ab-126b-42de-9f85-d63eae447d2f' //id of Pledge to Vote signup
);
