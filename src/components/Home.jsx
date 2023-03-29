import hero from '../assets/hero.jpg';

const Home = () => {
  return (
    <main>
      <div className='home-content'>
        <h1 className='home-title'>
          Unparalleled personalized outreach and optimized customer engagement
        </h1>
        <p className='home-text'>
          Experience the power of Salient - the AI-powered sales platform that
          maximizes outbound volume and engagement, creates effortless sales and
          forges lasting connections with your customers.
        </p>
        <button type='button' className='btn home-btn'>
          Get Access
        </button>
        <br />
        <br />
        <div className='container'>
          <img src={hero} alt='main img' className='img' />
        </div>
      </div>
    </main>
  );
};
export default Home;
