import hero from '../assets/hero.jpg';

const Home = () => {
  return (
    <main>
      <div className='home-content'>
        <h1 className='home-title'>
          AdsFuel Market is an online platform for advertising campaigns on the
          Internet.
        </h1>
        <p className='home-text'>
          For AdsFuel Market, helping our customers and partners succeed is
          extremely important. Our passionate and experienced team successfully
          implements ideas and strategies. Before launching each advertising
          campaign, we will understand the task at hand in detail!
        </p>
        <button type='button' className='btn home-btn'>
          Get Access
        </button>
        <br />
        <br />
        <div className='container'>
          <img src={hero} alt='main img' className='img home-img' />
        </div>
      </div>
    </main>
  );
};
export default Home;
