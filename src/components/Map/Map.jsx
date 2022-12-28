import { useState } from 'react';

import Alert from '../Alert/Alert';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Navbar from '../Navbar/Navbar';
import NewTicket from '../NewTicket/NewTicket';
import Sidebar from '../Sidebar/Sidebar';
import Convoy from '../Convoy/Convoy';
import PersonDetails from '../PersonDetails/PersonDetails';
import AccordionFilters from '../AccordionFilters/AccordionFilters';
import Position from '../Position/Position';
import Requests from '../Requests/Requests';
import DeliveryRequest from '../DeliveryRequest/DeliveryRequest';

import personToDisplay from '../../data/person-1001.json';
import militaryBaseToDisplay from '../../data/militaryBase-1.json';
import convoyToDisplay from '../../data/convoy-1.json';
import requestsToDisplay from '../../data/requests.json';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import Photo from '../Photo/Photo';
import CareerHistory from '../CareerHistory/CareerHistory';
import DirectSubordinates from '../DirectSubordinates/DirectSubordinates';

function Map() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showMilitaryBase, setShowMilitaryBase] = useState(false);
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [showPerson, setShowPerson] = useState(false);

  const handleAccordionClick = (event) => {
    console.log('handleAccordionClick', event);
    setSelectedFilters([...selectedFilters, event.target.id]);
  };
  const handleRequestsClick = (event) => {
    console.log('handleRequestsClick', event);
    setShowRequests(!showRequests);
  };
  const handleRequestOpen = (event) => {
    console.log('handleRequestOpen', event);
    setShowRequest(true);
    // setShowRequests(false);
  };
  const handleDelivReqClose = (event) => {
    console.log('handleDelivReqClose', event);
    setShowRequest(false);
  };
  const handleMilitaryBaseOpen = (event) => {
    console.log('handleMilitaryBaseOpen', event);
    setShowMilitaryBase(true);
  };
  const handleMilitaryBaseClose = (event) => {
    console.log('handleMilitaryBaseClose', event);
    setShowMilitaryBase(false);
  };
  const handlePersonOpen = (event) => {
    console.log('handlePersonOpen', event);
    setShowPerson(true);
  };
  const handlePersonClose = (event) => {
    console.log('handlePersonClose', event);
    setShowPerson(false);
  };

  return (
    <div>
      {/* <Alert /> */}
      <Navbar />
      <Sidebar handleRequestsClick={handleRequestsClick} />
      <div className='outer-container'>
        <div className='inner-container'>
          {showMilitaryBase ? (
            <MilitaryBase
              militaryBase={militaryBaseToDisplay}
              handleMilitaryBaseClose={handleMilitaryBaseClose}
              handlePersonOpen={handlePersonOpen}
            />
          ) : null}
          {/* <Convoy convoy={convoyToDisplay} /> */}
          {showRequest ? (
            <DeliveryRequest 
              handleDelivReqClose={handleDelivReqClose} 
              handleMilitaryBaseOpen={handleMilitaryBaseOpen}
            />
          ) : null}

          {/* <NewTicket /> */}
          {showPerson ? (
            <PersonDetails 
              person={personToDisplay} 
              handlePersonClose={handlePersonClose}
            />
          ) : null}
          {/* <Position details={personToDisplay} /> */}
          {/* <DateOfBirth details={personToDisplay} /> */}
          {/* <Photo details={personToDisplay} /> */}
          {/* <CareerHistory details={personToDisplay} /> */}
          {/* <DirectSubordinates details={personToDisplay} /> */}
          {showRequests ? (
            <Requests
              requests={requestsToDisplay}
              handleRequestsClick={handleRequestsClick}
              handleRequestOpen={handleRequestOpen}
              handleMilitaryBaseOpen={handleMilitaryBaseOpen}
              handleMilitaryBaseClose={handleMilitaryBaseClose}
            />
          ) : null}
        </div>
      </div>

      <AccordionFilters
        title='Node levels'
        labels={['Level 1', 'Level 2']}
        handleClick={handleAccordionClick}
      />
    </div>
  );
}

export default Map;
