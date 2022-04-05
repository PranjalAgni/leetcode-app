import Clock from '../Clock/Clock';
import './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="container-fluid">
      <ul>
        <strong
          style={{
            marginBottom: '45px',
            marginLeft: '12px',
          }}
        >
          Brand
        </strong>
      </ul>
      <ul>
        <li>
          <summary role="link" className="secondary">
            <Clock className="secondary" />
          </summary>
        </li>
      </ul>
    </nav>
  );
}
