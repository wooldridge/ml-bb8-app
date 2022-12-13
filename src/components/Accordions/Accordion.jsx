import { Cross } from 'akar-icons';

function Accordion() {
  return (
    <div className='accordion-item accordion-item-dark'>
      <h2 className='accordion-header' id='headingOne'>
        <button
          className='accordion-button accordion-button-dark collapsed text-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseOne'
          aria-expanded='false'
          aria-controls='collapseOne'
        >
          Infrastructure
          <Cross className='m-2 ms-auto' strokeWidth={2} size={16} />
        </button>
      </h2>
      <div
        id='collapseOne'
        className='accordion-collapse collapse'
        aria-labelledby='headingOne'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body'>
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classNamees
          that we use to style each element. These classNamees control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </div>
      </div>
    </div>
  );
}

export default Accordion;
