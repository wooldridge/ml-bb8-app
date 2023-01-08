import Resize from '../../images/resize.svg';
import FolderAdd from '../../images/folder-add.svg';
import Network from '../../images/network.svg';
import Upload from '../../images/upload.svg';
import Edit from '../../images/edit.svg';
import Refresh from '../../images/refresh.svg';
import Live from '../../images/live.svg';
import RegionMapGraph from '../../images/region-map.jpg';

function RegionMap() {
  return (
    <div className='col-lg-4 col-md-12 g-1'>
      <div className='card card-dashboard' style={{ height: '587px' }}>
        <img src={Resize} alt='' width='16px' />
        <div className='card-body pt-1 mx-3'>
          <div className='row'>
            <div className='card-title col-auto align-middle pt-1'>
              Region map
            </div>
            <select
              className='form-select form-select-sm me-1 width-auto'
              aria-label='.form-select-md example'
            >
              <option selected>Time period</option>
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

          <img
            className='img-fluid rounded mx-auto d-block pt-4'
            src={RegionMapGraph}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default RegionMap;
