import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Disclaimer() {
  const navigate = useNavigate();
  const handleLoginClick = (event) => {
    navigate('/dashboard');
  };
  return (
    <div className='d-flex h-100 bg-dark bg-world'>
      <div className='d-flex w-100 h-100 mx-auto flex-column'>
        <main className='px-3 my-auto'>
          <div className='row justify-content-center'>
            <div className='col-sm-8 col-md-8 col-lg-7 col-xl-4'>
              <div className='login card bg-dark text-bg-dark rounded-0 border-0 animate__animated animate__fadeInLeft'>
                <div className='card-body p-5'>
                  <img className='mb-2' src={Logo} alt='MarkLogic' />
                  <p className='text-muted'>Login to your VPN</p>
                  <div className='mb-2'>
                    <label for='username' className='form-label d-none'>
                      Login
                    </label>
                    <input
                      type='text'
                      className='bg-dark text-bg-dark form-control form-control-lg rounded-1 border-secondary'
                      id='username'
                      placeholder='Login'
                    />
                  </div>
                  <div className='mb-4'>
                    <label for='username' className='form-label d-none'>
                      Login
                    </label>
                    <input
                      type='password'
                      className='bg-dark text-bg-dark form-control form-control-lg rounded-1 border-secondary'
                      id='password'
                      placeholder='Password'
                    />
                  </div>
                  <div className='mb-4'>
                    <button
                      className='btn btn-lg btn-secondary w-100 rounded-1 border-0'
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                  </div>
                  <a href='#'>You don't have access?</a>
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
