import React from "react";
import FormLayout from "../components/FormLayout";
import Title from "../components/Title";
import "./signup.css";
type Props = {};

const Signup = (props: Props) => {
  return (
    <>
      <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="SIGN UP" />
        <FormLayout>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-1"
                id="floatingInput"
                placeholder="Your Name"
              />
              <label htmlFor="floatingInput">
                <span className="input-text">First name:</span>
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-1"
                id="floatingInput"
                placeholder="Your Name"
              />
              <label htmlFor="floatingInput">
                <span className="input-text">Last name:</span>
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-1"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                <span className="input-text">Email:</span>
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control rounded-1"
                id="floatingPassword"
                placeholder="Phone number..."
              />
              <label htmlFor="floatingPassword">
                <span className="input-text">Phone:</span>
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-1"
                id="floatingPassword"
                placeholder="Adress..."
              />
              <label htmlFor="floatingPassword">Adrress:</label>
            </div>

            <button
              className="w-100 mb-2 btn btn-lg rounded-3 modal-submit-btn"
              type="submit"
            >
              Add customer
            </button>
          </form>
        </FormLayout>
      </div>
    </>
  );
};

export default Signup;
