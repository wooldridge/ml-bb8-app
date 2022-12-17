import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import './AccordionFilters.css';

function AccordionFilters(props) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleClick = (event) => {
    if (event.target.checked) {
      setSelectedFilters([...selectedFilters, event.target.id]);
    } else {
      let filteredArray = selectedFilters.filter(
        (item) => item !== event.target.id
      );
      setSelectedFilters(filteredArray);
    }
    props.handleClick(event);
  };
  const getCheckStyle = (label) => {
    let style = 'card-body-inner px-2 py-1';
    if (selectedFilters.includes(label)) {
      style = style + ' checked';
    }
    return style;
  };
  const getLabels = () => {
    if (!props.labels || props.labels.length === 0) {
      return null;
    }
    return props.labels.map((label, index) => {
      return (
        <div className='card bg-dark pb-2' key={index}>
          <div className='card-body fs-7 p-0 px-3'>
            <div className={getCheckStyle(label)}>
              <Form.Check
                type='checkbox'
                id={label}
                label={label}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div id='type-accordions'>
      <Accordion className='accordion-dark' defaultActiveKey='0'>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>{getLabels()}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionFilters;
