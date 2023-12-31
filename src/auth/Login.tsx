import React, { FormEvent, useContext } from "react";
import { useInputText } from "../hooks/useInputText";
import FormLayout from "../components/FormLayout";
import Title from "../components/Title";
import { toast } from "react-toastify";
import { login } from "../services/apiServices";
import {  setToken, setUser } from "./TokenManager";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

type Props = {};

const Login = (props: Props) => {
  const emailProp = useInputText("");
  const passwordProp = useInputText("");
  const navigate = useNavigate();
  const context = useContext(AppContext)

  function validate(): boolean {
    // eslint-disable-next-line
    const emailRe =/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
    if (!emailRe.test(emailProp.value)) {
      toast.error("A valid email address is required.");
      return false;
    }

    if (!passwordProp.value || passwordProp.value.length < 8) {
      toast.error("Password must contain at least 8 characters.");
      return false;
    }

    return true;
  }

  function handleClick(e: FormEvent) {
    e.preventDefault()
    if (!validate()) {
      return;
    }

    login({
      email: emailProp.value,
      password: passwordProp.value,
    }).then((user) => {
     
if(user.err){
  toast.error(user.err)
}
      if (user.error) {
        // toast.error(user.error);
      } else {
        setUser(user)
         setToken(user.token);
        //  setAdmin(JSON.stringify(user.admin))
        toast.success(`Welcome ${user.firstName}`);
        navigate("/")
        if (context) {
          context.setUserName(user.firstName);
          context.setAdmin(user.admin)
          context.setUser(user._id)
          context.setBusiness(user.business)
        }
      }
    });
  }

  return (
    <>
      <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="LOGIN" />
  <form onSubmit={handleClick}>
        <FormLayout>
        
          <div className="d-flex flex-column align-items-center">
            <div className="form-floating mb-3 w-50 ">
              <input
                {...emailProp}
                type="email"
                className="form-control bg-light rounded-1"
                placeholder="email@email.com"
              />
              <label htmlFor="floatingInput">
                <span className="input-text text-dark">Email:</span>
              </label>
            </div>

            <div className="form-floating mb-3  w-50">
              <input
                {...passwordProp}
                type="password"
                className="form-control bg-light rounded-1"
                placeholder="Password"
              />
              <label htmlFor="floatingInput">
                <span className="input-text text-dark">Password:</span>
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="w-30 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
              
            >
              LOGIN
            </button>
          </div>
          
          
            <div className="text-center">Don't have an account? <Link to='/signup'>Sign-up here</Link></div>
        </FormLayout>
         </form>
      </div>
    </>
  );
};

export default Login;
