import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import NextEventModal from '../../components/NextEventModal';
import EventModal from '../../components/EventModal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import {
  findNextEvent,
  thisEvent,
  eventMonth,
  eventDayOfMonth,
  eventYear,
  eventStartTime,
  eventDayOfWeek,
  eventSrc,
  meses,
  spanishDays,
  spanishMonths,
} from '../../functions/GetNextEvent';
import { fetchEvents, Client } from '../../api/client';
import imageUrlBuilder from '@sanity/image-url';
import styles from './Calendar.module.scss';

const builder = imageUrlBuilder(Client);

const urlFor = (source) => {
  return builder.image(source);
};
const Calendar = () => {
  const now = new Date(Date.now());
  const today = now.toISOString();
  const [events, setEvents] = useState([]);
  const [nextEvent, setNextEvent] = useState({});
  const [nextEventDay, setNextEventDay] = useState('');
  const [nextEventMonth, setNextEventMonth] = useState('');
  const [nextEventYear, setNextEventYear] = useState('');
  const [nextEventDOW, setNextEventDOW] = useState([]);
  const [nextEventStartTime, setNextEventStartTime] = useState('');
  const [nextEventSrc, setNextEventSrc] = useState('');
  let monthStart = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentMonth);

  const renderHeader = () => {
    const esteMes = format(currentMonth, 'MMMM');
    const esteAño = format(currentMonth, 'yyyy');
    return (
      <div className={[`${styles.header} ${styles.row} ${styles.flexMiddle}`]}>
        <div
          className={[`${styles.col} ${styles.colStart}`]}
          onClick={prevMonth}
        >
          <div className={styles.icon}>&#60;</div>
        </div>
        <div
          className={[`${styles.col} ${styles.colCenter} ${styles.stacked}`]}
        >
          <span>
            {spanishMonths[esteMes]} de {esteAño}
          </span>
          <Button variant="light" onClick={goToToday}>
            ir a hoy
          </Button>
        </div>
        <div className={[`${styles.col} ${styles.colEnd}`]} onClick={nextMonth}>
          <div className={styles.icon}>&#62;</div>
        </div>
      </div>
    );
  };

  const renderCells = (thisMonth) => {
    monthStart = startOfMonth(thisMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = 'd';
    let rows = [];
    let days = [];
    let day = startDate; // 'Fri Aug 07 2020 .....'
    let formattedDate = ''; // '7'
    // let ref; // '1597291200000' (day.getTime())
    // let ev;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        //collect 7 days to make a week
        let ref;
        let ev = '';
        formattedDate = format(day, dateFormat);
        ref = day.getTime();
        events.forEach((r) => {
          const eventDate = new Date(r.start);
          const month = eventDate.getMonth();
          const dow = eventDate.getDate();
          const yr = eventDate.getFullYear();
          if (r.dayRef === ref) {
            ev = [
              ...ev,
              <span
                key={r.id}
                className={styles.calEventSpan}
                style={{ zIndex: '999', position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '50%',
                    borderBottom: '2px solid var(--white)',
                    transform: 'rotate(-15deg) translateX(-2px)',
                    transformOrigin: 'center center',
                    display: r.start >= today ? 'none' : 'inherit',
                  }}
                ></div>
                <EventModal
                  text={`${new Date(r.start).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`}
                  id={r.id}
                  title={r.titleEsp}
                  subtitle={r.subtitleEsp}
                  date={`${dow} de ${meses[month]} de ${yr}`}
                  startTime={`a las ${new Date(r.start).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`}
                  description={r.descriptionEsp}
                  link1={r.link1}
                  link1D={r.link1Description}
                  link2={r.link2}
                  link2D={r.link2Description}
                  src={r.imageSrc}
                />
              </span>,
            ];
          }
        });
        const cloneDay = day;

        days = [
          ...days,
          <div
            value={formattedDate}
            id={ref}
            className={[
              `${styles.col} ${styles.cell} ${
                !isSameMonth(day, monthStart)
                  ? styles.disabled
                  : isSameDay(day, selectedDate)
                  ? styles.selected
                  : ''
              }`,
            ]}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className={styles.number}>{formattedDate}</span>
            {ev}
            <span className={styles.bg}>{formattedDate}</span>
          </div>,
        ];
        day = addDays(day, 1);
        ev = '';
      }
      rows = [
        ...rows,
        <div className={styles.row} key={day}>
          {days}
        </div>,
      ];
      days = []; // an array of objects
    }

    return <div className={styles.body}>{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };
  const nextMonth = async () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const fetchData = async () => {
    let theseEvents = [];
    const event = await fetchEvents;
    event.forEach((e) => {
      const trimDate = new Date(e.start).toString().substring(4, 15);
      const simpleDate = new Date(trimDate);
      const imageObj = e.image;
      const imageUrl = urlFor(imageObj).url().toString();
      let currentEvent = {
        id: e._id,
        start: e.start,
        dayRef: simpleDate.getTime(),
        end: e.end,
        allDay: e.allDay,
        title: e.title,
        titleEsp: e.titleEsp,
        subtitle: e.subtitle,
        subtitleEsp: e.subtitulo,
        description: e.description,
        descriptionEsp: e.descriptionEsp,
        link1Description: e.link1Description,
        link1: e.link1,
        link2Description: e.link2Description,
        link2: e.link2,
        imageSrc: imageUrl,
      };

      theseEvents.push(currentEvent);
    });
    setEvents(events.concat(theseEvents));
    findNextEvent(theseEvents);
    setNextEvent({ ...thisEvent });
    setNextEventMonth(eventMonth);
    setNextEventDay(eventDayOfMonth);
    setNextEventYear(eventYear);
    setNextEventDOW(eventDayOfWeek);
    setNextEventStartTime(eventStartTime);
    setNextEventSrc(eventSrc);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.calendar}>
      <NavBar />
      <Link to="/Calendar" className={styles.translate}>
        <em className={styles.translate}>see this page in english</em>
      </Link>
      <h1>Próximos Eventos</h1>
      <div className={styles.calWrapper}>
        <div className={styles.cal}>
          {renderHeader()}
          <div className={[`${styles.days} ${styles.row}`]}>
            {[
              'domingo',
              'lunes',
              'martes',
              'miércoles',
              'jueves',
              'viernes',
              'sábado',
            ].map((ddd) => {
              return (
                <span
                  className={[`${styles.col} ${styles.colCenter}`]}
                  key={ddd}
                >
                  {ddd}
                </span>
              );
            })}
          </div>
          {renderCells(currentMonth)}
        </div>
        <div className={styles.nextEventDiv} id="nextEvent">
          <NextEventModal
            text={
              nextEvent && nextEventDOW ? (
                <span className={styles.nextEvent}>
                  <h3 id="nextEventHeader">el próximo evento</h3>
                  <div className={styles.datebook} id="datebook">
                    <strong id="datebookMonth">
                      {spanishMonths[format(currentMonth, 'MMMM')]}
                    </strong>
                    <span style={{ color: 'var(--dark-gray)' }}>
                      {nextEventDay}
                    </span>
                    <span className={styles.dayString} id="datebookDay">
                      <span>{spanishDays[nextEventDOW.join('')]}</span>
                    </span>
                  </div>
                  <h4>
                    <u id="eventTitle">{nextEvent.titleEsp}</u>
                  </h4>
                </span>
              ) : null
            }
            id={nextEvent.id}
            title={nextEvent.titleEsp}
            subtitle={nextEvent.subtitleEsp}
            date={`${nextEventDay} de ${nextEventMonth} de ${nextEventYear}`}
            startTime={`a las ${nextEventStartTime}`}
            description={nextEvent.descriptionEsp}
            link1={nextEvent.link1}
            link1D={nextEvent.link1Description}
            link2={nextEvent.link2}
            link2D={nextEvent.link2Description}
            src={nextEventSrc}
          />
        </div>
      </div>
      {events.map((e, index) => {
        const thisEventDate = new Date(e.start.toString());
        const month = thisEventDate.getMonth();
        const dow = thisEventDate.getDate();
        const yr = thisEventDate.getFullYear();
        const startTime = thisEventDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        return (
          <div
            key={e.id}
            className={styles.nextEventsList}
            style={{
              display: e.start >= today ? 'flex' : 'none',
              backgroundColor:
                index % 2 === 0 ? 'var(--lightest-gray)' : '#ffffff',
            }}
          >
            <div className={styles.eventPicWrapper}>
              <img src={e.imageSrc} alt="" className={styles.eventPic} />
            </div>
            <div className={styles.eventInfoWrapper}>
              <h5>
                {`${dow} de ${meses[month]} de ${yr}`}
                <span
                  style={{ display: startTime !== '' ? 'inherit' : 'none' }}
                >
                  {' '}
                  at {startTime}
                </span>
              </h5>
              <h3>{e.titleEsp}</h3>
              <EventModal
                text="mas..."
                id={e.id}
                title={e.titleEsp}
                subtitle={e.subtitleEsp}
                date={`${dow} de ${meses[month]} de ${yr}`}
                startTime={e.StartTime}
                description={e.descriptionEsp}
                link1={e.link1}
                link1D={e.link1Description}
                link2={e.link2}
                link2D={e.link2Description}
                src={e.imageSrc}
              />
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Calendar;
