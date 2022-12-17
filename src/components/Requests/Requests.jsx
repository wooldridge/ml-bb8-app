import { Cross, ArrowRight } from 'akar-icons';

function Requests() {
  return (
    <div className='card-requests card col-4 me-3'>
      <div className='card-body'>
        <div className='pb-3'>
          <Cross className='requests-close' strokeWidth={2} size={23} />
          <span className='requests-title mx-3'>Requests</span>
          <select
            className='form-select form-select-sm width-auto d-inline'
            aria-label='.form-select-md example'
          >
            <option selected>By date</option>
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

        <div className='row justify-content-between'>
          <div className='col-xl-7 col-lg-12 pb-3'>
            <div>
              <span className='fs-8'>
                <a href='#' className='link-white'>
                  Commander Ivan Kommarenko
                </a>
              </span>
              <ArrowRight
                className='top-0 m-2 text-secondary'
                strokeWidth={2}
                size={12}
              />
              <span className='fs-8'>
                <a href='#' className='link-white'>
                  MarkLogic
                </a>
              </span>
            </div>
            <div>
              <span className='fs-7'>
                Resources delivery request from&nbsp;
                <a href='#' className='link-white'>
                  Zhytomyr Military Base
                </a>
              </span>
            </div>
            <div className='fs-8 text-secondary'>ZMR001003</div>
          </div>

          <div className='row col-xl-5 col-lg-12 width-auto justify-content-between pb-3'>
            <div className='width-auto'>
              <div className='badge-high high-priority m-0'>
                <img src='images/warning-red.svg' alt='' width='10px' />
                High
              </div>
              <div className='fs-8 text-secondary text-end pt-2'>16:10:36</div>
            </div>

            <span className='width-auto'>
              <ArrowRight
                className='top-0 m-2 text-secondary'
                strokeWidth={2}
                size={20}
              />
            </span>
          </div>
        </div>

        <div className='row justify-content-between'>
          <div className='col-xl-7 col-lg-12 pb-3'>
            <div>
              <span className='fs-8'>ZMR001003</span>
              <i className='ai-arrow-right top-0 p-1 fs-8 text-secondary'></i>
              <span className='fs-8'>
                <a href='#' className='link-white'>
                  MarkLogic
                </a>
              </span>
            </div>
            <div>
              <span className='fs-7'>Resources delivery request</span>
            </div>
            <div className='fs-8 text-secondary'>ZMR001003</div>
          </div>

          <div className='row col-xl-5 col-lg-12 width-auto pb-3'>
            <div className='width-auto'>
              <div className='badge-high high-priority m-0'>
                <img src='images/warning-red.svg' alt='' width='10px' />
                High
              </div>
              <div className='fs-8 text-secondary text-end pt-2'>16:10:36</div>
            </div>

            <div className='width-auto'>
              <ArrowRight
                className='top-0 m-2 text-secondary'
                strokeWidth={2}
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requests;
