import Image from 'next/image';
import styles from './Form.module.css';

export default function Form() {
  return (
    <main className="container">
      <article className={styles.grid}>
        <div className={styles.form}>
          <hgroup>
            <h1>Sign in</h1>
            <h2>A minimalist layout for Login pages</h2>
          </hgroup>
          <form>
            <input
              type="text"
              name="login"
              placeholder="Login"
              aria-label="Login"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              required
            />
            <fieldset>
              <label>
                <input
                  type="checkbox"
                  role="switch"
                  id="remember"
                  name="remember"
                />
                Remember me
              </label>
            </fieldset>
            <button type="submit" className="contrast">
              Login
            </button>
          </form>
        </div>
        <div className={styles.hero}>
          <Image
            alt="Unsplash logo"
            src="https://images.unsplash.com/photo-1649791069748-9e61375148d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            width={800}
            height={500}
            layout="responsive"
          />
        </div>
      </article>
    </main>
  );
}
