import React, { useRef } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const emailRef=useRef()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateToRegister = () => {
    navigate("/Register");
  };
  let errorElement;
    if (error || error1) {
      errorElement= <p className="text-danger mt-2 fs-4">Error: {error?.message} {error1?.message}  </p>
      }
      const resetPassword=async()=>{
        const email = emailRef.current.value;
       await sendPasswordResetEmail(email);
        alert('Sent email');
        console.log(email)
      }
      if(loading){
       return  <Loading></Loading>
      }
      // else{ Toast("please provide Email")}
  if (user) {
    navigate(from,{replace:true});
  }

  return (
    <div className="container  w-50 mx-auto border mt-3">
      <h3 className="text-center text-info mt-2">Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log-In
        </Button>
      </Form>
      {errorElement}
      <p>
        New to car Services ?{" "}
        <Link
          to="/Register"
          onClick={navigateToRegister}
          className="text-decoration-none"
        >
          {" "}
          Register
        </Link>
      </p>
      <p>Forgot Password?
        <button onClick={resetPassword} className="text-decoration-none btn btn-link">Reset Password</button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
