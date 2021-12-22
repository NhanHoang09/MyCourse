import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Redirect to="/dashboard" />;
  else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );

  return (
    <div class="2xl:container h-screen m-auto landing">
      <div hidden class="fixed inset-0 w-7/12 lg:block">
        <span class="absolute left-6 bottom-6 text-sm">
          Video by MART PRODUCTION from
          <a href="https://www.pexels.com/" target="blank" title="Pexels">
            Pexels
          </a>
        </span>
      </div>
      <div
        hidden
        role="hidden"
        class="
          fixed
          inset-0
          w-6/12
          ml-auto
          bg-white bg-opacity-70
          backdrop-blur-xl
          lg:block
        "
      ></div>
      {body}
    </div>
    // <div className="landing">
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1>MyCourse</h1>
    //       <h4>Keep track of what you are learning</h4>
    //       {body}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Auth;
