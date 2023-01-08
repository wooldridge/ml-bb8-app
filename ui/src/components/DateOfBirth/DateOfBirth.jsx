import { Cross } from 'akar-icons';
import CloudUpload from '../../images/cloud-upload.svg';
import LockRed from '../../images/lock-red.svg';
import EditMetadata from '../EditMetadata/EditMetadata';

function DateOfBirth(props) {
  return (
    <div className='card-details card col-4 me-3'>
      <div className='card-body'>
        <div className='request-fields pb-4'>
          <div className='row justify-content-between align-items-center request-fields pb-3 g-0'>
            <div className='width-auto'>
              <div className='form-label mb-1'>Details</div>
              <div className='details-header'>Date of Birth</div>
            </div>

            <div className='width-auto'>
              <span className='btn-cancel m-1'>
                <Cross className='me-1 mb-1' strokeWidth={2} size={14} />
                Cancel
              </span>
              <span className='btn-primary-outline m-1'>
                <img src={CloudUpload} alt='' className='mb-1 mx-1' />
                Save
              </span>
            </div>
          </div>

          <div className='row mt-3'>
            <img src={LockRed} className='width-auto' alt='' />
            <select className='form-select form-select-sm disabled py-1 width-auto'>
              <option selected>October 7, 1979</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <EditMetadata
          dataSource={props.details.dataSource}
          editHistory={props.details.editHistory}
        />
      </div>
    </div>
  );
}

export default DateOfBirth;
