import { ApolloProvider } from '@apollo/client';
import { NextAdapter } from 'next-query-params';
import { AppProps as NextAppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { QueryParamProvider } from 'use-query-params';

import { client } from 'api/apollo';
import { SEO } from 'components/tools';
import { Layout } from 'components/ui/general';
import { ProgressBar } from 'components/ui/router';
import { messages } from 'i18n/messages';

export interface AppProps extends NextAppProps {}

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
        <ApolloProvider client={client}>
          <SEO />
          <ProgressBar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </IntlProvider>
    </QueryParamProvider>
  );
};

export default App;
