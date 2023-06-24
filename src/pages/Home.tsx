import { useContext, useEffect, useState } from "react";
import BusinessCards from "../components/BusinessCards";
import Title from "../components/Title";
import { Card } from "../interfaces/CardType";
import { getCards } from "../services/apiServices";
import { SearchContext } from '../hooks/SearContext'

const Home = () => {
  const [cards, setCards] = useState<Array<Card>>([]);
  const [filteredData, setFilteredData] = useState<Array<Card>>([]);
   const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    getCards().then((json) => {
      setCards(json);
    setFilteredData(json);
    });
  }, []);

  useEffect(() => {
    const filtered = cards.filter(
      (item) =>
        item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchValue, cards]);

  return (
    <div className="min-vw-100 min-vh-100 py-4 signupWrap">
      <Title mainText="Home Page" />

      <div className="d-flex justify-content-center flex-wrap">
        {
          cards.length === 0 && <div className=" w-100 text-center">No businesses to display........</div>
        }
        {filteredData.map((card) => (
          <BusinessCards key={card._id} {...card} cardId={card._id} />

        ))}

      </div>
    </div>
  );
};

export default Home;
