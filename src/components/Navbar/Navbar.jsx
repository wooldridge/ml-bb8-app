import './Navbar.css';

import { Link } from 'react-router-dom';
import { Search, Plus, Cross } from 'akar-icons';
import Logo from '../../images/ml.svg';
import Dashboard from '../../images/dashboard.svg';
import Notification from '../../images/notification.svg';
import User from '../../images/User.svg';
import Settings from '../../images/settings.svg';

export default function Navbar() {
  return (
    <div className='navbar navbar-expand-xl navbar-dark bg-dark mb-2'>
      <div className='container-fluid'>
        <a className='navbar-brand mt-2 mt-lg-0 pe-4' href='#'>
          <img src={Logo} height='30' alt='' loading='lazy' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown d-flex align-items-center'>
              <a
                className='nav-link dropdown-toggle text-uppercase px-3'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Menu
              </a>
              <div
                className='dropdown-menu dropdown-menu-dark'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item dropdown d-flex align-items-center'>
              <a
                className='nav-link dropdown-toggle text-uppercase px-3'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                View Type
              </a>
              <div
                className='dropdown-menu dropdown-menu-dark'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>

            <li className='nav-item d-flex align-items-center active px-3'>
                <Link to='/dashboard'>
                    <img className='p-2' src={Dashboard} />
                    Dashboard
                </Link>
            </li>
            <li className='nav-item d-flex align-items-center inactive px-3'>
                <Link to='/map'>
                    Ukraine Logistics Operations
                    <Cross className='m-2' strokeWidth={2} size={16} />
                </Link>
            </li>
            <li className='nav-item d-flex align-items-center inactive px-3'>
              <a className='nav-link' href='#'>
                Tasks
                <Cross className='m-2' strokeWidth={2} size={16} />
              </a>
            </li>
            <li className='nav-item d-flex align-items-center px-3'>
              <a className='nav-link' href='#'>
                <Plus className='m-2' strokeWidth={2} size={16} />
                Add New
              </a>
            </li>
          </ul>
          <div className='align-items-center'>
            <div className='py-1'>
              <form className='nav-searchbar d-flex align-items-center'>
                <Search className='search' strokeWidth={2} size={18} />
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search'
                  aria-label='Search'
                />
              </form>
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <a className='p-3 ms-3' alt=''>
              <div className='badge-container'>
                <img src={Notification} alt='Notifications icon' width='20px' />
                <div className='icon-badge'>8</div>
              </div>
            </a>
            <a className='p-3' alt=''>
              <img src={User} alt='User icon' width='25px' />
            </a>
            <a className='p-3' alt=''>
              <img src={Settings} alt='Settings icon' width='25px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
