import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import '../css/Home.css';

const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    
  return ( 
  <div className="home-container">
  <nav>
  <div className="yellow"><h1>Sports League</h1></div>
  </nav>
<div className="home-banner-container">
<div className="home-bannerImage-container">
<img src={BannerBackground} alt="" />
</div>
</div>
 
    <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    }}
    
    validationSchema={Yup.object().shape({
      name: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Name is required'),
      email: Yup.string().email('Invalid email address')
      .required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
    })}
    onSubmit={ (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
    
  >
    {formik => (
        <div className='offset-lg-3 col-lg-4'>
    <Form onSubmit={formik.handleSubmit} className='container'>
        <div className='card'>
            <div className='card-header'>
            <div className='card-heading'><h4>User Registration Form</h4></div>

            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
            
     <div>
        <label htmlFor="name" className='label-name'>Name:</label> <span  className='required-msg'>*</span>
     <Field
       id="name"
       name="name"
       type="text"
       onChange={formik.handleChange}
       value={formik.values.name}
       className='form-control'
     />
     <ErrorMessage name="name" />
     </div>
     <br />

     <div>
        <label htmlFor="email" className='label-name'>Email:</label><span  className='required-msg'>*</span>
     <Field
       id="email"
       name="email"
       type="email"
       onChange={formik.handleChange}
       value={formik.values.email}
       className='form-control'
     />
     <ErrorMessage name="email" />
     
     </div><br />
      <div>
        <label htmlFor="password" className='label-name'>Password:</label><span  className='required-msg'>*</span>
     <Field
       id="password"
       name="password"
       type="password"
       onChange={formik.handleChange}
       value={formik.values.password}
       className='form-control'
     />
     <ErrorMessage name="password" />
      </div><br />

      <div>
        <label htmlFor="confirmpassword" className='label-name'>Confirm Password:</label><span  className='required-msg'>*</span>
     <Field
       id="confirmpassword"
       name="confirmpassword"
       type="password"
       onChange={formik.handleChange}
       value={formik.values.confirmpassword}
       className='form-control'
     />
      <ErrorMessage name="confirmpassword" />
      </div></div></div></div><br/>
         <div className='card-footer'>
      <button type="submit" className="secondary-button" onClick={formik.postData}>
            Submit {" "}
          </button>
          </div>
          </div></div>
    </Form></div>
    )}
    
  
  </Formik>
  
  <a href="/"> <button className="secondary-button">
            Back <FiArrowLeft />{" "}
          </button></a>
  </div>
);
}

export default Register
