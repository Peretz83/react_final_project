

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



  
  return (
 <>

<div key={_id} className="card m-4" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt={imageAlt}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{subtitle}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{description}</li>
    <li className="list-group-item">Phone: {phone}</li>
    
  </ul>
  <div className="card-body d-flex justify-content-around align-items-end">
    <i className="bi bi-telephone"/>
   <i className="bi bi-heart-fill"/>
  </div>
</div>





 
 </>
  )
}

export default BusinessCards