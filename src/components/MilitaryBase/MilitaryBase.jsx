import Volyn from '../../images/volyn.jpg';
import Emblem from '../../images/emblem.png';
import Sodol from '../../images/sodol.png';
import { ArrowRight, Cross, Minus } from 'akar-icons';

function MilitaryBase() {
  function handleTabClick(event) {
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
            <Cross className='ms-3' strokeWidth={2} size={16} />
          </div>
        </div>

        <h5 className='card-title pt-4 fs-4'>Volyn 1 Military Base</h5>
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
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est
          </p>

          <div
            className='accordion accordion-gray accordion-flush pt-1'
            id='accordionFlushExample'
          >
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingOne'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseOne'
                  aria-expanded='false'
                  aria-controls='flush-collapseOne'
                >
                  Ammunition
                </button>
              </h2>
              <div
                id='flush-collapseOne'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingOne'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body sub-accordion-body'>
                  <div
                    className='accordion accordion-gray'
                    id='sub-accordionExample'
                  >
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingOne'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseOne'
                          aria-expanded='false'
                          aria-controls='collapseOne'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          Carabin ammunition
                        </button>
                      </h2>
                      <div
                        id='sub-collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingOne'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <strong>
                            This is the first item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingTwo'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          AntiTank Rockets
                        </button>
                      </h2>
                      <div
                        id='sub-collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingTwo'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <div className='d-flex justify-content-between align-items-center px-5 py-1'>
                            <div>
                              <ArrowRight
                                className='pe-3'
                                strokeWidth={2}
                                size={20}
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
                        </div>
                        <div className='accordion-body'>
                          <div className='d-flex justify-content-between align-items-center px-5 py-1'>
                            <div>
                              <ArrowRight
                                className='pe-3'
                                strokeWidth={2}
                                size={20}
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
                            <span className='fs-2'>300</span>
                          </div>
                        </div>
                        <div className='accordion-body'>
                          <div className='d-flex justify-content-between align-items-center px-5 py-1'>
                            <div>
                              <ArrowRight
                                className='pe-3'
                                strokeWidth={2}
                                size={20}
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
                            <span className='fs-2'>700</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingThree'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          Hand grenades
                        </button>
                      </h2>
                      <div
                        id='sub-collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingThree'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <strong>
                            This is the first item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingFour'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseFour'
                          aria-expanded='false'
                          aria-controls='collapseFour'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          Pistol ammunition
                        </button>
                      </h2>
                      <div
                        id='sub-collapseFour'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingFour'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <strong>
                            This is the first item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingFive'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseFive'
                          aria-expanded='false'
                          aria-controls='collapseFive'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          Special ammunition
                        </button>
                      </h2>
                      <div
                        id='sub-collapseFive'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingFive'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <strong>
                            This is the first item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item accordion-item-gray'>
                      <h2 className='accordion-header' id='sub-headingSix'>
                        <button
                          className='accordion-button collapsed text-white'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#sub-collapseSix'
                          aria-expanded='false'
                          aria-controls='collapseSix'
                        >
                          <ArrowRight
                            className='pe-3'
                            strokeWidth={2}
                            size={20}
                          />
                          Artillery ammunition
                        </button>
                      </h2>
                      <div
                        id='sub-collapseSix'
                        className='accordion-collapse collapse'
                        aria-labelledby='sub-headingSix'
                        data-bs-parent='#sub-accordionExample'
                      >
                        <div className='accordion-body'>
                          <strong>
                            This is the first item's accordion body.
                          </strong>{' '}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingTwo'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseTwo'
                  aria-expanded='false'
                  aria-controls='flush-collapseTwo'
                >
                  Supplies
                </button>
              </h2>
              <div
                id='flush-collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingTwo'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingThree'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseThree'
                  aria-expanded='false'
                  aria-controls='flush-collapseThree'
                >
                  Fuel
                </button>
              </h2>
              <div
                id='flush-collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingThree'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingFour'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFour'
                  aria-expanded='false'
                  aria-controls='flush-collapseFour'
                >
                  Food
                </button>
              </h2>
              <div
                id='flush-collapseFour'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingFour'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingFive'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFive'
                  aria-expanded='false'
                  aria-controls='flush-collapseFive'
                >
                  Weapons
                </button>
              </h2>
              <div
                id='flush-collapseFive'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingFive'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className='accordion-item accordion-item-gray'>
              <h2 className='accordion-header' id='flush-headingSix'>
                <button
                  className='accordion-button collapsed text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseSix'
                  aria-expanded='false'
                  aria-controls='flush-collapseSix'
                >
                  Equipment
                </button>
              </h2>
              <div
                id='flush-collapseSix'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingSix'
                data-bs-parent='#accordionFlushExample'
              >
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='tab-units-content' className='tab-content units'>
          <p className='card-text pb-3 request-fields'>
            The FGM-148 Javelin, or Advanced Anti-Tank Weapon System-Medium
            (AAWS-M), is an American-made portable anti-tank missile system in
            service since 1996, and continuously upgraded. It replaced the M47
            Dragon anti-tank missile in US service.[10] Its fire-and-forget
            design uses automatic infrared guidance that allows the user to seek
            cover immediately after launch, in contrast to wire-guided systems,
            like the system used by the Dragon, which require a user to guide
            the weapon throughout the engagement. The Javelin's high explosive
            anti-tank (HEAT) warhead can defeat modern tanks by top attack,
            hitting them from above, where their armor is thinnest, and is also
            useful against fortifications in a direct attack flight.
          </p>
          <div className='row mb-2'>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Name of the Facility
              </label>
              <div>Wolyn 1 Military Base</div>
            </div>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Symbol
              </label>
              <div>WMB1007</div>
            </div>
          </div>
          <div className='row pb-3 request-fields'>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Facility Type
              </label>
              <div>Military Base</div>
            </div>
            <div className='col-6'>
              <label for='created-by' className='form-label'>
                Standard Personel
              </label>
              <div>250</div>
            </div>
          </div>
          <div className='operating-units mt-3'>
            <div className='subheader'>Operating Units</div>
            <div className='mt-3'>
              <div className='info-card d-flex card-body align-items-center'>
                <img
                  className='img-fluid emblem'
                  src={Emblem}
                  alt=''
                  width='75%'
                />
                <div className='ps-3'>
                  <div className='form-label mb-0'>Unit Emblem</div>
                  <div>80th Air Assault Brigade</div>
                </div>
                <ArrowRight
                  className='ms-auto me-3'
                  strokeWidth={2}
                  size={20}
                />
              </div>
            </div>
            <div className='mt-1'>
              <div className='info-card d-flex card-body align-items-center'>
                <img
                  className='img-fluid emblem'
                  src={Emblem}
                  alt=''
                  width='75%'
                />
                <div className='ps-3'>
                  <div className='form-label mb-0'>Unit Emblem</div>
                  <div>81st Airmobile Brigade</div>
                </div>
                <ArrowRight
                  className='ms-auto me-3'
                  strokeWidth={2}
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className='operating-units mt-3'>
            <div className='subheader'>Commander</div>
            <div className='mt-3'>
              <div className='info-card d-flex card-body align-items-center'>
                <img className='img-fluid emblem pe-3' src={Sodol} alt='' />
                <div className='ps-3'>
                  <div className='form-label mb-0'>Present Commander</div>
                  <div>Colonel Yuriy Sodol</div>
                </div>
                <ArrowRight
                  className='ms-auto me-3'
                  strokeWidth={2}
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilitaryBase;
