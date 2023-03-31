import logo from '../assets/logo.jpg';
import linkedin from '../assets/linkedin.jpg';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <section>
      <div className='footer'>
        <img src={logo} alt='logo' />
        <div className='footer-links'>
          <a href=''>Home</a>
          <a href=''>Who are we? </a>
          <a href=''>Get in touch</a>
        </div>
        <a href=''>
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>
      <div className='footer-underline'></div>
      <p className='copyright'>
        Copyright © {currentYear}. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
