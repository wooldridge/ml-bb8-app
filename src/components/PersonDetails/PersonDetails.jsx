import { Cross, ChevronLeft, ArrowRight } from 'akar-icons';
import Switch from '../../images/Switch.svg';
import ViewMore from '../../images/view-more.svg';
import Sodol from '../../images/sodol.png';
import Subordinate from '../Subordinate/Subordinate';

const imageFolder = '/images/';

function PersonDetails(props) {
  const person = props.person;
  console.log('Person that got passed in', person);
  console.log('foo', props.foo);

  const getCareerHistory = () => {
    if (
      !props.person.careerHistory ||
      props.person.careerHistory.length === 0
    ) {
      return <div className='no-data'>No Career History available</div>;
    }
    return props.person.careerHistory.map((hist, index) => {
      return (
        <div className='career-history-item mt-2 col-4' key={index}>
          <div className='career-history-title'>
            {hist.start} - {hist.end}
          </div>
          <div className='career-history-p'>{hist.description}</div>
        </div>
      );
    });
  };

  // Format "2022-12-13" as "December 13, 2022"
  const getDateFormatted = (date) => {
    if (!date) {
      return 'No date available';
    }
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    return `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  };

  const getDirectSubordinates = () => {
    if (
      !props.person.directSubordinates ||
      props.person.directSubordinates.length === 0
    ) {
      return <div className='no-data'>No Direct Subordinates available</div>;
    }
    return props.person.directSubordinates.map((sub, index) => {
      return (
        <div
          className='info-card d-flex card-body align-items-center mt-1'
          key={index}
        >
          <img
            className='img-fluid emblem'
            src={imageFolder + sub.image}
            alt=''
          />
          <div className='ps-3'>
            <div className='form-label mb-0'>{sub.formation}</div>
            <div>
              {sub.firstName} {sub.middleName} {sub.lastName.toUpperCase()}
            </div>
          </div>
          <ArrowRight className='ms-auto me-3' strokeWidth={2} size={20} />
        </div>
      );
    });
  };

  return (
    <div className='card-commander card col-4 me-3'>
      <div className='card-body'>
        <div className='row details-top justify-content-between align-items-center request-fields pb-3 g-0'>
          <div>
            <ChevronLeft className='me-1' strokeWidth={2} size={16} />
            Back
          </div>
          <div className='text-secondary details-top-text'>
            Last updated: Today 20:41 22.08.2022
          </div>
          <div className='text-secondary details-top-text'>
            Source hub: JDB7142
          </div>
          <div className='edit-mode align-items-center p-1'>
            <img className='p-1' src={Switch} alt='' />
            <span className='me-2 edit-mode-text'>Edit mode</span>
          </div>
          <div className='action-icons'>
            <Cross className='ms-3' strokeWidth={2} size={16} />
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <div className='col-xl-8 pt-3 ps-1'>
            <div className='row details-item p-1 g-1'>
              <div className='subheader-teal'>Rank + Name</div>
              <div className='fs-4'>
                {props.person.rank} {props.person.firstName}{' '}
                {person.lastName.toUpperCase()}
              </div>
            </div>

            <div className='details-row'>
              <div
                className='row details-item p-1 col-6 g-1'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-custom-className='custom-tooltip'
                data-bs-title='Last edited 07:30 21.05.2022 by Michael Cane'
              >
                <div className='details-text width-auto'>
                  <div className='subheader-teal'>Date of Birth</div>
                  <div className='details-body-text'>
                    {getDateFormatted(props.person.dob)}
                  </div>
                </div>
                <img src={ViewMore} alt='' className='view-more' />
              </div>
              <div
                className='row details-item p-1 col-6 g-1'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-custom-className='custom-tooltip'
                data-bs-title='Last edited 07:30 21.05.2022 by Michael Cane'
              >
                <div className='details-text width-auto'>
                  <div className='subheader-teal'>Place of Birth</div>
                  <div className='details-body-text'>{props.person.pob}</div>
                </div>
                <img src={ViewMore} alt='' className='view-more' />
              </div>
            </div>

            <div className='details-row'>
              <div
                className='row details-item p-1 col-6 g-1'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-custom-className='custom-tooltip'
                data-bs-title='Last edited 07:30 21.05.2022 by Michael Cane'
              >
                <div className='details-text width-auto col-11'>
                  <div className='subheader-teal'>Current location</div>
                  <div className='details-body-text'>
                    {props.person.currentLocation}
                  </div>
                </div>
                <img src={ViewMore} alt='' className='view-more' />
              </div>
              <div
                className='row details-item p-1 col-6 g-1'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-custom-className='custom-tooltip'
                data-bs-title='Last edited 07:30 21.05.2022 by Michael Cane'
              >
                <div className='details-text width-auto'>
                  <div className='subheader-teal'>Position</div>
                  <div className='details-body-text'>
                    {props.person.position}
                  </div>
                </div>
                <img src={ViewMore} alt='' className='view-more' />
              </div>
            </div>

            <div
              className='row details-item p-1 g-1 justify-content-between mt-3'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              data-bs-custom-className='custom-tooltip'
              data-bs-title='Last edited 07:30 21.05.2022 by Michael Cane'
            >
              <div className='details-text width-auto'>
                <div className='subheader-teal'>Assignment</div>
                <div className='details-body-text'>
                  {props.person.assignment}
                </div>
              </div>
              <img src={ViewMore} alt='' className='view-more' />
            </div>

            <div className='btn-add-info-container'>
              <span className='btn-add-info'>
                <i className='ai-plus'></i>
                Add info
              </span>
            </div>
          </div>

          <div className='col-xl-4 p-3 pe-1'>
            <div className='details-item d-block'>
              <img src={imageFolder + props.person.image} alt='' />
              <div className='row justify-content-between p-2'>
                <div className='subheader-teal width-auto'>Photo</div>
                <img src={ViewMore} alt='' className='view-more' />
              </div>
            </div>
          </div>
        </div>

        <div className='row nav-commander justify-content-between px-1'>
          <ul className='nav width-auto'>
            <li className='nav-item'>
              <a
                id='tab-resources'
                className='nav-link px-0 me-2 active'
                aria-current='page'
                href='#'
                onclick='handleTabClick(event)'
              >
                Military Career
              </a>
            </li>
            <li className='nav-item'>
              <a
                id='tab-units'
                className='nav-link px-0 mx-2'
                href='#'
                onclick='handleTabClick(event)'
              >
                Education
              </a>
            </li>
            <li className='nav-item'>
              <a
                id='tab-media'
                className='nav-link px-0 mx-2'
                href='#'
                onclick='handleTabClick(event)'
              >
                Reports
              </a>
            </li>
            <li className='nav-item'>
              <a
                id='tab-staff'
                className='nav-link px-0 mx-2'
                href='#'
                onclick='handleTabClick(event)'
              >
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a
                id='tab-infrastructure'
                className='nav-link px-0 mx-2'
                href='#'
                onclick='handleTabClick(event)'
              >
                Trainings
              </a>
            </li>
          </ul>
          <img src={ViewMore} alt='' className='view-more' />
        </div>

        <div className='btn-add-info-container'>
          <span className='btn-add-info'>
            <i className='ai-plus'></i>
            Add module
          </span>
        </div>

        <div className='career-history p-2'>
          <div className='row justify-content-between'>
            <div className='subheader-teal width-auto'>Career History</div>
            <img src={ViewMore} alt='' className='view-more' />
          </div>

          <div className='row career-history-row'>{getCareerHistory()}</div>
        </div>

        <div className='direct-subordinates p-2'>
          <div className='row justify-content-between mb-2'>
            <div className='subheader-teal width-auto'>Direct Subordinates</div>
            <img src={ViewMore} alt='' className='view-more' />
          </div>

          {getDirectSubordinates()}
        </div>

        <div className='btn-add-info-container my-2'>
          <span className='btn-add-info'>
            <i className='ai-plus'></i>
            Add module
          </span>
        </div>

        <div className='btn-add-info-container my-4 col-6'>
          <span className='btn-add-info'>
            <i className='ai-plus'></i>
            Add module
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
