import WarningRed from '../../images/warning-red.svg';
import WarningOrange from '../../images/warning-orange.svg';
import Check from '../../images/check.svg';

function NewTicket() {
  function handlePriorityClick(event) {
    const allButtons = Array.from(
      document.getElementsByClassName('btn-priority')
    );
    allButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    const clickedButton = document.getElementById(event.target.id);
    clickedButton.classList.add('active');
  }
  return (
    <div className='card card-convoy col-4 me-3 p-1'>
      <div className='card-body'>
        <div className='new-ticket-header fs-6 pb-3'>Creating a new ticket</div>
        <h5 className='card-title pt-4 pb-2 fs-4'>
          Request of transfer 500 Javelin Missiles
        </h5>
        <div className='request-fields pb-3'>
          <form className='row mb-2 needs-validation' novalidate>
            <div className='col-lg'>
              <label for='created-by' className='form-label'>
                Created by
              </label>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Name'
              />
            </div>
            <div className='col-lg'>
              <label for='created-by' className='form-label'>
                Date of Creation
              </label>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Date'
              />
            </div>
            <div className='row my-2'>
              <div className='col-lg'>
                <label for='created-by' className='form-label'>
                  Resource Type
                </label>
                <select
                  className='form-select form-select-sm py-2'
                  aria-label='.form-select-md example'
                >
                  <option selected>Select</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div className='col-lg'>
                <label for='created-by' className='form-label'>
                  Type
                </label>
                <select
                  className='form-select form-select-sm py-2'
                  aria-label='.form-select-md example'
                >
                  <option selected>Select</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className='request-fields mt-3 pb-3'>
          <div className='row mb-2'>
            <div className='col-md-6'>
              <label for='created-by' className='form-label'>
                Transfer from
              </label>
              <select
                className='form-select form-select-sm py-2'
                aria-label='.form-select-md example'
                style={{ width: '200px' }}
              >
                <option selected>Select</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label for='created-by' className='form-label'>
                Transfer to
              </label>
              <select
                className='form-select form-select-sm py-2'
                aria-label='.form-select-md example'
                style={{ width: '200px' }}
              >
                <option selected>Select</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className='request-fields mt-3 pb-3'>
          <div className='mb-2'>
            <div className='col-12'>
              <label for='created-by' className='form-label'>
                Detailed description
              </label>
              <input
                type='text'
                className='form-control'
                id='created-by'
                placeholder='Write detalis'
              />
            </div>
          </div>
        </div>
        <div className='request-fields mt-4 pb-3'>
          <div className='mb-2'>
            <div className='col-12'>
              <div className='row align-items-center'>
                <div className='fs-5 width-auto'>Select priority</div>
                <div
                  className='btn-priority badge-high ms-2 width-auto active'
                  id='badge-high'
                  onClick={handlePriorityClick}
                >
                  High
                  <img className='ms-1' src={WarningRed} alt='' />
                </div>
                <div
                  className='btn-priority badge-medium ms-2 width-auto'
                  id='badge-medium'
                  onClick={handlePriorityClick}
                >
                  Medium
                  <img className='ms-1' src={WarningOrange} alt='' />
                </div>
                <div
                  className='btn-priority badge-low ms-2 width-auto'
                  id='badge-low'
                  onClick={handlePriorityClick}
                >
                  Low
                  <img className='ms-1' src={Check} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 pb-3'>
          <div className='mb-2'>
            <div className='col-12'>
              <div className='row align-items-center g-0'>
                <button className='btn-secondary width-auto'>Close</button>
                <button className='btn-inactive width-auto ms-3 my-2'>
                  Start a ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTicket;
