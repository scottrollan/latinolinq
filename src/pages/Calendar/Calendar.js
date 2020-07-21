import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
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
import styles from './Calendar.module.scss';

const Calendar = () => {
  // const [today, setToday] = useState(format(new Date(), 'MMMM yyyy'));
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          <h3>Upcoming Events</h3>
          <p>
            This is where I will import details from the next event scheduled
            within the calendar, with date included.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
