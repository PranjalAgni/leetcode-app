import '@picocss/pico/css/pico.css';
import '../css/main.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <footer className="container-fluid" style={{ position: 'fixed' }}>
          <small>
            Built with{' '}
            <a href="https://picocss.com" className="secondary">
              Pico
            </a>{' '}
            •{' '}
            <a
              href="https://github.com/picocss/examples/tree/master/sign-in/"
              className="secondary"
            >
              Source code
            </a>
          </small>
        </footer>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
