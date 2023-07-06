import React, { FormEvent, useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import FormLayout from '../components/FormLayout'
import { useInputText } from '../hooks/useInputText'
import { toast } from 'react-toastify'
import { addCard } from '../services/apiServices'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { countryCoordinates } from '../interfaces/UserType'
import { getUser } from '../auth/TokenManager'

type Props = {}

const AddCard = (props: Props) => {
  const navigate = useNavigate()
   const titleProp = useInputText("");
  const subtitleProp = useInputText("");
  const descriptionProp = useInputText("");
  const phoneProp = useInputText("");
  const emailProp = useInputText("");
  const webProp = useInputText("");
  const imageUrlProp = useInputText("");
  const imageAltProp = useInputText("");
  const stateProp = useInputText("");
  // const countryProp = useInputText("");
   const [country, setCountry] = useState("");
  const cityProp = useInputText("");
  const streetProp = useInputText("");
  const houseNumberProp = useInputText("");
  const zipProp = useInputText("");
  const context = useContext(AppContext)
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const user = getUser()

//   useEffect(()=>{
// if(context){
//   context.setUser(context.user)
  
// }
// console.log(context?.user);

//   }, [])

  function validate(): boolean {
    if (!titleProp.value || titleProp.value.length < 2) {
      toast.error("Title is required.");
      return false;
    }
    if (!subtitleProp.value || subtitleProp.value.length < 2) {
      toast.error("Subtitle is required.");
      return false;
    }
    if (!descriptionProp.value) {
      toast.error("Description is required.");
      return false;
    }
    if (!phoneProp.value) {
      toast.error("A valid phone number is required.");
      return false;
    }

    // eslint-disable-next-line no-useless-escape
    const emailRe =/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
    if (!emailRe.test(emailProp.value)) {
      toast.error("A valid email address is required.");
      return false;
    }
    if (!country) {
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
  function handleSubmit(e: FormEvent){
e.preventDefault()
    if(!validate()) return

    addCard({
      title: titleProp.value,
      subtitle: subtitleProp.value,
      description: descriptionProp.value,
      phone: phoneProp.value,
      email: emailProp.value,
      web: webProp.value,
      imageUrl: imageUrlProp.value,
      imageAlt: imageAltProp.value,
      state: stateProp.value,
      // country: countryProp.value,
      country: country,
      city: cityProp.value,
      street: streetProp.value,
      houseNumber: houseNumberProp.value,
      zip: zipProp.value,
      userId: user._id,
      lat: lat,
      lng: lng
    }).then((user)=>{
      if(user.error){
        toast.error(user.error)
      }else{
toast.success('Card added successfully.')
  navigate('/mycards')
      }
    
    })

  }

    const handleChange = (event: any) => {
    setCountry(event.target.value);
    let selectedCountry = event.target.value;
    let result = countryCoordinates.filter(
      (item) => item.name === selectedCountry
    );

    setLat(result[0].coordinates.latitude);
    setLng(result[0].coordinates.longitude);
  };
  return (
     <>
      <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="Add a card" />
        <FormLayout>
          <form onSubmit={handleSubmit}>
            <div className="d-flex ">

              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...titleProp}
                  type="text"
                  className="form-control bg-light rounded-1"
              
                  placeholder="Title"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Title *</span>
                </label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input
                  {...subtitleProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                 
                  placeholder="Subtitle"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Subtitle:</span>
                </label>
              </div>
            </div>

            <div className="d-flex ">
              <div className="form-floating mb-3 me-3 w-50">
                <input
                  {...descriptionProp}
                  type="text"
                  className="form-control bg-light rounded-1"
              
                  placeholder="Description"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Description:</span>
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
                  {...webProp}
                  type="text"
                  className="form-control bg-light rounded-1"
                
                  placeholder="Website"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Website:</span>
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

<div style={{width: '49.5%'}} className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select Country</label>
    <select value={country}  onChange={handleChange} className="form-control" id="exampleFormControlSelect1">
      {countryCoordinates.map((place)=>(

  <option key={place.name}>{place.name}</option>
      ))}
    
     
    </select>
  </div>
              {/* <div className="form-floating mb-3  w-50">
                <input
                  type="text"
                  {...countryProp}
                  className="form-control bg-light rounded-1"
               
                  placeholder="Country"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Country:</span>
                </label>
              </div> */}
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

            <button
              
              className="w-50 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              Add card
            </button>
             <Link to='/mycards'>
            <button
              
              className="w-50 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              Cancel
            </button>
            </Link>
          </form>
        </FormLayout>
      </div>
    </>
  )
}

export default AddCard