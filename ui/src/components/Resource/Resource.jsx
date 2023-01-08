import { ArrowRight, Cross, Minus } from 'akar-icons';
import Javelin from '../../images/javelin.png';
import BarsHigh from '../../images/bars-high.svg';
import BarsMed from '../../images/bars-med.svg';
import BarsLow from '../../images/bars-low.svg';

import './Resource.css';

function Resource() {
  const handleTabClick = (event) => {
    // Handle tabs
    const allTabs = Array.from(document.getElementsByClassName('nav-link'));
    allTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    const clickedTab = document.getElementById(event.target.id);
    clickedTab.classList.add('active');

    // Handle tab content
    const allContent = Array.from(
      document.getElementsByClassName('tab-content')
    );
    allContent.forEach((section) => {
      section.classList.remove('selected');
    });
    const contentToShow = document.getElementById(event.target.id + '-content');
    contentToShow.classList.add('selected');
  };
  return (
    <div className='card-convoy card col-4 me-2 mt-2'>
      <div className='card-body'>
        <div className='row details-top justify-content-between request-fields g-0'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb pt-1'>
              <li className='breadcrumb-item'>Zhytomyr</li>
              <li className='breadcrumb-item'>Stock informations</li>
              <li className='breadcrumb-item active'>foo</li>
            </ol>
          </nav>
          <div className='action-icons'>
            <Minus strokeWidth={2} size={16} />
            <Cross className='ms-3' strokeWidth={2} size={16} />
          </div>
        </div>

        <div className='row justify-content-between pb-3 mt-3 g-0'>
          <div className='col-xl-6 col-lg-12 p-1'>
            <h5 className='card-title fs-4'>Javelin missiles</h5>
            <div className='form-label'>Anti-tank rockets</div>
            <div className='description fs-7'>
              The FGM-148 Javelin, or Advanced Anti-Tank Weapon System-Medium
              (AAWS-M)
            </div>
          </div>
          <img src={Javelin} className='img-javelin col-xl-6 p-1' />
        </div>

        <ul className='nav card-nav mb-3'>
          <li className='nav-item'>
            <a
              id='tab-stock-level'
              className='nav-link px-0 me-2 active'
              aria-current='page'
              href='#'
              onClick={handleTabClick}
            >
              Stock Level
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-units'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Units
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-media'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Media
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-staff'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Staff
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-infrastructure'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Infrastructure
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-vehicles'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Vehicles
            </a>
          </li>
        </ul>

        <div
          id='tab-stock-level-content'
          className='tab-content stock-level selected'
        >
          <table className='table table-borderless mb-0'>
            <thead>
              <tr>
                <th scope='col'></th>
                <th className='form-label col-3' scope='col'>
                  Warehouse
                </th>
                <th className='form-label' scope='col'>
                  # of items
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='levels-table-row'>
                <td scope='row' className='table-level pt-1'>
                  <img src={BarsHigh} />
                </td>
                <td>MWH Kiev 1</td>
                <td>150</td>
                <td className='ps-3 table-arrow-cont pe-0'>
                  <span className='material-symbols-outlined table-arrow '>
                    arrow_forward
                  </span>
                </td>
              </tr>
              <tr className='levels-table-row'>
                <td scope='row' className='table-level pt-1'>
                  <img src={BarsLow} />
                </td>
                <td>MWH Kiev 1</td>
                <td>15</td>
                <td className='ps-3 table-arrow-cont pe-0'>
                  <span className='material-symbols-outlined table-arrow '>
                    arrow_forward
                  </span>
                </td>
              </tr>
              <tr className='levels-table-row'>
                <td scope='row' className='table-level pt-1'>
                  <img src={BarsMed} />
                </td>
                <td>MWH Kiev 1</td>
                <td>90</td>
                <td className='ps-3 table-arrow-cont pe-0'>
                  <span className='material-symbols-outlined table-arrow '>
                    arrow_forward
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Resource;
