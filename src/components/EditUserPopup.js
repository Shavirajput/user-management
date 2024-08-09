import React, { useState } from 'react';
import './EditUserPopup.css';

const EditUserPopup = ({ user, index, onSave, onCancel }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedUser, index);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Edit User</h3>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={updatedUser.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={updatedUser.email} onChange={handleChange} />
          <label>Phone:</label>
          <input type="text" name="phone" value={updatedUser.phone} onChange={handleChange} />
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserPopup;
