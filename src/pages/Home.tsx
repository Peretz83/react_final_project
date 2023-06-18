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

      <div className="d-flex">
        {cards.map((card) => (
          <BusinessCards key={card._id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
