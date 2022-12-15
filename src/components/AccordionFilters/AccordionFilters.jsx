import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function AccordionFilters() {
  return (
    <div id='type-accordions'>
      <Accordion className='accordion-dark' defaultActiveKey='0'>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Node levels</Accordion.Header>
          <Accordion.Body>
            <div class='card bg-dark pb-1'>
              <div class='card-body fs-7 p-0 px-3'>
                <div class='card-body-inner checked px-2 py-1'>
                  <Form.Check type='checkbox' id='checkbox-1' label='Base' />
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionFilters;
