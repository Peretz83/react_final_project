import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Link, useParams } from 'react-router-dom'
import { getCardById } from '../services/apiServices'
import { Card } from '../interfaces/CardType'
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { thepamsecretyek } from "../auth/TokenManager";

const containerStyle = {
  width: "575px",
  height: "575px",
};

const CardDetails = () => {
  const {id} = useParams()
  const [card, setCard]=useState<Card>()
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: thepamsecretyek,
  });

  useEffect(()=>{
if (!id) return
getCardById(id).then((json)=>{
setCard(json)


      let newone = JSON.stringify(json.lat);
      let mynew = JSON.parse(newone);

      let newone2 = JSON.stringify(json.lng);
      let mynew2 = JSON.parse(newone2);

      setLat(mynew);
      setLng(mynew2);
})
  }, [])
  return (
<>

<div className="min-vw-100 min-vh-100 py-4 signupWrap">
<Title mainText='Business details'/>

<div style={{marginBottom: 200,margin:'50px auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='w-50'>
  <div style={{marginBottom:'50px'}}>
    <img style={{width: '100%'}} src={card?.imageUrl} alt={card?.imageAlt} />
  </div>
<div style={{marginBottom: 100}}>
   <div>
    <label >Title</label>
    <h3>{card?.title}</h3>
  </div>
  <hr />
   <div>
    <label >Description</label>
    <h3>{card?.description}</h3>
  </div>
  <hr />
  <div>
    <label >Address</label>
    <h3>{card?.street}<br/>{card?.city}, {card?.zip}</h3>
  </div>
  <hr />
  <div>
    <label >Phone</label>
    <h3>{card?.phone}</h3>
  </div>
  <hr />
  <div>
    <label >Website</label>
    <h3>{card?.web}</h3>
  </div>
 

</div>
   {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{ lat: lat, lng: lng }}
                  zoom={10}
                >
                  <>
                    <MarkerF position={{ lat: lat, lng: lng }} />
                  </>
                </GoogleMap>
              ) : (
                <></>
              )}
</div>

<div style={{position: 'fixed', right: '5%', bottom: '20%'}}>
  <Link to='/'>
  <button className='btn btn-primary'>Back to home</button>
  </Link>
</div>
</div>




</>
  )
}

export default CardDetails