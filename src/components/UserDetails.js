import React from 'react'
import fakeData from '../api/fakedata'
import { addUser,deleteUser } from '../store/slices/Userslice';
import { useDispatch,useSelector } from 'react-redux';
import DeleteUser from './DeleteUser'

function UserDetails() {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.users);

    const add=(name)=>{
        dispatch(addUser(name))
      };
      

      const remove=(index)=>{
        dispatch(deleteUser(index))
      };
      

  return (
    <div className='text-center'style={{width:"50vw",margin:"auto",padding:"auto"}}>
      <h3>User List</h3>
      <button onClick={()=>add(fakeData())}>Add user</button>
      
      <div className='details' >

        <ul style={{listStyle:"none",textAlign:"left"}}>
        {
          data.map((item,index)=>{
            return <li key={index} style={{marginTop:"1.5vh",color:"blue"}}>
              {item}
              <button style={{float:"right",backgroundColor:"red",color:"white",borderRadius:"5px"}} onClick={()=>remove(index)}>
                Delete
              </button>
            </li>
          })
        }
        </ul>


      </div>

        <DeleteUser/>

    </div>
  )
}

export default UserDetails
