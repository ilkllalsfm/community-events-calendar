document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('community-events-calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    events: [
      {
        title: 'Customer AMA with PS Team',
        start: '2025-11-12',
        url: 'https://community.example.com/t5/events/idb-p/events', 
        description: 'Join the PS team for an interactive AMA!'
      },
      {
        title: 'Roadmap Webinar',
        start: '2025-12-05',
        url: 'https://community.example.com/t5/events/idb-p/events',
        description: 'Sneak peek of the upcoming product roadmap.'
      }
    ],
    eventDidMount: function(info) {
      const tooltip = document.createElement('div');
      tooltip.className = 'calendar-tooltip';
      tooltip.textContent = info.event.extendedProps.description;
      tooltip.style.position = 'absolute';
      tooltip.style.display = 'none';
      tooltip.style.padding = '4px 8px';
      tooltip.style.background = '#333';
      tooltip.style.color = '#fff';
      tooltip.style.borderRadius = '6px';
      tooltip.style.fontSize = '0.8rem';
      tooltip.style.zIndex = '9999';

      document.body.appendChild(tooltip);

      info.el.addEventListener('mouseenter', function(e) {
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
      });
      info.el.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
      });
    }
  });

  calendar.render();
});
