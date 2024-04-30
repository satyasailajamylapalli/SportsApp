import React,{ useEffect, useState } from 'react'
import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import '../css/Home.css';
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';


const UserRegister = () => {
  const initialValue = { name: "" , email: "", password: "", confirmpassword: ""};
  const [formValues, setFormValues] =useState(initialValue);
  const [formErrors, setFormErrors] =useState({});
  const [inputData, setInputData] =useState({});
  const [isSubmit, setIsSubmit] =useState(false);
  const [ username, setUserName] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
const navigate = useNavigate();
const postData = (event) => {
    inputData.name = formValues.name;
    inputData.username = formValues.email;
    inputData.password = formValues.password;
    event.preventDefault();
    console.log(inputData);
    fetch('http://localhost:3099/api/v1/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    }).then((response) => {
        console.log(response);
        if(response.status === 200){
       // navigate('/');
        }
      }).catch(error => console.error('Error creating user:', error));
    
  };
    const handleOnClick = () =>  {
        //e.preventDefault();
      if(Object.keys(formErrors).length === 0 && isSubmit){
        setUserName(formValues.name);
        setEmail(formValues.email);
        setPassword(formValues.password);
        //postData(e);
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
    postData(e);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
    }
  },[formErrors])

  const validate=(values) =>{
    const errors = {};

    if(!values.name){
        errors.name = "Username is required!";
      }

    if(!values.email){
      errors.email = "Username is required!";
    }

    if(!values.password){
      errors.password = "Password is required!";
    }

    if(!values.confirmpassword){
        errors.confirmpassword = "Confirm Password is required!";
      }

      if(values.confirmpassword != values.password){
        errors.confirmpassword = "Passwords didn't match";
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
        <label className='label-name'>Name:</label><span  className='required-msg'>*</span>
     <input
       id="name"
       name="name"
       type="text"
       className='form-control'
       value={formValues.name}
       onChange={handleChange}
     /> 
     </div><p> {formErrors.name}</p><br />
     <div>
        <label className='label-name'>Email:</label><span  className='required-msg'>*</span>
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

      <div>
        <label htmlFor="password" className='label-name'>Confirm Password:</label><span  className='required-msg'>*</span>
     <input
       id="confirmpassword"
       name="confirmpassword"
       type="password"
       className='form-control'
       value ={formValues.confirmpassword}
       onChange={handleChange}
     />
     
      </div><p> {formErrors.confirmpassword}</p><br />
      
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

export default UserRegister
