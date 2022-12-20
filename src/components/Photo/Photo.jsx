import { Cross } from 'akar-icons';
import CloudUpload from '../../images/cloud-upload.svg';
import Sodol from '../../images/sodol.png';
import CheckAvailable from '../../images/check-available.svg';
import Soldier1 from '../../images/solider-photo-1.jpg';
import Soldier2 from '../../images/solider-photo-2.jpg';
import EditMetadata from '../EditMetadata/EditMetadata';

function Photo(props) {
  return (
    <div className='card-details card col-4 me-3'>
      <div className='card-body'>
        <div className='request-fields pb-4'>
          <div className='row justify-content-between align-items-center request-fields pb-3 g-0'>
            <div className='width-auto'>
              <div className='form-label mb-1'>Details</div>
              <div className='details-header'>Photo</div>
            </div>

            <div className='width-auto'>
              <span className='btn-secondary-small m-1'>
                <Cross className='me-1 mb-1' strokeWidth={2} size={14} />
                Cancel
              </span>
              <span className='btn-primary-outline m-1'>
                <img src={CloudUpload} alt='' className='mb-1 mx-1' />
                Save
              </span>
            </div>
          </div>

          <div>
            <div className='form-label width-auto mt-3'>Available photos</div>
            <div className='row justify-content-between g-0'>
              <div className='row' style={{ maxWidth: '378px' }}>
                <div className='available-photo selected width-auto p-0 me-3 mb-3'>
                  <div>
                    <img src={Sodol} alt='' style={{ width: '100px' }} />
                    <img
                      src={CheckAvailable}
                      alt=''
                      className='check-available'
                    />
                  </div>
                  <div className='available-photo-text'>01.12.2014</div>
                </div>

                <div className='available-photo width-auto p-0 me-3 mb-3'>
                  <div>
                    <img src={Soldier1} alt='' style={{ width: '100px' }} />
                    <img
                      src='images/check-available.svg'
                      alt=''
                      className='check-available'
                    />
                  </div>
                  <div className='available-photo-text'>01.12.2014</div>
                </div>

                <div className='available-photo width-auto p-0 me-3 mb-3'>
                  <div>
                    <img src={Soldier2} alt='' style={{ width: '100px' }} />
                    <img
                      src='images/check-available.svg'
                      alt=''
                      className='check-available'
                    />
                  </div>
                  <div className='available-photo-text'>01.12.2014</div>
                </div>
              </div>

              <span className='btn-secondary-small m-1 width-auto me-3'>
                Upload photo
              </span>
            </div>
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

export default Photo;
