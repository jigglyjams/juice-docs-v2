import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// export const EVENTS =
//   {
//     url: 'https://raw.githubusercontent.com/jigglyjams/nance/main/tmp/juicebox.ics',
//     format: 'ics'
//   }

const EVENTS = 
[
  {
    title  : 'event1',
    start  : '2022-04-01'
  },
  {
    title  : 'event2',
    start  : '2022-05-05',
    end    : '2022-05-07'
  },
  {
    title  : 'event3',
    start  : '2022-04-09T12:30:00',
    allDay : false // will make the time show
  }
]

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: ''
        }}
        initialView='dayGridMonth'
        weekends={true}
        initialEvents={EVENTS}
      />
    </div>
    )
  }
}
