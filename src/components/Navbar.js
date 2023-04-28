import { NavLink } from 'react-router-dom';
import logo from '../assets/spaceTravelersBg.png';

const links = [
  { path: '/', text: 'Rockets', id: 'border' },
  { path: 'missions', text: 'Missions', id: 'border' },
  { path: 'dragons', text: 'Dragons', id: 'border' },
  { path: 'profile', text: 'Profile' },
];

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : 'normal')}
            id={link.id}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
