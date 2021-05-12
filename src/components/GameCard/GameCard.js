import React from "react";
import FlipGameContainer from "../../containers/FlipGameContainer";
import cardList from "../../data/cardList.json";
const GameCard = () => {
  return (
    <div>
      <FlipGameContainer cards={cardList} />
    </div>
  );
};

export default GameCard;
