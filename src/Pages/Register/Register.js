import React, { useRef } from 'react';
import { Button, Form,  } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
  const nameRef= useRef('');
    const emailRef= useRef('');
    const passwordRef= useRef('')
    const navigate= useNavigate();
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit= event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email= emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(name,email,password)
    }
    const navigateToLogin=()=>{
            navigate('/Login')
    }
    if(user){
      navigate('/Home')
    }
    return (
        <div className="container  w-50 mx-auto ">
      <h3 className="text-center text-info mt-5">Please Register</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control  ref={nameRef} type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>Already have an account? <Link to='/Login' onClick={navigateToLogin} className="text-decoration-none">Login</Link></p>
    </div>
    );
};

export default Register;