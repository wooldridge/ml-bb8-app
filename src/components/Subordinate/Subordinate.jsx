import { ArrowRight } from 'akar-icons';
import SubordinateImage from '../../images/subordinate-1.jpg';

function Subordinate() {
  return (
    <div className='info-card d-flex card-body align-items-center mt-1'>
      <img className='img-fluid emblem' src={SubordinateImage} alt='' />
      <div className='ps-3'>
        <div className='form-label mb-0'>
          347th IT and Signal Center, Zhytomyr
        </div>
        <div>Lieutenant General Yevhen MOISIUK</div>
      </div>
      <ArrowRight className='ms-auto me-3' strokeWidth={2} size={20} />
    </div>
  );
}

export default Subordinate;
