import { ArrowRight, Cross, Minus, Plus } from 'akar-icons';
import Circle from '../../images/circle.svg';
import WarningRed from '../../images/warning-red.svg';
import './DeliveryRequest.css';

function DeliveryRequest(props) {
  return (
    <div className='card-convoy card col-4 me-3'>
      <div className='card-body'>
        <div className='row details-top justify-content-between'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb pt-1'>
              <li className='breadcrumb-item'>
                <a href='#'>Tasks</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>New Requests</a>
              </li>
              <li className='breadcrumb-item active'>
                Request number ZMR001003
              </li>
            </ol>
          </nav>
          <div className='action-icons'>
            <Minus strokeWidth={2} size={16} />
            <Cross
              className='request-close ms-3'
              strokeWidth={2}
              size={16}
              onClick={props.handleDelivReqClick}
            />
          </div>
        </div>
        <div className='row request-fields pb-3 mt-1 g-0'>
          <div class='width-auto border-right pe-4'>
            <div className='form-label m-0'>Created</div>
            <div>Apr 7 at 11:21</div>
          </div>

          <div class='width-auto ps-4'>
            <div className='form-label m-0'>Assign</div>
            <div>Unassigned</div>
          </div>

          <span className='btn-secondary-small m-1 width-auto ms-4'>
            <Plus className='me-1' strokeWidth={2} size={16} />
            Assign this request
          </span>
        </div>
        <div className='mt-2'>
          <div className='badge-low high-priority me-2'>
            <img className='me-1' src={Circle} alt='' width='10px' />
            New
          </div>
          <div className='badge-high high-priority me-2'>
            <img className='me-1' src={WarningRed} alt='' width='10px' />
            High Priority
          </div>
        </div>
        <div className='card-title pt-1 pb-3 fs-4 request-fields'>
          Delivery request
          <div>
            <a className='link-white' href='#'>
              Javelin
            </a>{' '}
            from{' '}
            <a className='link-white' href='#'>
              Zhytomyr Military Base
            </a>
          </div>
        </div>
        <div className='request-fields mt-3 pb-3'>
          <div className='fs-5 pb-1'>Description</div>
          <div>
            We have received an urgent request of 500 Javelin missles delivery
            for front units. We have not enough stock to meet their reuirments.
            Check stock levels of nearby werehouses and organize delivery to
            Zhytomyr Military Base. We will handle further delivery.
          </div>
        </div>
        <div className='request-fields mt-3 pb-3'>
          <div className='fs-5 pb-1'>Request details</div>
          <div className='row py-2'>
            <div className='col'>
              <div className='form-label m-0'>Requesting Unit</div>
              <div>26th Airborne Brigade Zytomir</div>
            </div>
            <div className='col'>
              <div className='form-label m-0'>Type</div>
              <div>Resources delivery request</div>
            </div>
          </div>
          <div className='row pb-3'>
            <div className='col'>
              <div className='form-label m-0'>Type of resources required</div>
              <div>
                <a className='text-white' href='#'>
                  Javelin missles
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='form-label m-0'>Amount required</div>
              <div>500 pieces</div>
            </div>
          </div>
          <div className='row pb-3'>
            <div className='col'>
              <div className='form-label m-0'>Requested time of delivery</div>
              <div>
                <a className='text-white' href='#'>
                  04/18/2022 24:00:00 CET
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='fs-5 mt-3'>Attachments</div>
        <div className='request-fields mt-3 pb-3'>
          <div className='form-label m-0'>Requesting unit</div>
          <div>26th Airborne Brigade Zytomir</div>
        </div>

        <div className='request-fields mt-3 pb-3'>
          <div className='form-label m-0'>Updates</div>
          <div className='table-responsive'>
            <table className='table table-dark table-borderless bg-transparent table-convoy-history m-0'>
              <tbody>
                <tr>
                  <td className='text-dark' scope='row'>
                    21.05.2022
                  </td>
                  <td className='text-dark'>07:25</td>
                  <td className='text-secondary'>Ticket created</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='row align-items-center pt-3'>
          <button className='btn-secondary ms-3 my-2 width-auto'>Close</button>
          <button className='btn-primary width-auto ms-3 my-2'>Assign</button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryRequest;
