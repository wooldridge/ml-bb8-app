import { useContext, useState, useEffect } from 'react';
import PanelContext from '../../store/PanelContext';

import Alert from '../Alert/Alert';
import Navbar from '../Navbar/Navbar';
import NewTicket from '../NewTicket/NewTicket';
import Sidebar from '../Sidebar/Sidebar';
import Requests from '../Requests/Requests';
import Convoy from '../Convoy/Convoy';
import AccordionFilters from '../AccordionFilters/AccordionFilters';
import Panel from '../Panel/Panel';

// Person edit components
import Position from '../Position/Position';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import Photo from '../Photo/Photo';
import CareerHistory from '../CareerHistory/CareerHistory';
import DirectSubordinates from '../DirectSubordinates/DirectSubordinates';

// Data
import convoyToDisplay from '../../data/convoy-1.json';
import requestsToDisplay from '../../data/requests.json';
import { getPerson } from '../../api/api';

function Map() {

  const dataPerson = getPerson();

  const panelContext = useContext(PanelContext);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [showNewTicket, setShowNewTicket] = useState(false);

  const handleAccordionClick = (event) => {
    setSelectedFilters([...selectedFilters, event.target.id]);
  };
  const handleRequestsClick = (event) => {
    setShowRequests(!showRequests);
  };
  const handleRequestOpen = (event) => {
    setShowRequests(false);
  };

  return (
    <div>
      {/* <Alert /> */}
      <Navbar />
      <Sidebar handleRequestsClick={handleRequestsClick} />
      <div className='outer-container'>
        <div className='inner-container'>

          {panelContext.panels.map(panel => <Panel 
            type={panel.type} 
            id={panel.id}
            key={panel.type + '-' + panel.id}
          />)}

          {/* <Convoy convoy={convoyToDisplay} /> */}
          {/* <NewTicket /> */}

          {/* <Position details={dataPerson} /> */}
          {/* <DateOfBirth details={dataPerson} /> */}
          {/* <Photo details={dataPerson} /> */}
          {/* <CareerHistory details={dataPerson} /> */}
          {/* <DirectSubordinates details={dataPerson} /> */}

          {showRequests ? (
            <Requests
              requests={requestsToDisplay}
              handleRequestsClick={handleRequestsClick}
              handleRequestOpen={handleRequestOpen}
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
