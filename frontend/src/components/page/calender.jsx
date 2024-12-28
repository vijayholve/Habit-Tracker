import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

const HabitCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios;
    axios
      .get("http://localhost:8000/api/habit-logs/", { withCredentials: true })
      .then((response) => {
       
        const formattedEvents = response.data.map((habitLog) => ({
          id: habitLog.id,
          title: habitLog.title,
          start: habitLog.date,
          backgroundColor: habitLog.is_complete ? "green" : "red",
        }));
        setEvents(formattedEvents);
        // console.log(events);
      })
      .catch((error) => {
        console.error("Error fetching habits:", error);
      });
  }, []);
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default HabitCalendar;
