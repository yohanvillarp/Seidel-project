import './Header.css';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="header py-3">
      <Link to="/" className="header__logo-link">
        <i className="fa-brands fa-digg fa-3x"></i>
      </Link>
      

      <nav className="header__nav">
        <ul className="header__nav-list d-flex gap-4">
          <li>
            <Link to="/" className="header__nav-link">HOMBRES</Link>
          </li>
          <li>
            <Link to="/" className="header__nav-link">MUJERES</Link>
          </li>
          <li>
            <Link to="/"  className="header__nav-link">NIÑOS</Link>
          </li>
        </ul>
      </nav>

      <div className="header__user d-flex gap-3">

        <Link to="/"  className='header__user-link'>
          <i className="fa-solid fa-bag-shopping fa-lg"></i>
        </Link>
        
        <Link to="/" className='header__user-link'>
          <i className="fa-regular fa-heart fa-lg"></i>
        </Link>

        <Link to="/" className='header__user-link'>
          <i className="fa-regular fa-bell fa-lg"></i>
        </Link>

        <Link to="/" className='header__user-link'>
          <i className="fa-regular fa-user fa-lg"></i>
        </Link>
        
      </div>

    </header>
  )
}

export default Header