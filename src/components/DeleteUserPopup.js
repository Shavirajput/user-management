import React from 'react';
import './DeleteUserPopup.css';

const DeleteUserPopup = ({ index, onDelete, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Delete User</h3>
        <p>Are you sure you want to delete this user?</p>
        <button type="button" onClick={() => onDelete(index)}>Delete</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteUserPopup;
