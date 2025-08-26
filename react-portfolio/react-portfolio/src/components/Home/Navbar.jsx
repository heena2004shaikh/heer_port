import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Experience', link: '/experience' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Resume', link: '/resume' },
    { label: 'Contact', link: '/contact' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink 
          to={link} 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          key={key}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
