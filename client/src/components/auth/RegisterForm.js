import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
import styled from "styled-components";

const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      <form onSubmit={register}>
        <AlertMessage info={alert} />
        <div className="txt_field">
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
          />
          <span></span>
          <label htmlFor="">Username</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={onChangeRegisterForm}
          />
          <span></span>
          <label htmlFor="">Password</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
          />
          <span></span>
          <label htmlFor="">Confirm Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Register" />
        <div className="signup_link">
          Already an account?
          <Link to="/login">
            <button className="ml-2"> login</button>
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  position: relative;

  h2 {
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid silver;
    font-size: 1.5rem;
    font-weight: bold;
  }
  form {
    padding: 0 40px;
    box-sizing: border-box;
  }
  .txt_field {
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
    input {
      width: 100%;
      padding: 0 5px;
      height: 40px;
      font-size: 16px;
      border: none;
      background: none;
      outline: none;
    }
    label {
      position: absolute;
      top: 50%;
      left: 5px;
      color: #adadad;
      transform: translateY(-50%);
      font-size: 16px;
      pointer-events: none;
      transition: 0.5s;
    }
  }
  .txt_field span::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: 0.5s;
  }
  .txt_field input:focus ~ label,
  .txt_field input:valid ~ label {
    top: -5px;
    color: #2691d9;
  }
  .txt_field input:focus ~ span::before,
  .txt_field input:valid ~ span::before {
    width: 100%;
  }
  .pass {
    margin: -5px 0 50px 5px;
    color: #a6a6a6;
    cursor: pointer;
    position: absolute;
    right: 40px;
  }
  .pass:hover {
    text-decoration: underline;
    color: #2691d9;
  }
  input[type="submit"] {
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin-top: 35px;
  }
  input[type="submit"]:hover {
    border-color: #2691d9;
    transition: 0.5s;
  }
  .signup_link {
    margin: 30px 0;
    text-align: center;
    font-size: 16px;
    color: #666666;
  }
  .signup_link a {
    color: #2691d9;
    text-decoration: none;
  }
  .signup_link a:hover {
    text-decoration: underline;
  }
`;
