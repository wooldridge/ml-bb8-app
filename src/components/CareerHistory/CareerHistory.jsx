import { Cross } from 'akar-icons';
import CloudUpload from '../../images/cloud-upload.svg';
import Drag from '../../images/drag.svg';
import EditMetadata from '../EditMetadata/EditMetadata';

function CareerHistory(props) {
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

        <EditMetadata
          dataSource={props.details.dataSource}
          editHistory={props.details.editHistory}
        />
      </div>
    </div>
  );
}

export default CareerHistory;
