import styles from './Form.module.css';

export default function Form() {
  return (
    <main className="container">
      <article className={styles.grid}>
        <div>
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
        <div className={styles['hero-img']}></div>
      </article>
    </main>
  );
}
