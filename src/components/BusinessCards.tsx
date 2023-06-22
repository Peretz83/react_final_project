import { Link } from "react-router-dom";


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
  cardId
}:CardProps) => {


function callNumber(number: any) {
    window.location.href = `tel:${phone}`;
  }
  
  return (
 <>
<Link to={`/details/${cardId}`}>
<div key={_id} className="card m-4 bg-light" style={{width: '18rem',}}>
 
  <img style={{height: '200px'}} src={imageUrl} className="card-img-top min-h-25" alt={imageAlt}/>

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{subtitle}</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item bg-light">{description}</li>
    <li className="list-group-item bg-light">Phone: {phone}</li>
    
  </ul>
  <div className="card-body d-flex justify-content-around align-items-end">
    <button onClick={callNumber} className="btn bt-light">
    <i className="bi bi-telephone"/>
    </button>
    <button className="btn bt-light">
   <i className="bi bi-heart-fill"/>
   </button>
  </div>
</div>
</Link>




 
 </>
  )
}

export default BusinessCards