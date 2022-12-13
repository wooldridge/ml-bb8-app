import Resize from '../../images/resize.svg';
import Network from '../../images/network.svg';
import Upload from '../../images/upload.svg';
import Edit from '../../images/edit.svg';
import FuelGraph from '../../images/fuel.svg';

function FuelUsage() {
  return (
    <div className='col-lg-4 col-md-12 g-1'>
      <div className='card card-dashboard'>
        <img src={Resize} alt='' width='16px' />
        <div className='card-body pt-1 ms-3'>
          <div className='row d-flex align-items-center'>
            <div className='card-title col-auto mb-0'>Fuel usage</div>
            <select
              className='form-select form-select-sm me-1 width-auto'
              aria-label='.form-select-md example'
            >
              <option selected>Time period</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <div className='col-auto align-items-center ms-auto justify-content-end'>
              <a href='#'>
                <span className='container-icon mx-1'>
                  <img
                    className='icon img-fluid'
                    src={Network}
                    width='20px'
                    alt=''
                  />
                </span>
              </a>
              <a href='#'>
                <span className='container-icon mx-1'>
                  <img
                    className='icon img-fluid'
                    src={Upload}
                    width='20px'
                    alt=''
                  />
                </span>
              </a>
              <a href='#'>
                <span className='container-icon mx-1'>
                  <img
                    className='icon img-fluid'
                    src={Edit}
                    width='20px'
                    alt=''
                  />
                </span>
              </a>
            </div>
          </div>

          <img
            className='img-fluid mx-auto d-block pt-4'
            src={FuelGraph}
            style={{ width: '370px' }}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default FuelUsage;
