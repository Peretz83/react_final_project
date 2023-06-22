
import { Link } from "react-router-dom";
import Title from "../components/Title";



const MyCard = () => {
  


  return (
    <>
      <Title mainText="MY CARDS" />
<div className="w-100 d-flex justify-content-end pe-5">
  <Link to='/addCard'>
      <button style={{width: '50px', height: '50px'}} className="btn btn-primary"><i style={{width: '100%'}}  className="bi bi-plus-circle w-100"/></button>
      </Link>
     </div>
      
    </>
  );
};

export default MyCard;