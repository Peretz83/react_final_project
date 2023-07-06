import React, { useEffect, useState } from 'react'
import { Card } from '../interfaces/CardType'
import { getFavorites } from '../services/apiServices'
import Title from '../components/Title'
import BusinessCards from '../components/BusinessCards'


const Favorites = () => {
const [favCards, setFavCards]=useState<Array<Card>>([])

  useEffect(()=>{
    getFavorites().then((json)=>{
      
setFavCards(json)
    })
  }, [])
  return (
   <>
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
        <Title mainText="Favs" />
        <div className='d-flex'>
           {
          favCards.length === 0 && <div className=" w-100 text-center">No favorites to display........</div>
        }
          {favCards.map((card)=>(
<BusinessCards key={card._id} {...card} cardId={card._id}/>

          ))}
        </div>
        </div>
   </>
  )
}

export default Favorites