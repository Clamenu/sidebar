import React from 'react';
import styles from '../sidebar.css';

const CalendarWeek = ({ calendarWeek, selectedDate, calendarDate, handleDateClick }) => {
  const selected = new Date(selectedDate);
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();
  const today = new Date().getDate();
  const selDay = selected.getDate();
  const selMonth = selected.getMonth();
  const selYear = selected.getFullYear();
  const calMonth = calendarDate.getMonth();
  const calYear = calendarDate.getFullYear();

  return (
    <tr>
      {calendarWeek.map((day, idx) => {
        let onClick = () => handleDateClick(day, calendarDate);
        let classes = [styles.calendarDay];
        let text = day;
        if (thisMonth === calMonth && day === today && thisYear === calYear) { 
          classes.push(styles.today); 
        }
        if (selMonth === calMonth && day === selDay && calYear === selYear) { 
          classes.push(styles.selectedDate); 
          onClick = () => {};
        } 
        if (((thisMonth === calMonth && day < today) || 
             (thisMonth + 1 === calMonth && day > today) || 
             (thisMonth !== calMonth && thisMonth + 1 !== calMonth) || 
             thisYear !== calYear) && day !== 0) {
          classes.push(styles.invalidDate); 
          onClick = () => {};
        }
        if (day === 0) { 
          text = ''; 
          onClick = () => {};
        }
        return ( 
          <td 
            key={idx} 
            className={classes.join(' ')}
            onClick={onClick}
          >{text}</td> 
        );
      })}
    </tr>
  );
};

export default CalendarWeek;