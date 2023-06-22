import { verifyAdmin } from "../auth/TokenManager"


const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '60px', position: 'fixed', bottom: 0, left:0, right:0, boxShadow: '1px 1px 10px 2px lightgray', backgroundColor: 'white'}}>
      
      <div className=" d-flex justify-content-between align-items-center w-50">
      <div>
        <i className="bi bi-info-circle"/>
      </div>
      
      <div>
        <i className="bi bi-briefcase"/>
      </div>
      {verifyAdmin() && (
<>
<div>
       <i className="bi bi-shield-check"/>
      </div>
</>

      )}
      
      </div>
      <div style={{fontSize: '.8rem'}}>	&#169; Developed by Peretz</div>
    </div>
  )
}

export default Footer