import { useContext } from 'react';
import PanelContext from '../../store/PanelContext';
import Volyn from '../../images/volyn.jpg';
import Emblem from '../../images/emblem.png';
import Sodol from '../../images/sodol.png';
import { ArrowRight, Cross, Minus } from 'akar-icons';
import Accordion from 'react-bootstrap/Accordion';
import './MilitaryBase.css';

function MilitaryBase(props) {

  const panelContext = useContext(PanelContext);

  const getResources = (resources, eventKey, level) => {
    return resources.map((res, index) => {
      return res.resources !== undefined ? (
        <Accordion.Item
          className='accordion-item-gray'
          eventKey={eventKey + '-' + index}
          key={index}
        >
          <Accordion.Header>
            {level > 0 ? (
              <ArrowRight className='me-3' strokeWidth={2} size={16} />
            ) : null}
            {res.name}
          </Accordion.Header>
          <Accordion.Body className='sub-accordion-body'>
            <Accordion className='accordion-gray accordion-flush pt-1'>
              {getResources(res.resources, eventKey + '-' + index, level + 1)}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      ) : (
        <div className='innermost d-flex justify-content-between align-items-center px-5 py-3'>
          <div>
            <ArrowRight className='me-3' strokeWidth={2} size={16} />
            {res.name}
            <div className='mt-2'>
              <span className='accordion-badge px-2 py-1 me-1'>
                <a href=''>Status</a>
              </span>
              <span className='accordion-badge px-2 py-1 me-1'>
                <a href=''>Request Transfer</a>
              </span>
              <span className='accordion-badge px-2 py-1 me-1'>
                <a href=''>Block</a>
              </span>
            </div>
          </div>
          <span className='fs-2'>{res.number}</span>
        </div>
      );
    });
  };

  const getOperatingUnits = () => {
    if (
      !props.militaryBase.operatingUnits ||
      props.militaryBase.operatingUnits.length === 0
    ) {
      return <div className='no-data'>No Operating Units available</div>;
    }
    return props.militaryBase.operatingUnits.map((units, index) => {
      return (
        <div className='mt-1' key={index}>
          <div className='info-card d-flex card-body align-items-center'>
            <img className='img-fluid emblem' src={Emblem} alt='' width='75%' />
            <div className='ps-3'>
              <div className='form-label mb-0'>{units.type}</div>
              <div>{units.formation}</div>
            </div>
            <ArrowRight className='ms-auto me-3' strokeWidth={2} size={16} />
          </div>
        </div>
      );
    });
  };

  const militaryBase = props.data;

  const handleTabClick = (event) => {
    // Handle tabs
    const allTabs = Array.from(document.getElementsByClassName('nav-link'));
    allTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    const clickedTab = document.getElementById(event.target.id);
    clickedTab.classList.add('active');

    // Handle tab content
    const allContent = Array.from(
      document.getElementsByClassName('tab-content')
    );
    allContent.forEach((section) => {
      section.classList.remove('selected');
    });
    const contentToShow = document.getElementById(event.target.id + '-content');
    contentToShow.classList.add('selected');
  }

  return (
    <div className='card card-convoy col-4 me-3'>
      <div className='card-body'>
        <div className='row breadcrumb-row pb-2 justify-content-between g-0'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb pt-1'>
              <li className='breadcrumb-item'>
                <a href='#'>Zhytomyr</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>Stock informations</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Javelin missles
              </li>
            </ol>
          </nav>
          <div className='action-icons'>
            <Minus strokeWidth={2} size={16} />
            <Cross
              className='panel-close ms-3'
              strokeWidth={2}
              size={16}
              onClick={() => panelContext.removePanel(
                {type: "location", id: props.id}
              )}
            />
          </div>
        </div>

        <h5 className='card-title pt-4 fs-4'>{props.militaryBase.name}</h5>
        <img src={Volyn} className='img-fluid py-3' alt='' />

        <ul className='nav card-nav mb-3'>
          <li className='nav-item'>
            <a
              id='tab-resources'
              className='nav-link px-0 me-2 active'
              aria-current='page'
              href='#'
              onClick={handleTabClick}
            >
              Resources
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-units'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Units
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-media'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Media
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-staff'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Staff
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-infrastructure'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Infrastructure
            </a>
          </li>
          <li className='nav-item'>
            <a
              id='tab-vehicles'
              className='nav-link px-0 mx-2'
              href='#'
              onClick={handleTabClick}
            >
              Vehicles
            </a>
          </li>
        </ul>

        <div
          id='tab-resources-content'
          className='tab-content resources selected'
        >
          <p className='card-text'>{props.militaryBase.descResources}</p>

          <Accordion className='accordion-gray accordion-flush pt-1'>
            {getResources(props.militaryBase.resources, 'level-0', 0)}
            {/* <Accordion.Item className='accordion-item-gray' eventKey='0'>
              <Accordion.Header>Ammunition</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'>
                <Accordion className='accordion-gray accordion-flush'>
                  <Accordion.Item className='accordion-item-gray' eventKey='1'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Carabin ammunition
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='accordion-item-gray' eventKey='2'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Antitank rockets
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='innermost d-flex justify-content-between align-items-center px-5 py-3'>
                        <div>
                          <ArrowRight
                            className='me-3'
                            strokeWidth={2}
                            size={16}
                          />
                          Javelin missiles
                          <div className='mt-2'>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Status</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Request Transfer</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Block</a>
                            </span>
                          </div>
                        </div>
                        <span className='fs-2'>600</span>
                      </div>
                      <div className='innermost d-flex justify-content-between align-items-center px-5 py-3'>
                        <div>
                          <ArrowRight
                            className='me-3'
                            strokeWidth={2}
                            size={16}
                          />
                          NLAW missiles
                          <div className='mt-2'>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Status</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Request Transfer</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Block</a>
                            </span>
                          </div>
                        </div>
                        <span className='fs-2'>600</span>
                      </div>
                      <div className='innermost d-flex justify-content-between align-items-center px-5 py-3'>
                        <div>
                          <ArrowRight
                            className='me-3'
                            strokeWidth={2}
                            size={16}
                          />
                          RPG missiles
                          <div className='mt-2'>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Status</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Request Transfer</a>
                            </span>
                            <span className='accordion-badge px-2 py-1 me-1'>
                              <a href=''>Block</a>
                            </span>
                          </div>
                        </div>
                        <span className='fs-2'>600</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='accordion-item-gray' eventKey='3'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Hand grenades
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='accordion-item-gray' eventKey='4'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Pistol ammunition
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='accordion-item-gray' eventKey='5'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Special ammunition
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='accordion-item-gray' eventKey='6'>
                    <Accordion.Header>
                      <ArrowRight className='me-3' strokeWidth={2} size={16} />
                      Artillery ammunition
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item-gray' eventKey='1'>
              <Accordion.Header>Supplies</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item-gray' eventKey='2'>
              <Accordion.Header>Fuel</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item-gray' eventKey='3'>
              <Accordion.Header>Food</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item-gray' eventKey='4'>
              <Accordion.Header>Weapons</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item-gray' eventKey='5'>
              <Accordion.Header>Equipment</Accordion.Header>
              <Accordion.Body className='sub-accordion-body'></Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </div>
        <div id='tab-units-content' className='tab-content units'>
          <p className='card-text pb-3 request-fields'>
            {props.militaryBase.descUnits}
          </p>
          <div className='row mb-2'>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Name of the Facility
              </label>
              <div>{props.militaryBase.facilityName}</div>
            </div>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Symbol
              </label>
              <div>{props.militaryBase.symbol}</div>
            </div>
          </div>
          <div className='row pb-3 request-fields'>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Facility Type
              </label>
              <div>{props.militaryBase.facilityType}</div>
            </div>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Standard Personnel
              </label>
              <div>{props.militaryBase.standardPersonnel}</div>
            </div>
          </div>
          <div className='operating-units mt-3'>
            <div className='subheader'>Operating Units</div>
            <div className='mt-3'>{getOperatingUnits()}</div>
          </div>
          <div className='operating-units mt-3'>
            <div className='subheader'>Commander</div>
            <div className='mt-3'>
              <div className='mt-1'>
                <div className='info-card d-flex card-body align-items-center'>
                  <img className='img-fluid emblem me-3' src={Sodol} alt='' />
                  <div className='ps-3'>
                    <div className='form-label mb-0'>
                      {props.militaryBase.commanderPosition}
                    </div>
                    <div>
                      <a 
                        className='link-white' 
                        href='#'
                        onClick={() => panelContext.addPanel(
                          {type: "person", id: 'person-1001'}
                        )}
                      >
                        {props.militaryBase.commanderName}
                      </a>
                    </div>
                  </div>
                  <ArrowRight
                    className='ms-auto me-3'
                    strokeWidth={2}
                    size={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilitaryBase;
