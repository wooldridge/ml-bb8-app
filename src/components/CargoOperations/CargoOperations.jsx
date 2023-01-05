import Resize from '../../images/resize.svg';
import FolderAdd from '../../images/folder-add.svg';
import Network from '../../images/network.svg';
import Upload from '../../images/upload.svg';
import Edit from '../../images/edit.svg';
import Refresh from '../../images/refresh.svg';
import Live from '../../images/live.svg';

function CargoOperations() {
  return (
    <div className='row g-0'>
      <div className='col-12 g-1'>
        <div className='card card-dashboard'>
          <img src={Resize} alt='' width='16px' />
          <div className='card-body pt-1 ms-3'>
            <div className='row'>
              <div className='card-title col-auto align-middle pt-1'>
                Cargo operations
              </div>
              <select
                className='form-select form-select-sm me-1 width-auto'
                aria-label='.form-select-md example'
              >
                <option selected>Status</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <select
                className='form-select form-select-sm me-1 width-auto'
                aria-label='.form-select-md example'
              >
                <option selected>Type</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <select
                className='form-select form-select-sm me-1 width-auto'
                aria-label='.form-select-md example'
              >
                <option selected>Region</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <div className='col-auto ms-auto'>
                <a href='#'>
                  <span className='container-icon mx-1'>
                    <span class='material-symbols-outlined'>
                      create_new_folder
                    </span>
                  </span>
                </a>
                <a href='#'>
                  <span className='container-icon mx-1'>
                    <span class='material-symbols-outlined'>share</span>
                  </span>
                </a>
                <a href='#'>
                  <span className='container-icon mx-1'>
                    <span class='material-symbols-outlined'>ios_share</span>
                  </span>
                </a>
                <a href='#'>
                  <span className='container-icon mx-1'>
                    <span class='material-symbols-outlined'>edit</span>
                  </span>
                </a>
                <a href='#'>
                  <span className='container-icon mx-1'>
                    <span class='material-symbols-outlined'>sync</span>
                  </span>
                </a>
                <img src={Live} className='img-fluid m-1' width='26px' alt='' />
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table table-borderless mt-4'>
                <thead>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Type of Delivery</th>
                    <th scope='col'>Chain</th>
                    <th scope='col'>From</th>
                    <th scope='col'>Target</th>
                    <th scope='col'>Planned Distance</th>
                    <th scope='col'>Time Estimated</th>
                    <th scope='col'>Importance</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>A220 C1 OMAHA</td>
                    <td>Engine parts</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>650 miles</td>
                    <td>2h 12m</td>
                    <td>High</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right ps-2' width='20px'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>F93 Hamburg</td>
                    <td>Tools</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>350 miles</td>
                    <td>4h</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>FC36 Tienzin</td>
                    <td>Engine parts</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>180 miles</td>
                    <td>4h 08m</td>
                    <td>High</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>F1 Mob</td>
                    <td>Safety elements</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>360 miles</td>
                    <td>5h 15m</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>F24 Sewilla</td>
                    <td>Tools</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>295 miles</td>
                    <td>6h 42m</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>W1 Tuluza</td>
                    <td>Engine parts</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>357 miles</td>
                    <td>1h 05m</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>W2 Tuluza</td>
                    <td>Tools</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>245 miles</td>
                    <td>2h 12m</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                    </th>
                    <td>W36 Tuluza</td>
                    <td>Factory parts</td>
                    <td>A330 102022</td>
                    <td>UA Odesa B221</td>
                    <td>UA Kharkov W12</td>
                    <td>147 miles</td>
                    <td>1h 30m</td>
                    <td>Medium</td>
                    <td>
                      <img
                        src='images/refresh.svg'
                        className='pb-1 refresh'
                        width='20px'
                        alt=''
                      />
                      <i className='ai-arrow-right p-1'></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='row'>
              <div className='col-auto' style={{ width: '55px' }}>
                <img
                  className='img-fluid ms-2'
                  src='images/Switch.svg'
                  alt=''
                  style={{ width: '55px' }}
                />
              </div>
              <div className='col-auto ms-auto'>
                <nav aria-label='Page navigation example'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <a className='page-link' href='#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        4
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        5
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        6
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#' aria-label='Next'>
                        <span aria-hidden='true'>&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CargoOperations;
