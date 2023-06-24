import React, { useContext } from 'react'
import { CardProps } from './BusinessCards'
import { Link } from 'react-router-dom'
import { getUser } from '../auth/TokenManager'
import { CardContext } from '../pages/MyCards'

interface Props extends CardProps {

}

const user = getUser()

const MyBusinessCards = ({ _id,
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
  cardId}: Props) => {
      const context = useContext(CardContext);

    function callNumber(number: any) {
    window.location.href = `tel:${phone}`;
  }

  function handleDelete(id: string){
    context?.onDelete(id)
  }
  

  return (
   <>

<div key={_id} className="card m-4 bg-light" style={{width: '18rem',}}>
 <Link to={`/details/${cardId}`}>
  <img style={{height: '200px'}} src={imageUrl} className="card-img-top min-h-25" alt={imageAlt}/>

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
    <i className="bi bi-telephone"/>
    </button>
    <button className="btn bt-light">
   <i className="bi bi-heart-fill"/>
   </button>
   <Link to={`/editcard/${cardId}`}>
    <button className="btn bt-light">
   <i className="bi bi-pen"/>
   </button>
   </Link>
    <button onClick={()=>handleDelete(cardId as string)} className="btn bt-light">
   <i className="bi bi-trash2"/>
   </button>
  </div>
</div>





 
 </>
  )
}

export default MyBusinessCards