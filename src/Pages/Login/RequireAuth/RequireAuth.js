import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import auth from "./../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">Your Mail not varified yet</h3>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast(" Varification mail Sent");
          }}
        >
          Send varifyed email again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
