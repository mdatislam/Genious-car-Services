import React, { useRef,useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./../Login/SocialLogin/SocialLogin";

const Register = () => {
  const [agree,setAgree]= useState(false)
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName:name });
          alert('Updated profile');
          console.log('Updated profile')
      
    // console.log(name,email,password)
  };
  const navigateToLogin = () => {
    navigate("/Login");
  };
  let errorElement;
    if (error) {
      errorElement= <p className="text-danger mt-2 fs-4">Error: {error?.message}  </p>
      }
  if (user) {
    navigate("/Home");
    console.log(user)
  }
  return (
    <div className="container  w-50 mx-auto border mt-2 p-3">
      <h3 className="text-center text-info mt-1">Please Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        {/* <label className={ agree?" ps-2 text-success":" ps-2 text-danger"} htmlFor="terms">Accept Terms & condition </label> */}
        <label className={`ps-2 ${agree ? 'text-info': 'text-danger'}`} htmlFor="terms">Accept Terms & condition </label>

        <Button disabled={!agree} className="w-75 d-block mx-auto " variant="info" type="submit">
          Register
        </Button>
      </Form>
      {errorElement}
      <p>
        Already have an account?{" "}
        <Link
          to="/Login"
          onClick={navigateToLogin}
          className="text-decoration-none"
        >
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
