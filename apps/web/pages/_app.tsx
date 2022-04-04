import '@picocss/pico/css/pico.css';
import '../css/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="container-fluid">
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
    </>
  );
}

export default MyApp;
