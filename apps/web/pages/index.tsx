export default function Web() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <main className="container-fluid">
        <article className="grid">
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
          <div></div>
        </article>
      </main>
    </div>
  );
}
