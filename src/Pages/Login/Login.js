import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef= useRef('');
    const passwordRef= useRef('')
    const navigate= useNavigate()

    const handleSubmit= event => {
        event.preventDefault()
        const email= emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password)
    }
    const navigateToRegister=()=>{
            navigate('/Register')
    }
  return (
    <div className="container  w-50 mx-auto ">
      <h3 className="text-center text-info mt-5">Please Login</h3>
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
          Submit
        </Button>
      </Form>
      <p>New to car Services ? <Link to='/Register' onClick={navigateToRegister} className="text-decoration-none">  Register</Link></p>
    </div>
  );
};

export default Login;
