import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllUser } from '../store/slices/Userslice';

function DeleteUser() {

  const dispatch=useDispatch();
  const removealluser=()=>{
    dispatch(deleteAllUser());

  };


  return (
    <div>
      <hr/>
      <button onClick={removealluser}>Delete all</button>
    </div>
  )
}

export default DeleteUser
