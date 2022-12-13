import Accordion from '../Accordions/Accordion';

function AccordionsList() {
  return (
    <div>
      <div id='type-accordions'>
        <div className='accordion accordion-dark' id='accordionExample'>
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default AccordionsList;
