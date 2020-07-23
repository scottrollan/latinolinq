import React from 'react';
import EventModal from './EventModal';

const NextEventModal = ({
  id,
  title,
  description,
  date,
  link1,
  link1D,
  link2,
  link2D,
  src,
}) => {
  return (
    <span id={id}>
      <EventModal
        title={title}
        description={description}
        date={date}
        link1={link1}
        link1D={link1D}
        link2={link2}
        link2D={link2D}
        src={src}
      />
    </span>
  );
};

export default NextEventModal;
