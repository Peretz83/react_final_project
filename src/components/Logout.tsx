import { useNavigate } from "react-router-dom";
import { removeToken } from "../auth/TokenManager";


function Logout() {
    const navigate = useNavigate();

    function handleClick() {
        removeToken();
        // localStorage.removeItem('admin');
        navigate('/login');
    }

    return (
        <button
        style={{width: '200px'}}
            className="btn btn-primary  border logoutbtn"
            onClick={handleClick}
        >
            Log Out
        </button>
    );
}

export default Logout;