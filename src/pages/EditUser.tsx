import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Title from '../components/Title';
import FormLayout from '../components/FormLayout';
import { editCards, editUser, getUserById } from '../services/apiServices';
import { toast } from 'react-toastify';

type Props = {}

const EditUser = (props: Props) => {
   const navigate = useNavigate();
   const {id} = useParams()
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zip, setZip] = useState("");

  useEffect(()=>{
if(!id) return
getUserById(id).then((json)=>{

 setFirstName(json[0].firstName as string);
      setMiddleName(json[0].middleName as string);
      setLastName(json[0].lastName as string);
      // setEmail((json[0].email as string))
      // setPassword((json[0].password as string))
      setPhone(json[0].phone as string);
      setImageUrl(json[0].imageUrl as string);
      setImageAlt(json[0].imageAlt as string);
      setState(json[0].state as string);
      setCountry(json[0].country as string);
      setCity(json[0].city as string);
      setStreet(json[0].street as string);
      setHouseNumber(json[0].houseNumber as string);
      setZip(json[0].zip as string);
})
  },[id] )

   function handleSubmit( ) {
//  if (!validate()) {
//       return;
//     }
    if (!id) return;

    editUser(id, {
      firstName,
      middleName,
      lastName,
      phone,
      imageUrl,
      imageAlt,
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
    }).then((json) => {
      navigate("/sandbox");
      toast.success('User edited successfully.')
    });
  }


  return (
    <>
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="Edit user" />
        <FormLayout>
        
            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                  // {...firstNameProp}
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
                 value={middleName}
                onChange={(e)=>setMiddleName(e.target.value)}
                  // {...middleNameProp}
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
                 value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                  // {...lastNameProp}
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
                 value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                  // {...phoneProp}
                  type="tel"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="Phone number"
                />
                <label htmlFor="floatingPassword">
                  <span className="input-text text-dark">Phone:</span>
                </label>
              </div>
            </div>
            {/* <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                 value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  // {...emailProp}
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
                 value={password}
                onChange={(e)=>setPassword(e.target.value)}
                  // {...passwordProp}
                  type="password"
                  className="form-control bg-light rounded-1"
                
                  placeholder="Password"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Password:</span>
                </label>
              </div>
            </div> */}

            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                 value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
                  // {...imageUrlProp}
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
                 value={imageAlt}
                onChange={(e)=>setImageAlt(e.target.value)}
                  // {...imageAltProp}
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
                 value={state}
                onChange={(e)=>setState(e.target.value)}
                  // {...stateProp}
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
                  value={country}
                onChange={(e)=>setCountry(e.target.value)}
                  // {...countryProp}
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
                 value={city}
                onChange={(e)=>setCity(e.target.value)}
                  // {...cityProp}
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
                 value={street}
                onChange={(e)=>setStreet(e.target.value)}
                  // {...streetProp}
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
                 value={houseNumber}
                onChange={(e)=>setHouseNumber(e.target.value)}
                  // {...houseNumberProp}
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
                 value={zip}
                onChange={(e)=>setZip(e.target.value)}
                  // {...zipProp}
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
                // checked={business}
                // onChange={() => setBusiness(!business)}
                className="form-check-input rounded-1"
               
              />
              <label className="form-check-label">
                Sign up as a bussiness:
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-100 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              Edit
            </button>
        
        
        </FormLayout>
      </div>
    </>
  )
}

export default EditUser