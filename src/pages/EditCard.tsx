import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card } from "../interfaces/CardType";
import { editCards, getCardById } from "../services/apiServices";
import FormLayout from "../components/FormLayout";


const EditCard = () => {
  const { id } = useParams();
   const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    if (!id) return;

    getCardById(id as string).then((json) => {

      setTitle(json.title as string);
      setSubtitle(json.subtitle as string);
      setDescription(json.description as string);
      setPhone(json.phone as string);
      setEmail(json.email as string);
      setWeb(json.web as string);
      setImageUrl(json.imageUrl as string);
      setImageAlt(json.imageAlt as string);
      setState(json.state as string);
      setCountry(json.country as string);
      setCity(json.city as string);
      setStreet(json.street as string);
      setHouseNumber(json.houseNumber as string);
      setZip(json.zip as string);
    });
  }, [id]);

   function validate(): boolean {
    if (!title || title.length < 2) {
      toast.error("Title is required.");
      return false;
    }
    if (!subtitle || subtitle.length < 2) {
      toast.error("Subtitle is required.");
      return false;
    }
    if (!description || description.length < 5) {
      toast.error("Description is required.");
      return false;
    }
    if (!phone || phone.length < 10) {
      toast.error("A valid phone number is required.");
      return false;
    }

    // eslint-disable-next-line no-useless-escape
    const emailRe =/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
    if (!emailRe.test(email)) {
      toast.error("A valid email address is required.");
      return false;
    }
    if (!country) {
      toast.error("Please select a country.");
      return false;
    }
    if (!city) {
      toast.error("Please select a city.");
      return false;
    }
    if (!street) {
      toast.error("Street name is required.");
      return false;
    }
    if (!houseNumber) {
      toast.error("House number is required.");
      return false;
    }

    return true;
  }

  function handleSubmit() {
//  if (!validate()) {
//       return;
//     }
    if (!id) return;

    editCards(id, {
      title : title,
      subtitle,
      description,
      phone,
      email,
      web,
      imageUrl,
      imageAlt,
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
    }).then((json) => {
      navigate("/mycards");
      toast.success('Card edited successfully.')
    });
  }


    
  return (
    <>
      <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="Edit a card" />
        <FormLayout>
        
            <div className="d-flex ">

              <div className="form-floating mb-3 me-3 w-50">
                <input
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
                  type="text"
                  className="form-control bg-light rounded-1"
              
                  placeholder="Title"
                />
                <label htmlFor="floatingInput">
                  <span className="input-text text-dark">Title:</span>
                </label>
              </div>

              <div className="form-floating mb-3 w-50">
                <input
                value={subtitle}
               onChange={(e)=> setSubtitle(e.target.value)}
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
               value={description}
               onChange={(e)=> setDescription(e.target.value)}
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
                 value={phone}
               onChange={(e)=> setPhone(e.target.value)}
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
                 value={email}
               onChange={(e)=> setEmail(e.target.value)}
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
                 value={web}
               onChange={(e)=> setWeb(e.target.value)}
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
                value={imageUrl}
               onChange={(e)=> setImageUrl(e.target.value)}
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
               onChange={(e)=> setImageAlt(e.target.value)}
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
               onChange={(e)=> setState(e.target.value)}
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
               onChange={(e)=> setCountry(e.target.value)}
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
               onChange={(e)=> setCity(e.target.value)}
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
               onChange={(e)=> setStreet(e.target.value)}
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
               onChange={(e)=> setHouseNumber(e.target.value)}
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
               onChange={(e)=> setZip(e.target.value)}
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
              onClick={handleSubmit}
              className="w-50 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              Edit
            </button>
            <Link to='/mycards'>
            <button
              
              className="w-50 mb-2 btn btn-lg btn-primary border rounded-3 modal-submit-btn"
              type="submit"
            >
              Cancel
            </button>
            </Link>
       
        </FormLayout>
      </div>
    </>
  );
};

export default EditCard;
