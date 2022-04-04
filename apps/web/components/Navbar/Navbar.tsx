import './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <a href="./" className="contrast">
            <strong>Brand</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <details role="list" dir="rtl">
            <summary role="link" className="secondary">
              Theme
            </summary>
            <ul role="listbox">
              <li>
                <a href="#" data-theme-switcher="auto">
                  Auto
                </a>
              </li>
              <li>
                <a href="#" data-theme-switcher="light">
                  Light
                </a>
              </li>
              <li>
                <a href="#" data-theme-switcher="dark">
                  Dark
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}
