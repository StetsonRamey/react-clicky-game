import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div onClick={ () => props.sortCharacters(props.id) } className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
