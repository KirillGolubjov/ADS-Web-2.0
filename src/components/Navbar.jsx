import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <div>
        <button type='button' className='btn navbar-btn'>
          <a>Who are we?</a>
        </button>
        <button type='button' className='btn navbar-btn'>
          <a>Contact us</a>
        </button>
        <button type='button' className='btn navbar-btn'>
          <a>Request Access</a>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
