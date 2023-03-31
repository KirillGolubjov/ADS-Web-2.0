import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../features/modalSlice';
import formImg from '../assets/form.jpg';
import FormRow from './FormRow';
import { FaTimes } from 'react-icons/fa';

const Form = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  if (!isModalOpen) {
    return null;
  }
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='form-container'>
        <div className='form-container-1'>
          <div className='form-text'>
            <h2 style={{ fontWeight: '600' }}>Interested in trying Salient?</h2>
            <p>We are excited for you to join our platform</p>
          </div>
          <form className='form'>
            <button
              className='close-modal-btn'
              onClick={() => dispatch(toggleModal())}
            >
              <FaTimes />
            </button>
            <FormRow type='name' name='full name' />
            <FormRow type='email' name='email' />
            <FormRow type='phone' name='phone' />
            <FormRow type='url' name='Project URL' />
            <button className='btn'>Submit</button>
          </form>
        </div>
        <div className='form-container-2'>
          <img src={formImg} alt='form-img' className='img' />
        </div>
      </div>
    </div>
  );
};
export default Form;
