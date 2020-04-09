import React from "react";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card">
      <div className="card-content">
        <img
          src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}
        />
        <p>{props.user.name}</p>
        <p>"{props.user.username}"</p>
      </div>
    </div>
  );
};
