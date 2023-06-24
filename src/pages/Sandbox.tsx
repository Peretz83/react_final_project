import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../services/apiServices'
import { User } from '../interfaces/UserType'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import FormLayout from '../components/FormLayout'

type Props = {}

const Sandbox = (props: Props) => {
const [users, setUsers]=useState<Array<User>>([])

  useEffect(()=>{
getUsers().then((json)=>{
setUsers(json)
})
  }, [])

  async function handleDelete(id: string){
    if(window.confirm("Are you sure you want to delete?")){
      await deleteUser(id)

      const updated = [...users].filter((user)=> user._id !== id)
      setUsers(updated)
      toast.success("User successfully deleted.")
    }

  }

  return (
    <>
  
    <div className="min-vw-100 min-vh-100 p-4 signupWrap">
       <Title mainText='Admin'/>
    <table className='table table-hover w-100'>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Admin</th>
          <th>Firstname</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Business</th>
          {/* <th>Blocked</th> */}
          <th>Actions</th>
        </tr>
      </thead>
<tbody>
  {users.map(user=>(
<tr>
    <td>{user._id}</td>
    <td>{JSON.stringify(user.admin)}</td>
    <td>{user.firstName}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{JSON.stringify(user.business)}</td>
    {/* <td>{user.blocked}</td> */}
    <td> <Link to={`/edituser/${user._id}`}>
    <button className="btn bt-light">
   <i className="bi bi-pen"/>
   </button>
   </Link>
   {!user.admin && (
 <button onClick={()=>handleDelete(user._id as string)} className="btn bt-light">
   <i className="bi bi-trash2"/>
   </button>
   )}
   
   </td>
  </tr>

  ))}
  
</tbody>
    </table>
    </div>
   
    </>
  )
}

export default Sandbox