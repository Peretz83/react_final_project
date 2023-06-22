import { useEffect, useState } from "react";
import BusinessCards from "../components/BusinessCards";
import Title from "../components/Title";
import { Card } from "../interfaces/CardType";
import { getCards } from "../services/apiServices";

const Home = () => {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    getCards().then((json) => {
      setCards(json);
   
    });
  }, []);

  return (
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
      <Title mainText="Home Page" />

      <div className="d-flex justify-content-center flex-wrap">
        {
          cards.length === 0 && <div className=" w-100 text-center">No businesses to display........</div>
        }
        {cards.map((card) => (
          <BusinessCards key={card._id} {...card} cardId={card._id} />

        ))}

      </div>
    </div>
  );
};

export default Home;
