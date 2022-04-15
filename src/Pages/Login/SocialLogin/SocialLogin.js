import React from "react";
import google from "../../../images/gogle.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import auth from './../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
      errorElement=
          <div>
            <p className="text-danger">Error: {error?.message}  {error1?.message}</p>
          </div>
      }
      if(user|| user1){
          navigate('/Home')
      }
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-info w-50 "></div>
        <p className="mt-3 px-2">OR</p>
        <div style={{ height: "1px" }} className="bg-dark w-50 "></div>
      </div>
      {errorElement}
      <button onClick={()=>{signInWithGoogle()}} className="btn btn-info w-75 mb-3 d-block mx-auto">
        <img style={{ width: "30px" }} src={google} alt="" />
        <span className="px-2">Google LogIn</span>
      </button>

      <button className="btn btn-info w-75 mb-3 d-block mx-auto">
        <img style={{ width: "30px" }} src={facebook} alt="" />
        <span className="px-2">Facebook LogIn</span>
      </button>

      <button 
      onClick={() => signInWithGithub()}
      className="btn btn-info w-75 d-block mx-auto">
        <img style={{ width: "50px" }} src={github} alt="" />
        <span className="px-2">Github LogIn</span>
      </button>
    </div>
  );
};

export default SocialLogin;
