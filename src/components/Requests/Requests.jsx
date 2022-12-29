import { useContext, useState, useEffect } from 'react';
import PanelContext from '../../store/PanelContext';

import { Cross, ArrowRight } from 'akar-icons';
import './Requests.css';
import High from '../../images/warning-red.svg';
import Medium from '../../images/warning-orange.svg';
import Low from '../../images/warning-green.svg';

function Requests(props) {

  const panelContext = useContext(PanelContext);

  const getRequests = () => {
    if (!props.requests.requests || props.requests.requests.length === 0) {
      return <div className='no-data'>No requests available</div>;
    }
    return props.requests.requests.map((req, index) => {
      return (
        <div
          className='row justify-content-between bottom-border g-0 mb-3'
          key={index}
        >
          <div className='col-xl-7 col-lg-12 pb-3'>
            <div>
              <span className='fs-8'>
                <a href='#' className='link-white'>
                  {req.startPoint}
                </a>
              </span>
              <ArrowRight
                className='top-0 m-2 text-secondary'
                strokeWidth={2}
                size={12}
              />
              <span className='fs-8'>
                <a href='#' className='link-white'>
                  {req.endPoint}
                </a>
              </span>
            </div>
            <div>
              <span className='fs-7'>
                Resources delivery request
                {req.from ? ' from ' : null}
                <a
                  href='#'
                  className='link-white'
                  onClick={() => panelContext.addPanel(
                    {type: "location", id: 'militaryBase-1'}
                  )}
                >
                  {req.from}
                </a>
              </span>
            </div>
            <div className='fs-8 text-secondary'>{req.fromId}</div>
          </div>

          <div className='row col-xl-5 col-lg-12 width-auto justify-content-between pb-3'>
            <div className='width-auto'>
              {req.priority && req.priority.toLowerCase() === 'high' ? (
                <div className='badge-high high-priority m-0'>
                  <img src={High} alt='' width='10px' className='me-1' />
                  High
                </div>
              ) : null}
              {req.priority && req.priority.toLowerCase() === 'medium' ? (
                <div className='badge-medium medium-priority m-0'>
                  <img src={Medium} alt='' width='10px' className='me-1' />
                  Medium
                </div>
              ) : null}
              {req.priority && req.priority.toLowerCase() === 'low' ? (
                <div className='badge-low low-priority m-0'>
                  <img src={Low} alt='' width='10px' className='me-1' />
                  Low
                </div>
              ) : null}
              <div className='fs-8 text-secondary text-end pt-2'>
                {req.time}
              </div>
            </div>

            <span className='width-auto'>
              <ArrowRight
                className='arrow-requests m-2 text-secondary'
                strokeWidth={2}
                size={20}
                id={req.id}
                onClick={() => panelContext.addPanel(
                  {type: "request", id: req.id}
                )}
              />
            </span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className='card-requests card col-4 me-3'>
      <div className='card-body'>
        <div className='pb-3'>
          <Cross
            className='requests-close'
            strokeWidth={2}
            size={23}
            onClick={props.handleRequestsClick}
          />
          <span className='requests-title mx-3'>Requests</span>
          <select
            className='form-select form-select-sm width-auto d-inline'
            aria-label='.form-select-md example'
            defaultValue={'date'}
          >
            <option value='date'>By date</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>

        <div className='pb-3'>
          <span className='tag-requests'>
            New
            <span className='ms-2'>5</span>
          </span>
          <span className='tag-requests'>
            Active
            <span className='ms-2'>2</span>
          </span>
          <span className='tag-requests'>
            In Delivery
            <span className='ms-2'>31</span>
          </span>
          <span className='tag-requests'>
            Delivered
            <span className='ms-2'>9</span>
          </span>
          <span className='tag-requests'>
            Closed
            <span className='ms-2'>22</span>
          </span>
        </div>

        <div className='text-secondary fs-8'>Today - 10.4.2022</div>

        {getRequests()}
      </div>
    </div>
  );
}

export default Requests;
