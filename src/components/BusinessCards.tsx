import { Link } from "react-router-dom";
import { setFavorites } from "../services/apiServices";
import { useEffect, useState } from "react";
import { getUser } from "../auth/TokenManager";


export interface CardProps {
  _id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: string;
  imageUrl?: string;
  imageAlt?: string;
  state?: string;
  country?: string;
  city?: string;
  street?: string;
  houseNumber?: string;
  zip?: string;
  timestamps?: string;
  cardId?: string
  favorites?: [] | null
}



const BusinessCards = ({
  _id,
  title,
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
  timestamps,
  cardId,
  favorites
}:CardProps) => {
const [isRedHeart, setIsRedHeart] = useState(false);

function callNumber(number: any) {
    window.location.href = `tel:${phone}`;
  }

  async function handleSetFavs(id: string){
await setFavorites(id).then((json)=>{
})
  }

   const toggleRed = () => {
    setIsRedHeart(!isRedHeart);
  };

  useEffect(() => {
    const ifCardIsFavorite = (userId: string | null | undefined) => {
      favorites?.forEach((id) => {
        if (id === userId) {
          setIsRedHeart(true);
        }
      });
    };
    const userObject = getUser();
    if (userObject) {
      ifCardIsFavorite(userObject._id);
    }
  }, [favorites]);
  
  return (
 <>

<div key={_id} className="card m-4 bg-light" style={{width: '18rem',}}>
 <Link style={{textDecoration: 'none', color: 'black'}} to={`/details/${cardId}`}>
  <img style={{height: '200px'}} src={imageUrl? imageUrl : 'https://bcardextra.com/assets/images/products/45/bcardextra-digital-order-02.jpg'} className="card-img-top min-h-25" alt={imageAlt}/>

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{subtitle}</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item bg-light">{description}</li>
    <li className="list-group-item bg-light">Phone: {phone}</li>
    
  </ul>
  </Link>
  <div className="card-body d-flex justify-content-around align-items-end">
    <button onClick={callNumber} className="btn bt-light">
    <i style={{color: 'blue'}} className="bi bi-telephone"/>
    </button>
    <button onClick={()=>{
 handleSetFavs(cardId as string)
toggleRed()
}
    }
      className="btn bt-light">
   <i style={{color: isRedHeart ? "red": "blue"}} className="bi bi-heart-fill"/>
   </button>
   
  </div>
</div>





 
 </>
  )
}

export default BusinessCards