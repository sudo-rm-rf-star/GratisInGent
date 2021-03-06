import { Event } from 'services/contentful/types';

type Props = {
  event: Event;
};

const timeTitle = (timeStr: string): string => {
  const date = new Date(Date.parse(timeStr));
  const hours = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
  const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

const renderDescription = (description: string): JSX.Element => {
  const matches = [...description.matchAll(new RegExp(/\[([^\]]*)\]\(([^)]*)\)/, 'g'))];
  let stringElement = description;
  // eslint-disable-next-line no-restricted-syntax
  for (const match of matches) {
    let insidePart = match[1];
    switch (match[1].toLowerCase()) {
      case 'website':
        insidePart = `<img src="/images/globe.png" alt="globe" style="display:inline;"/>`;
        break;
      case 'facebook':
        insidePart = `<img src="/images/facebook.jpg" alt="facebook" style="display:inline;"/>`;
        break;
      default:
        break;
    }
    stringElement = stringElement.replace(
      match[0],
      `<a className="inline" href="${match[2]}">${insidePart}</a>`,
    );
  }
  // eslint-disable-next-line react/no-danger
  return <span dangerouslySetInnerHTML={{ __html: stringElement }} />;
};

const EventCard = ({ event }: Props): JSX.Element => {
  return (
    <div className="px-14 py-2">
      <span className="uppercase font-bold">
        <span>{timeTitle(event.startTime)}</span>
        {' > '}
        <span>
          {event.location?.url ? (
            <a className="underline" href={event.location.url}>
              {event.location?.name}
            </a>
          ) : (
            <>{event.location?.name}</>
          )}{' '}
        </span>
        {' > '}
        <span>{event.title}</span>
        {' : '}
      </span>
      {event.description && renderDescription(event.description)}
    </div>
  );
};

export default EventCard;
