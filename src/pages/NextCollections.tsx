import { useState } from 'react';
import Calendar from 'react-calendar';

import './calendarStyles.css'; // Import your custom styles

const NextCollections = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const highlightedDates = [
    new Date(2023, 9, 5), 
    new Date(2023, 9, 15), 
    new Date(2023, 9, 20), 
    new Date(2023, 9, 25),
  ]; // Replace with actual collection dates

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isHighlighted = highlightedDates.some(
        (highlightedDate) =>
          highlightedDate.getDate() === date.getDate() &&
          highlightedDate.getMonth() === date.getMonth() &&
          highlightedDate.getFullYear() === date.getFullYear()
      );
      return isHighlighted ? 'highlighted-date' : null;
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-2">Next Collections</h3>
      <div className="bg-white p-4 rounded-lg shadow-inner custom-calendar">
        <Calendar
          onClickDay={setSelectedDate}
          value={selectedDate}
          tileClassName={tileClassName} // Highlight specific dates
        />
        <div className="mt-4 text-base text-gray-700">
          <div className="font-medium">Selected Date: {selectedDate.toLocaleDateString()}</div>
          <div>Collection Time: <span className="font-semibold text-teal-600">18:00 PM</span></div>
        </div>
      </div>
    </div>
  );
};

export default NextCollections;
