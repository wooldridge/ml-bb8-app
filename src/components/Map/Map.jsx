import AccordionsList from '../AccordionsList/AccordionsList';
import Alert from '../Alert/Alert';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Navbar from '../Navbar/Navbar';
import NewTicket from '../NewTicket/NewTicket';
import Sidebar from '../Sidebar/Sidebar';
import Convoy from '../Convoy/Convoy';
import PersonDetails from '../PersonDetails/PersonDetails';

import personToDisplay from '../../data/person-1002.json';
import convoyToDisplay from '../../data/convoy-1.json';

function Map() {
  return (
    <div>
      <Alert />
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
          <Convoy convoy={convoyToDisplay} />
          {/* <NewTicket /> */}
          <PersonDetails person={personToDisplay} />
        </div>
      </div>
      <AccordionsList />
    </div>
  );
}

export default Map;
