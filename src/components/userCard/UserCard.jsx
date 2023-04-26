import React from "react";
import "./style.css";
const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <div className="imgContainer">
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div className="info">
        <h1>
          {user.first_name} {user.last_name}
        </h1>
        <p>Contact: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
