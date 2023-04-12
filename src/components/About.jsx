import icon1 from '../assets/icon1.png';

const About = () => {
  return (
    <div style={{ background: '#000' }}>
      <section className='about'>
        <div className='upper-block'>
          <div className='upper-block-big'>
            <h1 className='home-title about-title'>
              Supercharge your Outbound Sales
            </h1>
            <p className='about-text'>
              Unleash personalized outreach that forges meaningful connections
              and creates effortless leads. <br />
              Salient is your AI sales development representative that;
            </p>
            <ul className='about-text text-ul'>
              <li>Generates human-quality outbound in your tone of voice</li>
              <li>Proactively sets up meetings</li>
              <li>Responds to common queries</li>
            </ul>
          </div>
          <div className='upper-block-small'></div>
        </div>
        <div className='lower-blocks'>
          <div className='parallel-blocks'>
            <div className='parallel-block-1'>
              <a>3x Outbound Sales</a>
            </div>
            <div className='parallel-block-2'>
              <a>2x Engagement Rate!</a>
            </div>
          </div>

          <div className='vertical-block-1'></div>
          <div className='vertical-block-2'>
            <div className='vertical-block-2-content'>
              <button type='button' className='btn about-btn'>
                <img src={icon1} alt='icon' style={{ marginRight: '10px' }} />
                <div className='about-btn-text'>
                  <p>
                    Backed by <br />
                    <span>Combinator</span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
