import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import "./SportsCalendar.css";

const SportsCalendar = ({ apiKey, calendarId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${encodeURIComponent(
        new Date().toISOString()
      )}&maxResults=10&singleEvents=true&orderBy=startTime`
    )
      .then((response) => response.json())
      .then((data) => setEvents(data.items))
      .catch((error) => console.error("Error fetching events:", error));
  }, [apiKey, calendarId]);

  return (
    <div className="sports-calendar">
      <h1>{format(new Date(), "EEEE, MMMM d, yyyy")}</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>
                {format(
                  parseISO(event.start.dateTime || event.start.date),
                  "h:mm a"
                )}
              </td>
              <td>{event.summary}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportsCalendar;
