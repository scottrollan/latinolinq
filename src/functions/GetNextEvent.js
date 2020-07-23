let thisEvent = {};
let eventMonth = '';
let eventDayOfMonth = '';
let eventStartTime = '';
let eventEndTime = '';
let eventYear = '';
let eventDayOfWeek = '';
let eventSrc = '';

const now = new Date(Date.now());
const today = now.toISOString();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Septemeber',
  'October',
  'November',
  'December',
];
const days = {
  Sun: 'Sunday',
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
};

const findNextEvent = (array) => {
  const next = array.find((ev) => {
    return ev.start > today;
  });

  thisEvent = { ...next };
  const d = next.start;
  //get month name
  const mes = parseInt(d.toString().substring(5, 7) - 1);
  eventMonth = months[mes];
  //get day of the month (7, 23, 31, etc.)
  eventDayOfMonth = d.toString().substring(8, 10);
  //get year
  eventYear = d.toString().substring(0, 4);

  const strDate = d.toString();
  const formatStartDate = new Date(strDate);
  //get starting time
  eventStartTime = formatStartDate.toLocaleTimeString();
  //get day of week (Monday, Friday...)
  const DOW = formatStartDate.toString().substring(0, 3);
  eventDayOfWeek = days[DOW];

  //get src for image
  eventSrc = next.imageSrc;

  const end = next.end;
  const endDate = end.toString();
  const formatEndDate = new Date(endDate);
  //get end time
  eventEndTime = formatEndDate.toLocaleTimeString();
  console.log(end - d);
};

export {
  findNextEvent,
  thisEvent,
  eventMonth,
  eventDayOfMonth,
  eventYear,
  eventStartTime,
  eventEndTime,
  eventDayOfWeek,
  eventSrc,
};
