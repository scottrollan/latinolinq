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
  'September',
  'October',
  'November',
  'December',
];
const meses = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'deciembre',
];
const days = {
  Sun: ['S', 'u', 'n', 'd', 'a', 'y'],
  Mon: ['M', 'o', 'n', 'd', 'a', 'y'],
  Tue: ['T', 'u', 'e', 's', 'd', 'a', 'y'],
  Wed: ['W', 'e', 'd', 'n', 'e', 's', 'd', 'a', 'y'],
  Thu: ['T', 'h', 'u', 'r', 's', 'd', 'a', 'y'],
  Fri: ['F', 'r', 'i', 'd', 'a', 'y'],
  Sat: ['S', 'a', 't', 'u', 'r', 'd', 'a', 'y'],
};
const spanishDays = {
  Sunday: ['d', 'o', 'm', 'i', 'n', 'g', 'o'],
  Monday: ['l', 'u', 'n', 'e', 's'],
  Tuesday: ['m', 'a', 'r', 't', 'e', 's'],
  Wednesday: ['m', 'i', 'é', 'r', 'c', 'o', 'l', 'e', 's'],
  Thursday: ['j', 'u', 'e', 'v', 'e', 's'],
  Friday: ['v', 'i', 'e', 'r', 'n', 'e', 's'],
  Saturday: ['s', 'á', 'b', 'a', 'd', 'o'],
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
  eventStartTime = formatStartDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  //get day of week (Monday, Friday...)
  const DOW = formatStartDate.toString().substring(0, 3);
  eventDayOfWeek = days[DOW];

  //get src for image
  eventSrc = next.imageSrc;

  const end = next.end;
  let endDate;
  if (end) {
    endDate = end.toString();
  }
  const formatEndDate = new Date(endDate);
  //get end time
  eventEndTime = formatEndDate.toLocaleTimeString();
  // console.log(end - d);
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
  months,
  meses,
  spanishDays,
};
