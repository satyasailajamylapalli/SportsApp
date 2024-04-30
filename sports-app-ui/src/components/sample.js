import React,{ useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import '../css/Home.css';
import {useNavigate,Link} from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
  //  const [userName, setUserName] = useState('');
 //   const [password, setPassword] = useState('');
    const initialValues={
        email: "",
        password: "",
      }
    const handleOnClick = () =>  navigate('/usersearch', {state: initialValues.email});
  
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
    email: initialValues.email,
    password: initialValues.password,
  }}
    validationSchema={Yup.object().shape({
      email: Yup.string().required('UserName is required'),
      password: Yup.string().required('Password is required'),
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
            <div className='card-heading'><h4>User Login</h4></div>

            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
  

     <div>
        <label htmlFor="email" className='label-name'>User Name:</label><span  className='required-msg'>*</span>
     <Field
       id="email"
       name="email"
       type="email"
       onChangeText={formik.handleChange}
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
    
       onChangeText={formik.handleChange}
       value={formik.values.password}
       className='form-control'
     />
     <ErrorMessage name="password" />
      </div><br />

      </div></div></div><br/>
         <div className='card-footer'>
        <button  className="secondary-button" >
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
         <h1> {initialValues.email}</h1>
  </div>
);
}

export default Login
