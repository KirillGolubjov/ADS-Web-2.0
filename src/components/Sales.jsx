import imgSale from '../assets/sale.jpg';

const Sales = () => {
  return (
    <section>
      <div className='sales-container'>
        <h1 className='home-title'>Outbound Sales, Without the Work</h1>
        <p className='sales-text'>
          Our exceptional personalized outreach capabilities ensure that your
          communications resonate with your customers, helping you build
          meaningful relationships that drive revenue growth.
        </p>
        <div className='sales-box'>
          <div className='sales-box-1'>
            <img src={imgSale} />
          </div>
          <div className='sales-box-2'>
            <img src={imgSale} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sales;
