import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = props => (
  <div className="cardList">
    {props.users.map(user => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);
