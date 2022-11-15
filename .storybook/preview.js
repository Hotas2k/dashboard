import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { RootProvider } from '@entire.se/components';
import { useIsTabbing } from '@entire.se/hooks';
import { DocsContainer } from '@storybook/addon-docs';
import { IntlProvider } from 'react-intl';

import { client } from '../src/api/apollo';
import { messages } from '../src/i18n/messages';
import { theme } from '../src/styles/settings';
import { Documentation } from './components';

import { Global } from '../src/styles/Global.styles';

export const decorators = [
  (Story) => {
    useIsTabbing();

    return (
      <RootProvider theme={theme}>
        <Global />
        <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
          <ApolloProvider client={client}>
            <main>
              <Story />
            </main>
          </ApolloProvider>
        </IntlProvider>
      </RootProvider>
    );
  }
];

export const parameters = {
  docs: {
    container: ({ children, context }) => {
      useIsTabbing();

      return (
        <RootProvider theme={theme}>
          <Global />
          <DocsContainer context={context}>
            <Documentation>{children}</Documentation>
          </DocsContainer>
        </RootProvider>
      );
    }
  },
  options: {
    storySort: {
      order: ['Instructions', 'Components']
    }
  }
};
