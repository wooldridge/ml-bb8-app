import Resize from '../../images/resize.svg';
import CriticalPartsGraph from '../../images/critical.svg';

function CriticalParts() {
  return (
    <div class='col-lg-8 col-md-12 g-1'>
      <div class='card card-dashboard'>
        <img src={Resize} alt='' width='16px' />
        <div class='card-body pt-1 ms-3'>
          <div class='row justify-content-start align-items-center'>
            <div class='card-title col-auto mb-0'>
              Critical parts production schedule
            </div>
            <select
              class='form-select form-select-sm me-1 width-auto'
              aria-label='.form-select-md example'
            >
              <option selected>Time period</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select
              class='form-select form-select-sm me-1 width-auto'
              aria-label='.form-select-md example'
            >
              <option selected>Region</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>

          <img
            class='img-fluid pt-4 pb-2 width-auto'
            src={CriticalPartsGraph}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default CriticalParts;
