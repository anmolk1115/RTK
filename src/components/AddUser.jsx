import React from 'react';
import fakeUserData from '../api';
import { useDispatch } from 'react-redux';
import { addUserReducer } from '../store/slices/UserSlice';

const AddUser = () => {
  const dispatch = useDispatch();
  function addUser(payload) {
    console.log('add user called', payload);
    dispatch(addUserReducer(payload));
  };
  return (
    <div>
      <button onClick={() => addUser(fakeUserData())}>Add User</button>
    </div>
  )
}

export default AddUser