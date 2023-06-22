
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { getUser } from "../auth/TokenManager";
import { useEffect, useState } from "react";
import { getCardsById } from "../services/apiServices";
import { Card } from "../interfaces/CardType";
import BusinessCards from "../components/BusinessCards";



const MyCard = () => {
  const [myCards, setMyCards]=useState<Array<Card>>([])

 const user = getUser()
console.log(user);

useEffect(()=>{
getCardsById(user._id as string).then((json)=>{
setMyCards(json)
})
}, [])

  return (
    <>
      <Title mainText="MY CARDS" />
<div className="w-100 d-flex justify-content-end pe-5">
 
  <Link to='/addCard'>
      <button style={{width: '50px', height: '50px'}} className="btn btn-primary"><i style={{width: '100%'}}  className="bi bi-plus-circle w-100"/></button>
      </Link>
     </div>

     <div>
       {myCards.map((cards)=>(
<BusinessCards key={cards._id} {...cards} cardId={cards._id}/>

  ))}
     </div>
      
    </>
  );
};

export default MyCard;