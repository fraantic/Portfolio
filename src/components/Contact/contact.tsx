'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">

      <div className='duo-form-div'>
      <div className='form-name-container'>
        <label
          htmlFor='name'
          className='form-title'
        >
          
        </label>
        <input
          type='text'
          placeholder=' Full Name (required)'
          className='form-box'
          required
          {...register('name', { required: true })}
        />
      </div>



      <div className='form-number-container'>
        <label
          htmlFor='number'
          className='form-title'
        >
          
        </label>
        <input
          
          type="tel" 
          placeholder=' +60 123456789 (required)'
          className='form-box'
          required
          {...register('number', { required: true })}
        />
      </div>
      </div>



      <div className='form-email-container'>
        <label
          htmlFor='email'
          className='form-title'
        >
          
        </label>
        <input
          type='email'
          placeholder=' example@domain.com (required)'
          className='form-box'
          required
          {...register('email', { required: true })}
        />
      </div>


      <div className='form-message-container'>
        <label
          htmlFor='message'
          className='form-title'
        >
          
        </label>
        <textarea
          rows={8}
          placeholder=' Comment'
          className='form-box'
          style={{ resize: 'none', height: '100px' }}
          {...register('message', { required: true })}
        ></textarea>
      </div>



      <div>
        <button className='form-submit-button'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
