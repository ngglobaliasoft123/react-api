import React, { Component } from 'react';
import './app_login.css';
import {PostData} from '../services/PostData.js';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import img from './images/signin-image.jpg';

class Login extends Component {


    constructor() {
        super();        
        this.state = {           
            username :"",
            password :""
        };    
        this.formSubmit = this.formSubmit.bind(this)   
      }
    formSubmit(e) {        
        e.preventDefault();
        PostData('signup.php',this.state).then((result)=>{
            let  responseJson = result;
            console.log(responseJson);
        })
       
    }

    handlechange =(e) =>
    {
        this.setState({[e.target.name]:e.target.value})
       
    }

   
  render() {
    return (
        <section className="sign-in">
           
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">                 
                            <figure><img src={img} alt="sing up image" /></figure>                      
                            <Link className="signup-image-link" to="/home"><h4>Create</h4></Link>                            
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="login-form" onSubmit = {this.formSubmit}>
                                <div className="form-group">
                                    <label ><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="email" name="username" id="your_name" placeholder="Your Name" ref="username" onChange={this.handlechange}/>
                                </div>
                                <div className="form-group">
                                    <label ><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="your_pass" placeholder="Password" ref="password" onChange={this.handlechange}/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="/"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="/"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="/"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    );
  }
}

export default Login;
