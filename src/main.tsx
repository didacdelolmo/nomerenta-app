import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AudioProvider } from './context/audio-context.tsx';
import { CounterProvider } from './context/counter-context.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    // onError: (error) => {
    //   console.error('Something went wrong:', error.message);
    // },
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AudioProvider>
          <CounterProvider>
            <App />
          </CounterProvider>
        </AudioProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
