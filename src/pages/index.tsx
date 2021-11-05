import { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import EventList from 'components/EventList';
import { Query } from 'services/contentful/types';

const EVENTS_QUERY = gql`
  query {
    eventCollection {
      items {
        sys {
          id
        }
        title
        description
        startTime
        location {
          name
          url
          location {
            lat
            lon
          }
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  const { data } = useQuery<Query>(EVENTS_QUERY);

  return <>{data?.eventCollection && <EventList eventCollection={data.eventCollection} />}</>;
};

export default Home;
