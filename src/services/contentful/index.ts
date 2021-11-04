import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`,
  cache: new InMemoryCache(),
});

export default graphqlClient;
