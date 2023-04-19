import axios from "axios";

const apiKey = "AIzaSyAxvB5fuHD94liuBcHWM56u812ZdzoqQV8";
const calendarId = "c_b30b335d74162309c9d35ba25406e82338f05ac9523ccb31ab583d77dd299824@group.calendar.google.com";

export async function fetchUpcomingEvents() {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${new Date().toISOString()}&maxResults=20&orderBy=startTime&singleEvents=true`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    throw error;
  }
}
