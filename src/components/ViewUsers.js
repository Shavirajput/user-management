import React, { useState, useEffect } from 'react';
import EditUserPopup from './EditUserPopup';
import DeleteUserPopup from './DeleteUserPopup';
import './ViewUsers.css';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleEdit = (user, index) => {
    setEditUser({ user, index });
  };

  const handleDelete = (index) => {
    setDeleteUser(index);
  };

  const updateUser = (updatedUser, index) => {
    let updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditUser(null);
  };

  const deleteUserConfirmed = (index) => {
    let updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setDeleteUser(null);
  };

  return (
    <div className="view-users">
      <h2>View Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <button onClick={() => handleEdit(user, index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {editUser && (
        <EditUserPopup
          user={editUser.user}
          index={editUser.index}
          onSave={updateUser}
          onCancel={() => setEditUser(null)}
        />
      )}
      {deleteUser !== null && (
        <DeleteUserPopup
          index={deleteUser}
          onDelete={deleteUserConfirmed}
          onCancel={() => setDeleteUser(null)}
        />
      )}
    </div>
  );
};

export default ViewUsers;
