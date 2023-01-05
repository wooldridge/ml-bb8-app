import Resize from '../../images/resize.svg';
import FolderAdd from '../../images/folder-add.svg';
import Network from '../../images/network.svg';
import Upload from '../../images/upload.svg';
import Edit from '../../images/edit.svg';
import Refresh from '../../images/refresh.svg';
import Live from '../../images/live.svg';

function Infrastructure() {
  return (
    <div className='col-lg-8 col-md-12 g-1'>
      <div className='card card-dashboard'>
        <img src={Resize} alt='' width='16px' />
        <div className='card-body pt-1 ms-3'>
          <div className='row'>
            <div className='card-title col-auto align-middle pt-1'>
              Infrastructure
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
                  <th scope='col'>Type</th>
                  <th scope='col'>Location</th>
                  <th scope='col'>Chains</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Workload</th>
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
                  <td>F13 Tuluza</td>
                  <td>Plane manufacture</td>
                  <td>France, Tuluza</td>
                  <td>A320, A330, A350, A380</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>F93 Hamburg</td>
                  <td>Plane manufacture</td>
                  <td>Germany, Hamburg</td>
                  <td>A318, A319, A320, A321</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Plane manufacture</td>
                  <td>China, Tienzin</td>
                  <td>A319, A320</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Plane manufacture</td>
                  <td>US, Mobile</td>
                  <td>A320, A321</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Plane manufacture</td>
                  <td>Spain, Sewilla</td>
                  <td>A400M</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Parts warehouse</td>
                  <td>France, Tuluza</td>
                  <td>A320, A330, A350, A380</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Parts warehouse</td>
                  <td>France, Tuluza</td>
                  <td>A320, A330, A350, A380</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>Parts warehouse</td>
                  <td>France, Tuluza</td>
                  <td>A320, A330, A350, A380</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
                  <td>W82 Tuluza</td>
                  <td>Parts warehouse</td>
                  <td>France, Tuluza</td>
                  <td>A320, A330, A350, A380</td>
                  <td>Active</td>
                  <td>
                    <span className='badge align-top'>HIGH</span>
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
  );
}

export default Infrastructure;
