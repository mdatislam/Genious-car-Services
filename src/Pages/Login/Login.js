import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    
    const navigate= useNavigate()

    const handleSubmit= event => {
        event.preventDefault()
        const email= event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
    }
    const navigateToRegister=()=>{
            navigate('/Register')
    }
    if(user){
      navigate('/Home')
    }
    
  return (
    <div className="container  w-50 mx-auto ">
      <h3 className="text-center text-info mt-5">Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" name="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
         Log-In
        </Button>
      </Form>
      <p>New to car Services ? <Link to='/Register' onClick={navigateToRegister} className="text-decoration-none">  Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
    
  );
};

export default Login;
