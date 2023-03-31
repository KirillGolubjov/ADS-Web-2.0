import person from '../assets/person.jpg';

const Person = () => {
  return (
    <div className='person-color'>
      <section className='person-box'>
        <div className='person-box-1'>
          <div className='person-box-text'>
            <h4 className='person-box-citation'>
              "We always had to choose between outbound volume or high-touch
              personalization; thanks to Salient, we don't have to"
            </h4>
            <p className='person-box-name'>Head of Sales, PublicCo</p>
          </div>
        </div>
        <div className='person-box-2'></div>
      </section>
    </div>
  );
};
export default Person;
