
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { getUser } from "../auth/TokenManager";
import { createContext, useContext, useEffect, useState } from "react";
import { deleteCard, getCardsById } from "../services/apiServices";
import { Card } from "../interfaces/CardType";
import MyBusinessCards from "../components/MyBusinessCards";
import { toast } from "react-toastify";
import { SearchContext } from "../hooks/SearContext";

export interface CardContentType {
  onDelete: Function;
}

export const CardContext = createContext<CardContentType | null>(null);

const MyCard = () => {
  const [myCards, setMyCards]=useState<Array<Card>>([])
    const [filteredData, setFilteredData] = useState<Array<Card>>([]);
   const { searchValue } = useContext(SearchContext);

 const user = getUser()

useEffect(()=>{
  
getCardsById(user._id).then((json)=>{
  
setMyCards(json)
})
}, [user._id])

  useEffect(() => {
    const filtered = myCards.filter(
      (item) =>
        item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchValue, myCards]);

async function onDelete(_id: string) {
    await deleteCard(_id);
    const updated = [...myCards].filter((card) => card._id !== _id);
    setMyCards(updated);

    toast.success("Card has been deleted.");
  }

  return (
    <>
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
      <Title mainText="MY CARDS" />
<div className="w-100 d-flex justify-content-end pe-5">
 
  <Link to='/addCard'>
      <button style={{width: '50px', height: '50px'}} className="btn btn-primary"><i style={{width: '100%'}}  className="bi bi-plus-circle w-100"/></button>
      </Link>
     </div>

     <div className="d-flex justify-content-center flex-wrap">
      {myCards.length === 0 && (
        <div>No cards to display......</div>
      )}
      <CardContext.Provider value={{ onDelete }}>
       {myCards.map((cards)=>(
<MyBusinessCards key={cards._id} {...cards} cardId={cards._id}/>

  ))}
  </CardContext.Provider>
     </div>
      </div>
    </>
  );
};

export default MyCard;