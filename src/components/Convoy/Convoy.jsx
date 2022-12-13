import { ArrowRight, Cross, Minus } from 'akar-icons';
import Circle from '../../images/circle.svg';
import WarningRed from '../../images/warning-red.svg';

function Convoy(props) {
  const convoy = props.convoy;

  const getConvoyHistory = () => {
    if (
      !props.convoy.convoyHistory ||
      props.convoy.convoyHistory.length === 0
    ) {
      return <div className='no-data'>No Convoy History available</div>;
    }
    return props.convoy.convoyHistory.map((hist, index) => {
      return (
        <tr>
          <td className='text-dark' scope='row'>
            {hist.date}
          </td>
          <td className='text-dark'>{hist.time}</td>
          <td className='text-secondary'>{hist.status}</td>
        </tr>
      );
    });
  };

  // Format "2022-12-13T13:01:34+01:00" as "12/13/2022 13:01:34"
  const getDateFormatted = (date) => {
    if (!date) {
      return 'No date available';
    }
    const dateObj = new Date(date);
    return `${('0' + (dateObj.getMonth() + 1)).slice(-2)}/${(
      '0' + dateObj.getDate()
    ).slice(-2)}/${dateObj.getFullYear()} ${dateObj.toLocaleTimeString(
      'en-US',
      {
        hour12: false,
      }
    )}`;
  };

  return (
    <div className='card-convoy card col-4 me-3'>
      <div className='card-body'>
        <div className='row details-top justify-content-between'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb pt-1'>
              <li className='breadcrumb-item'>{props.convoy.type}</li>
              <li className='breadcrumb-item active'>{props.convoy.name}</li>
            </ol>
          </nav>
          <div className='action-icons'>
            <Minus strokeWidth={2} size={16} />
            <Cross className='ms-3' strokeWidth={2} size={16} />
          </div>
        </div>

        <div className='badge-low high-priority m-1'>
          <img className='me-1' src={Circle} alt='' width='10px' />
          New
        </div>
        <div className='badge-high high-priority'>
          <img className='me-1' src={WarningRed} alt='' width='10px' />
          High Priority
        </div>

        <h5 className='card-title pt-1 pb-3 fs-4 request-fields'>
          {props.convoy.type} {props.convoy.name}
        </h5>
        <div className='row justify-content-between pt-3 align-items-center'>
          <div className='fs-5 width-auto'>{props.convoy.startPoint}</div>
          <ArrowRight className='width-auto' strokeWidth={2} size={20} />
          <div className='fs-5 text-end width-auto'>
            {props.convoy.endPoint}
          </div>
        </div>

        <div className='row pt-3 justify-content-between request-fields pb-3'>
          <div className='width-auto'>
            <div className='form-label m-0'>Start date</div>
            <div>{getDateFormatted(props.convoy.start)}</div>
          </div>
          <div className='text-end width-auto'>
            <div className='form-label m-0'>ETA</div>
            <div>
              {props.convoy.endDate} {props.convoy.endTime}
            </div>
          </div>
        </div>

        <div className='request-fields'>
          <div className='row py-3'>
            <div className='col'>
              <div className='form-label m-0'>Vehicles</div>
              <div>
                <a className='text-white' href='#'>
                  {props.convoy.vehicles}
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='form-label m-0'>Route</div>
              <div>
                <a className='text-white' href='#'>
                  {props.convoy.route}
                </a>
              </div>
            </div>
          </div>
          <div className='row pb-3'>
            <div className='col'>
              <div className='form-label m-0'>Commaned by</div>
              <div>
                <a className='text-white' href='#'>
                  {props.convoy.commandedBy}
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='form-label m-0'>Connected to request</div>
              <div>{props.convoy.connectedToRequest}</div>
            </div>
          </div>
          <div className='row pb-3'>
            <div className='col'>
              <div className='form-label m-0'>type of cargo</div>
              <div>
                <a className='text-white' href='#'>
                  {props.convoy.typeOfCargo}
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='form-label m-0'>Type</div>
              <div>{props.convoy.type}</div>
            </div>
          </div>
        </div>

        <div className='request-fields py-3'>
          <div className='fs-4 pb-1'>Description</div>
          <div>{props.convoy.description}</div>
        </div>

        <div className='request-fields py-3'>
          <div className='form-label m-0'>Convoy History</div>
          <div className='table-responsive'>
            <table className='table table-dark table-borderless bg-transparent table-convoy-history m-0'>
              <tbody>{getConvoyHistory()}</tbody>
            </table>
          </div>
        </div>

        <div className='row align-items-center pt-3'>
          <button className='btn-secondary ms-3 my-2 width-auto'>Close</button>
          <button className='btn-primary width-auto ms-3 my-2'>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Convoy;
