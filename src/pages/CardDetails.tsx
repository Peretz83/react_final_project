import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Link, useParams } from 'react-router-dom'
import { getCardById } from '../services/apiServices'
import { Card } from '../interfaces/CardType'

type Props = {}

const CardDetails = (props: Props) => {
  const {id} = useParams()
  const [card, setCard]=useState<Card>()

  useEffect(()=>{
if (!id) return
getCardById(id).then((json)=>{
setCard(json)
})
  }, [])
  return (
<>
<div className="min-vw-100 min-vh-100 py-4 ">
<Title mainText='Business details' subText='About'/>

<div style={{marginBottom: 200}} className='w-50 m-auto'>
  <div>
    <img style={{width: '100%'}} src={card?.imageUrl} alt={card?.imageAlt} />
  </div>
<div style={{marginBottom: 200}}>
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