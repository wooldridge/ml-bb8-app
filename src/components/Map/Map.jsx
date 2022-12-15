import Alert from '../Alert/Alert';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Navbar from '../Navbar/Navbar';
import NewTicket from '../NewTicket/NewTicket';
import Sidebar from '../Sidebar/Sidebar';
import Convoy from '../Convoy/Convoy';
import PersonDetails from '../PersonDetails/PersonDetails';
import AccordionFilters from '../AccordionFilters/AccordionFilters';
import Position from '../Details/Position/Position';
import Requests from '../Requests/Requests';

import personToDisplay from '../../data/person-1002.json';
import convoyToDisplay from '../../data/convoy-1.json';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import Photo from '../Photo/Photo';
import CareerHistory from '../CareerHistory/CareerHistory';

function Map() {
  return (
    <div>
      {/* <Alert /> */}
      <Navbar />
      <Sidebar />
      <div
        className='ms-1 mt-3'
        style={{
          position: 'relative',
          width: '100%',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            top: '0',
            right: '80px',
            width: '100%',
          }}
        >
          {/* <MilitaryBase /> */}
          {/* <Convoy convoy={convoyToDisplay} /> */}
          {/* <NewTicket /> */}
          {/* <PersonDetails person={personToDisplay} /> */}
          {/* <Position />
          <DateOfBirth /> */}
          {/* <Photo /> */}
          <CareerHistory />
          {/* <Requests /> */}
        </div>
      </div>

      <AccordionFilters />
    </div>
  );
}

export default Map;
