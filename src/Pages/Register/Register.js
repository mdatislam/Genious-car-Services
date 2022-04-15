import React, { useRef } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const emailRef= useRef('');
    const passwordRef= useRef('')
    const navigate= useNavigate()

    const handleSubmit= event => {
        event.preventDefault()
        const email= emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password)
    }
    const navigateToLogin=()=>{
            navigate('/Login')
    }
    return (
        <div className="container  w-50 mx-auto ">
      <h3 className="text-center text-info mt-5">Please Register</h3>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
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