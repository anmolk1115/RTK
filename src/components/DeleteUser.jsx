import React from 'react'

const DeleteUser = () => {
  function deleteUser() {
    console.log('deleteUser called');
  };
  return (
    <div>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}

export default DeleteUser