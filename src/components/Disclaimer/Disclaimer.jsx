import './Disclaimer.css';
import { TriangleAlertFill } from 'akar-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Disclaimer() {
  return (
    <div className='d-flex h-100 bg-dark bg-world'>
      <div className='d-flex w-100 h-100 mx-auto flex-column'>
        <main className='px-3 my-auto'>
          <div className='row justify-content-center'>
            <div className='col-sm-10 col-lg-8 col-xl-6'>
              <div className='card disclaimer rounded-5 my-5 animate__animated animate__fadeIn'>
                <div className='card-body p-5'>
                  <p className='text-center'>
                    <TriangleAlertFill strokeWidth={2} size={180} />
                  </p>
                  <h4 className='text-center fw-bold mb-0'>Disclaimer</h4>
                  <p className='lead fw-bold text-center mb-4'>
                    Department of Defense Privacy and Consent Notice
                  </p>
                  <p className=''>
                    You are accessing a U.S. Government (USG) Information System
                    (IS) that is provided for USG-authorized use only. By using
                    this IS (which includes any device attached to this IS), you
                    consent to the following conditions:
                  </p>
                  <ul className=''>
                    <li>
                      The USG routinely intercepts and monitors communications
                      on this IS for purposes including, but not limited to,
                      penetration testing, COMSEC monitoring, network operations
                      and defense, personnel misconduct (PM), law enforcement
                      (LE), and counterintelligence (CI) investigations.
                    </li>
                    <li>
                      At any time, the USG may inspect and seize data stored on
                      this IS.
                    </li>
                    <li>
                      Communications using, or data stored on, this IS are not
                      private, are subject to routine monitoring, interception,
                      and search, and may be disclosed or used for any
                      USG-authorized purpose.
                    </li>
                    <li>
                      This IS includes security measures (e.g., authentication
                      and access controls) to protect USG interests--not for
                      your personal benefit or privacy.
                    </li>
                    <li>
                      Notwithstanding the above, using this IS does not
                      constitute consent to PM, LE or CI investigative searching
                      or monitoring of the content of privileged communications,
                      or work product, related to personal representation or
                      services by attorneys, psychotherapists, or clergy, and
                      their assistants. Such communications and work product are
                      private and confidential. See User Agreement for details.
                    </li>
                  </ul>
                  <div className='text-center mt-4'>
                    <Link to='/login' className='btn btn-dark  w-50'>
                      I agree
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Disclaimer;
