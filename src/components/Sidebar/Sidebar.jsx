import FileDownload from '../../images/file-download.svg';
import Statistics from '../../images/statistics.svg';
import Megaphone from '../../images/megaphone.svg';
import Warning from '../../images/warning.svg';
import Flag from '../../images/flag.svg';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div style={{ width: '100%' }}>
      <div
        className='d-flex flex-column float-end'
        id='sidebar'
        style={{
          width: '80px',
          height: '100vh',
          backgroundColor: 'black !important',
          borderTop: 'solid 1px #272A33',
        }}
      >
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li>
            <a
              href='#'
              className='li-requests d-block py-3 text-white text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              onClick={props.handleRequestsClick}
            >
              <div className='badge-container'>
                <img
                  src={FileDownload}
                  className='icon-requests p-2'
                  style={{ width: '35px' }}
                  alt=''
                />
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label label-requests text-center'>
                Requests
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='li-reports d-block py-3 text-white text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <img
                  src={Statistics}
                  className='icon-reports p-2'
                  style={{ width: '35px' }}
                  alt=''
                />
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label label-reports text-center'>
                Reports
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='d-block py-3 text-white text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <img
                  src={Megaphone}
                  className='p-2'
                  style={{ width: '35px' }}
                  alt=''
                />
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label text-center'>Notifications</div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='d-block py-3 text-white text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <img
                  src={Warning}
                  className='p-2'
                  style={{ width: '35px' }}
                  alt=''
                />
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label text-center'>Incidents</div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='d-block py-3 text-white text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <img
                  src={Flag}
                  className='p-2'
                  style={{ width: '35px' }}
                  alt=''
                />
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label text-center'>Alerts</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
