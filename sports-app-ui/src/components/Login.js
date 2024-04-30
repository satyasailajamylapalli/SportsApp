import React,{ useEffect, useState } from 'react'
import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import '../css/Home.css';
import {useNavigate,Link} from 'react-router-dom';
import axios from "axios";


const Login = () => {
  const initialValue = { email: "", password: ""};
  const [formValues, setFormValues] =useState(initialValue);
  const [formErrors, setFormErrors] =useState({});
  const [isSubmit, setIsSubmit] =useState(false);
    const navigate = useNavigate();
    const handleOnClick = () =>  {
     
      if(Object.keys(formErrors).length === 0 && isSubmit){
       const login= checkLogin(formValues.email, formValues.password);
       if(login){
        navigate('/usersearch', {state: formValues.email});
       }
       console.log(formValues);
       console.log("username or password is incorrect");
      }
    };
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
    checkLogin(formValues.email, formValues.password);
       
    }
  },[formErrors])

  const checkLogin=(username,password) =>{
    console.log("calling login api");
   /* axios.get('http://localhost:3099/api/v1/login/'+username+'/'+password)
            .then((getData) => {
              console.log(getData);
             return getData;
            })*/
    fetch('http://localhost:3099/api/v1/login/'+username+'/'+password, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        console.log(response);
        if(response.status === 200){
        navigate('/usersearch', {state: username});
        }else if(response.status === 400){
          <p> Username or password is Incorrect </p>
        }else if(response.status){
        navigate('/register');
        }
      }).catch(error => console.error('Error while login:', error));
  }
  const validate=(values) =>{
    const errors = {};
    if(!values.email){
      errors.email = "Username is required!";
    }

    if(!values.password){
      errors.password = "Password is required!";
    }
    return errors;
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
 <form onSubmit={handleSubmit}>
        <div className='offset-lg-3 col-lg-4'>
    <div  className='container'>
        <div className='card'>
            <div className='card-header'>
            <div className='card-heading'><h4>User Login</h4></div>

            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-group'>
  
     <div>
        <label className='label-name'>User Name:</label><span  className='required-msg'>*</span>
     <input
       id="email"
       name="email"
       type="email"
       className='form-control'
       value={formValues.email}
       onChange={handleChange}
     /> 
    
     </div> <p> {formErrors.email}</p><br />
      <div>
        <label htmlFor="password" className='label-name'>Password:</label><span  className='required-msg'>*</span>
     <input
       id="password"
       name="password"
       type="password"
       className='form-control'
       value ={formValues.password}
       onChange={handleChange}
     />
     
      </div><p> {formErrors.password}</p><br />
      
      </div></div></div><br/>
         <div className='card-footer'>
        <button className="secondary-button" onClick={handleOnClick} >
            Submit {" "}
          </button>
          </div> 
          </div></div>
    </div></div></form>
  
  <a href="/"> <button className="secondary-button">
            Back <FiArrowLeft />{" "}
          </button></a>
  </div>
);
}

export default Login
