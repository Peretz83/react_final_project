import FormLayout from "../components/FormLayout";
import Title from "../components/Title";
import "./signup.css";
import { useInputText } from "../hooks/useInputText";
import { FormEvent, useRef, useState } from "react";
import { signup } from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type Props = {};

const Signup = (props: Props) => {
  const navigate = useNavigate();
  const firstNameProp = useInputText("");
  const middleNameProp = useInputText("");
  const lastNameProp = useInputText("");
  const phoneProp = useInputText("");
  const emailProp = useInputText("");
  const passwordProp = useInputText("");
  const imageUrlProp = useInputText("");
  const imageAltProp = useInputText("");
  const stateProp = useInputText("");
  const countryProp = useInputText("");
  const cityProp = useInputText("");
  const streetProp = useInputText("");
  const houseNumberProp = useInputText("");
  const zipProp = useInputText("");
  const [business, setBusiness] = useState(false);

  

  function validate(): boolean {
    if (!firstNameProp.value || firstNameProp.value.length < 2) {
      toast.error("First name is required.");

      return false;
    }
    if (!lastNameProp.value || lastNameProp.value.length < 2) {
      toast.error("Last name is required.");
      return false;
    }
    if (!phoneProp.value || phoneProp.value.length < 8) {
      toast.error("A valid phone number is required.");
      return false;
    }

    const emailRe = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
    if (!emailRe.test(emailProp.value)) {
      toast.error("A valid email address is required.");
      return false;
    }

    if (!passwordProp.value || passwordProp.value.length < 8) {
      toast.error("Password must contain at least 8 characters.");
      return false;
    }
    if (!countryProp.value) {
      toast.error("Please select a country.");
      return false;
    }
    if (!cityProp.value) {
      toast.error("Please select a city.");
      return false;
    }
    if (!streetProp.value) {
      toast.error("Street name is required.");
      return false;
    }
    if (!houseNumberProp.value) {
      toast.error("House number is required.");
      return false;
    }

    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return;

    signup({
      firstName: firstNameProp.value,
      middleName: middleNameProp.value,
      lastName: lastNameProp.value,
      phone: phoneProp.value,
      email: emailProp.value,
      password: passwordProp.value,
      imageUrl: imageUrlProp.value,
      imageAlt: imageAltProp.value,
      state: stateProp.value,
      country: countryProp.value,
      city: cityProp.value,
      street: streetProp.value,
      houseNumber: houseNumberProp.value,
      zip: zipProp.value,
      business,
    }).then((newUser) => {
      console.log(newUser);
      if (newUser.error) {
        toast.error(newUser.error);
      } else {
        toast.success(`Thank you ${newUser.firstName} for registering!`);
        navigate("/login");
      }
    });
  }

  return (
    <>
      <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="SIGN UP" />
        <FormLayout>
          <form onSubmit={handleSubmit}>
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...firstNameProp}
                  type="text"
                  className="form-control bg-light rounded-1"
              
                  placeholder="First name"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">First name:</span>
                </label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input
                  {...middleNameProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="Middle name"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Middle name:</span>
                </label>
              </div>
            </div>

            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...lastNameProp}
                  type="text"
                  className="form-control bg-light rounded-1"
              
                  placeholder="Last name"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Last name:</span>
                </label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input
                  {...phoneProp}
                  type="tel"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="Phone number"
                />
                <label htmlFor="floatingPassword">
                  <span className="input-text text-dark">Phone:</span>
                </label>
              </div>
            </div>
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
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

            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...imageUrlProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="ImageUrl"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">ImageUrl:</span>
                </label>
              </div>

              <div className="form-floating mb-3  w-50">
                <input
                  {...imageAltProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="ImageAlt"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">ImageAlt:</span>
                </label>
              </div>
            </div>
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...stateProp}
                  type="text"
                  className="form-control bg-light rounded-1"
               
                  placeholder="State"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">State:</span>
                </label>
              </div>

              <div className="form-floating mb-3  w-50">
                <input
                  type="text"
                  {...countryProp}
                  className="form-control bg-light rounded-1"
               
                  placeholder="Country"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Country:</span>
                </label>
              </div>
            </div>
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...cityProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                
                  placeholder="City"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">City:</span>
                </label>
              </div>

              <div className="form-floating mb-3  w-50">
                <input
                  {...streetProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                
                  placeholder="Street"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Street:</span>
                </label>
              </div>
            </div>
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...houseNumberProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                
                  placeholder="House number"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">House number:</span>
                </label>
              </div>

              <div className="form-floating mb-3  w-50">
                <input
                  {...zipProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                
                  placeholder="Zip"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Zip:</span>
                </label>
              </div>
            </div>
            <div className=" mb-3 form-check">
              <input
                type="checkbox"
                checked={business}
                onChange={() => setBusiness(!business)}
                className="form-check-input rounded-1"
               
              />
              <label className="form-check-label">
                Sign up as a bussiness:
              </label>
            </div>

            <button
              
              className="w-100 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </FormLayout>
      </div>
    </>
  );
};

export default Signup;
