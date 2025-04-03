import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Navbar.css';
import { useCart } from '../context/CartContext'; 

function Navbar() {
  const { cart, calculateTotal } = useCart(); 
  const [token, setToken] = React.useState(false); 

  const total = calculateTotal(); 

  const formattedTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });

  const handleToggleToken = () => {
    setToken(!token);
  };

  return (
    <nav className="navbar">
      <span className="navbar-title">¡Pizzería Il Nino Totoli!</span>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <Link to="/" className="navbar-button">Home</Link>
        </li>
        <li className="navbar-link-item">
          <Link to="/register" className="navbar-button">Register</Link>
        </li>
        <li className="navbar-link-item">
          <Link to="/login" className="navbar-button">Login</Link>
        </li>
        <li className="navbar-link-item">
          <Link to="/profile" className="navbar-button">Profile</Link>
        </li>
        {token ? (
          <li className="navbar-link-item">
            <button className="navbar-button" onClick={handleToggleToken}>Logout</button>
          </li>
        ) : null}
        <li className="navbar-link-item navbar-total">
          <Link to="/cart" className="navbar-button navbar-total-button">
            Total: {formattedTotal}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;