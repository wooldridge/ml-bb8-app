import PersonDetails from '../PersonDetails/PersonDetails';
import DeliveryRequest from '../DeliveryRequest/DeliveryRequest';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Convoy from '../Convoy/Convoy';

import { getPerson, getLocation, getConvoy, getRequests } from '../../api/api';

function Panel(props) {

  const getPanel = () => {
    if (props.type === "person") {
      const data = getPerson();
      return (
        <PersonDetails 
          data={data} 
          id={props.id}
        />
      );
    }
    if (props.type === "location") {
      const data = getLocation();
      return (
        <MilitaryBase 
          militaryBase={data}
          id={props.id}
        />
      );
    }
    if (props.type === "request") {
      // const data = getRequest();
      return (
        <DeliveryRequest 
          id={props.id}
        />
      );
    }
    return null;
  }

  return (
    getPanel()
  );
}

export default Panel;
