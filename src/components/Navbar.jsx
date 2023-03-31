import logo from '../assets/logo.jpg';
import { toggleModal } from '../features/modalSlice';
import { useDispatch } from 'react-redux';
import Form from './Form';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <div>
        <button type='button' className='btn navbar-btn'>
          <a>Who are we?</a>
        </button>
        <button
          type='button'
          className='btn navbar-btn'
          onClick={() => dispatch(toggleModal())}
        >
          Contact us
        </button>
        <Form />
        <button type='button' className='btn navbar-btn'>
          <a>Request Access</a>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
