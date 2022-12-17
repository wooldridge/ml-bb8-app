import { Cross } from 'akar-icons';
import CloudUpload from '../../images/cloud-upload.svg';
import Drag from '../../images/drag.svg';

function CareerHistory() {
  return (
    <div className='card-details card col-4 me-3'>
      <div className='card-body'>
        <div className='request-fields pb-4'>
          <div className='row justify-content-between align-items-center request-fields pb-3 g-0'>
            <div className='width-auto'>
              <div className='form-label mb-1'>Details</div>
              <div className='details-header'>Career History</div>
            </div>

            <div className='width-auto pe-0'>
              <span className='btn-secondary-small m-1'>
                <Cross className='me-1 mb-1' strokeWidth={2} size={14} />
                Cancel
              </span>
              <span className='btn-primary-outline m-1'>
                <img src={CloudUpload} alt='' className='p-1' />
                Save
              </span>
            </div>
          </div>

          <div className='row mt-3 justify-content-between'>
            <img src={Drag} alt='' className='width-auto pe-0' />
            <div className='width-auto pe-0'>
              <select
                className='form-select'
                aria-label='.form-select-md example'
              >
                <option selected>2000 - 2004</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>

            <div className='col'>
              <input
                type='text'
                className='form-control form-control-position'
                id='created-by'
                placeholder='Write details'
              />
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-2 justify-content-between'>
            <img src={Drag} alt='' className='width-auto pe-0' />
            <div className='width-auto pe-0'>
              <select
                className='form-select'
                aria-label='.form-select-md example'
              >
                <option selected>2000 - 2004</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>

            <div className='col'>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Write details'
              />
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-2 justify-content-between'>
            <img src={Drag} alt='' className='width-auto pe-0' />
            <div className='width-auto pe-0'>
              <select
                className='form-select'
                aria-label='.form-select-md example'
              >
                <option selected>2000 - 2004</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>

            <div className='col'>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Write details'
              />
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-2 justify-content-between'>
            <img src={Drag} alt='' className='width-auto pe-0' />
            <div className='width-auto pe-0'>
              <select
                className='form-select'
                aria-label='.form-select-md example'
              >
                <option selected>2000 - 2004</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>

            <div className='col'>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Write details'
              />
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-2 mb-4 justify-content-between'>
            <img src={Drag} alt='' className='width-auto pe-0' />
            <div className='width-auto pe-0'>
              <select
                className='form-select'
                aria-label='.form-select-md example'
              >
                <option selected>2000 - 2004</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>

            <div className='col'>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Write details'
              />
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <span className='btn-secondary-small m-1 width-auto me-3'>
            Add info
          </span>
        </div>

        <div className='row mt-3 pb-3 request-fields g-0'>
          <div className='col'>
            <div className='form-label m-0'>Data Source</div>
            <div>DB3728</div>
          </div>
          <div className='col'>
            <div className='form-label m-0'>DB localization</div>
            <div>Frankfurt, DE</div>
          </div>
          <div className='col'>
            <div className='form-label m-0'>Last SYNC</div>
            <div>17:39</div>
          </div>
          <span className='btn-secondary-small m-1 width-auto me-3'>
            Sync now
          </span>
        </div>

        <div className='mt-3'>
          <div className='form-label m-0'>Edit History</div>

          <table className='table table-dark table-borderless bg-transparent table-convoy-history m-0'>
            <tbody>
              <tr>
                <td className='text-dark pt-1' scope='row'>
                  21.05.2022
                </td>
                <td className='text-dark pt-1'>05:10</td>
                <td className='text-secondary pt-1'>
                  Updated <a href='#'>Direct Subordinates</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  20.05.2022
                </td>
                <td className='text-dark'>06:20</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Assignment</a> by{' '}
                  <a href='#'>Michael Cane</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  19.05.2022
                </td>
                <td className='text-dark'>17:25</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Date of Birth</a> by{' '}
                  <a href=''>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  16.04.2022
                </td>
                <td className='text-dark'>06:30</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Position</a>,{' '}
                  <a href='#'>Place of Birth</a>,{' '}
                  <a href='#'>Current Location</a> by <a href='#'>Lee Hoi</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  15.04.2022
                </td>
                <td className='text-dark'>08:30</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Skills</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  18.01.2021
                </td>
                <td className='text-dark'>19:00</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Position</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  17.12.2020
                </td>
                <td className='text-dark'>15:41</td>
                <td className='text-secondary'>
                  Record created by <a href='#'>Michael Cane</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CareerHistory;
