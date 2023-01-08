import FileDownload from '../../images/file-download.svg';
import Statistics from '../../images/statistics.svg';
import Megaphone from '../../images/megaphone.svg';
import Warning from '../../images/warning.svg';
import Flag from '../../images/flag.svg';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div style={{ width: '100%' }}>
      <div className='sidebar d-flex flex-column float-end' id='sidebar'>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li>
            <a
              href='#'
              className='sidebar-item d-block py-3 text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              onClick={props.handleRequestsClick}
            >
              <div className='badge-container'>
                <span class='material-symbols-outlined'>place_item</span>
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
              className='sidebar-item d-block py-3 text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <span class='material-symbols-outlined'>monitoring</span>
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
              className='sidebar-item d-block py-3 text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <span class='material-symbols-outlined'>notifications</span>
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label label-notifications text-center'>
                Notifications
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='sidebar-item d-block py-3 text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <span class='material-symbols-outlined'>warning</span>
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label label-incidents text-center'>
                Incidents
              </div>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='sidebar-item d-block py-3 text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <div className='badge-container'>
                <span class='material-symbols-outlined'>flag</span>
                <div className='icon-badge-sidebar'>23</div>
              </div>
              <div className='sidebar-label label-alerts text-center'>
                Alerts
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
