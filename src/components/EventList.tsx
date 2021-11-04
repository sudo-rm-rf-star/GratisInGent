import { Event, EventCollection } from 'services/contentful/types';
import EventCard from 'components/EventCard';

type Props = {
  eventCollection: EventCollection;
};

const DAYS = [
  'zondag / sunday',
  'maandag / monday',
  'dinsdag / tuesday',
  'woensdag / wednesday',
  'donderdag / thursday',
  'vrijdag / friday',
  'zaterdag / saturday',
];

const ONE_DAY = 86400000;
const MAX_DAYS = 7;

const getEventsPerDay = (eventCollection: EventCollection): Map<number, Event[]> => {
  const eventsPerDay = new Map<number, Event[]>();
  const nowTime = new Date().getTime();
  eventCollection?.items.filter(Boolean).forEach((item) => {
    const eventTime = Date.parse(item?.startTime);
    const withinDays = Math.round((eventTime - nowTime) / ONE_DAY);
    if (item && withinDays >= 0 && withinDays < MAX_DAYS) {
      const eventsForDay = eventsPerDay.get(withinDays) ?? [];
      eventsPerDay.set(withinDays, [...eventsForDay, item]);
    }
  });
  return eventsPerDay;
};

const dayTitle = (withinDays: number): string => {
  const date = new Date(new Date().setDate(new Date().getDate() + withinDays));
  return `${DAYS[date.getDay()]} ${date.getDate()} - ${
    date.getMonth() + 1
  } - ${date.getFullYear()}`;
};

const EventList = ({ eventCollection }: Props): JSX.Element => {
  const eventsPerDay = getEventsPerDay(eventCollection);

  return (
    <>
      {[...Array(MAX_DAYS).keys()]
        .filter((withinDays) => eventsPerDay.has(withinDays))
        .map((withinDays) => (
          <div key={withinDays}>
            <p className="bg-black text-gray-300 px-14 py-0.5 my-1 font-semibold uppercase">
              {dayTitle(withinDays)}
            </p>
            {eventsPerDay.has(withinDays) &&
              eventsPerDay
                // Get events within X days
                .get(withinDays)
                // Sort by timestamp
                ?.sort((event1, event2) =>
                  Date.parse(event1.startTime) < Date.parse(event2.startTime) ? -1 : 1,
                )
                .map((event) => (
                  <div key={event.sys.id}>
                    <EventCard event={event} />
                  </div>
                ))}
          </div>
        ))}
    </>
  );
};

export default EventList;
