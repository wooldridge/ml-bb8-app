import PersonDetails from '../PersonDetails/PersonDetails';
import DeliveryRequest from '../DeliveryRequest/DeliveryRequest';
import MilitaryBase from '../MilitaryBase/MilitaryBase';
import Convoy from '../Convoy/Convoy';

function Panel(props) {

  const getPanel = () => {
    if (props.type === "person") {
      return (
        <PersonDetails 
          data={props.content} 
          id={props.id}
        />
      );
    }
    if (props.type === "location") {
      return (
        <MilitaryBase 
          militaryBase={props.content}
          id={props.id}
        />
      );
    }
    if (props.type === "request") {
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
