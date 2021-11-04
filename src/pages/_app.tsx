import React from 'react';

import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from 'services/contentful';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={graphqlClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
