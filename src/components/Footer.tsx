import { useContext } from "react";
import { verifyAdmin, verifyToken } from "../auth/TokenManager";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const Footer = () => {
  const context = useContext(AppContext);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "60px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "1px 1px 10px 2px lightgray",
        backgroundColor: "white",
        zIndex: 10,
      }}
    >
      <div className=" d-flex justify-content-between align-items-center w-50">
        <Link to='/about'>
        <div>
          <i className="bi bi-info-circle text-primary" />
        </div>
        </Link>
        {verifyToken() && (
          <Link to='/favorites'>
          <div>
            <i className="bi bi-heart text-primary" />
          </div>
          </Link>
        )}

        {context?.business && (
           <Link to='/mycards'>
          <div>
            <i className="bi bi-briefcase text-primary" />
          </div>
          </Link>
        )}

        {context?.admin && (
          <Link to='/sandbox'>
          <div>
            <i className="bi bi-shield-check text-primary" />
          </div>
          </Link>
        )}
      </div>
      <div style={{ fontSize: ".8rem" }}> &#169; Developed by Peretz</div>
    </div>
  );
};

export default Footer;
