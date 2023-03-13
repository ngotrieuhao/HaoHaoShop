import '../src/index.css'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { AppProvider } from '../src/contexts/app.context'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

export const decorators = [
  withRouter,
  (Story) => (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Story />
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
]
