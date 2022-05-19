import React from 'react'
import './FormStyles.css'
import { HashLink as Link } from 'react-router-hash-link'
import { useForm,ValidationError } from '@formspree/react'
const Form = () => {
    const [state, handleSubmit] = useForm("myyoddzz");
        if (state.succeeded) {
            return <p>thanks for hiring me</p>;
        }
  return (
      <div className='form'>
        <p>Contact me here</p>
    <form id='contact' onSubmit={handleSubmit} className="form">
        <div className="form-details">
        <label className='label' htmlFor="name"> your name</label>
        <input type="text" className="form-input" placeholder='fullName' required />
        </div>
        
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}/>
          <div className="form-details">
        <label className='label' htmlFor="email">Email</label>
        <input type="email" className="form-inputs" placeholder='Email' required />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}/>
          <div className="form-details">
        <label className='label' htmlFor="subject">Subject</label>
        <input type="text" className="form-inpu" placeholder='subject' required />
        </div>
        <ValidationError 
          prefix="Subject" 
          field="lsubject"
          errors={state.errors}/>
        <label className='label'>message</label>
        <textarea className='text-area' name="messagw" id="meassage" cols="30" rows="10" placeholder='tell me about your project'></textarea>
        <ValidationError 
          prefix="message" 
          field="message"
          errors={state.errors}/>
           <button className='btn' type="submit" disabled={state.submitting}>
          Submit
        </button>
        <Link className='home-btn' smooth to='#home'  >Home</Link>

         
    </form>

     {/* <Link to='/'><button className='btn'>back home</button></Link> */}
      </div>
  )
}

export default Form