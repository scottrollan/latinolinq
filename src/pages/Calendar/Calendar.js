import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import NextEventModal from '../../components/NextEventModal';
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
} from '../../functions/GetNextEvent';
import { fetchEvents } from '../../api/client';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const now = new Date(Date.now());
  const today = now.toISOString();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [nextEvent, setNextEvent] = useState({});
  const [nextEventDay, setNextEventDay] = useState('');
  const [nextEventMonth, setNextEventMonth] = useState('');
  const [nextEventYear, setNextEventYear] = useState('');
  const [nextEventDOW, setNextEventDOW] = useState('');
  const [nextEventStartTime, setNextEventStartTime] = useState('');
  const [nextEventSrc, setNextEventSrc] = useState('');

  const renderHeader = () => {
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
          <span>{format(currentMonth, 'MMMM yyyy')}</span>
          <Button variant="light" onClick={goToToday}>
            Go To Today
          </Button>
        </div>
        <div className={[`${styles.col} ${styles.colEnd}`]} onClick={nextMonth}>
          <div className={styles.icon}>&#62;</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = 'EEEE';
    let days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days = [
        ...days,
        <span className={[`${styles.col} ${styles.colCenter}`]} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </span>,
      ];
    }
    return <div className={[`${styles.days} ${styles.row}`]}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = 'd';
    let rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days = [
          ...days,
          <div
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
            <span className={styles.bg}>{formattedDate}</span>
          </div>,
        ];
        day = addDays(day, 1);
      }
      rows = [
        ...rows,
        <div className={styles.row} key={day}>
          {days}
        </div>,
      ];
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
    renderCells();
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const fetchData = async () => {
    let theseEvents = [];
    const event = await fetchEvents;
    event.forEach((e) => {
      const rawRef = e.image.asset._ref;
      const refArray = rawRef.split('-');
      const src = `https://cdn.sanity.io/images/q4pr99l8/production/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
      let currentEvent = {
        id: e._id,
        start: e.start,
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
        imageSrc: src,
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
      <h1>Próximos Eventos</h1>

      <div className={styles.calWrapper}>
        <div className={styles.cal}>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
        <div className={styles.upcoming}>
          <h3>Next Event</h3>
          <div className={styles.datebook}>
            <strong>{nextEventMonth}</strong>
            <h2>{nextEventDOW}</h2>
            <span>{nextEventDay}</span>
          </div>
          <h4>
            <u>{nextEvent.title}</u>
          </h4>

          <em>{nextEvent.subtitle}</em>

          <NextEventModal
            id={nextEvent.id}
            title={nextEvent.title}
            date={`${nextEventMonth} ${nextEventDay}, ${nextEventYear}`}
            description={nextEvent.description}
            link1={nextEvent.link1}
            link1D={nextEvent.link1Description}
            link2={nextEvent.link2}
            link2D={nextEvent.link2Description}
            src={nextEventSrc}
          />
        </div>
      </div>
      {events.map((e, index) => {
        return (
          <div
            key={e.id}
            style={{
              width: '100%',
              padding: '2rem',
              display: e.start > today ? 'flex' : 'none',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor:
                index % 2 === 0 ? '#ffffff' : 'var(--lightest-gray)',
            }}
          >
            <div className={styles.eventPicWrapper}>
              <img src={e.imageSrc} alt="" className={styles.eventPic} />
            </div>
            <div className={styles.eventInfoWrapper}>
              <h5>{e.start}</h5>
              <h3>
                {e.title} / {e.titleEsp}
              </h3>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Calendar;
