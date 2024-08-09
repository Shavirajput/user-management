import React, { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    setUser({ name: '', email: '', phone: '' });
  };

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
        <label>Phone:</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default AddUser;
