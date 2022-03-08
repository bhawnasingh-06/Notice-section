import React from "react";
interface Props {
  cardParagraph: string;
  cardHeading: string; // Can Be A Enum Of Fixed Colors
}

const Card: React.FC<Props> = ({ cardParagraph, cardHeading }) => {
  return (
    <div>
      <div className="card-components">
        <h3>{cardHeading}</h3>
        <p>{cardParagraph}</p>
      </div>
    </div>
  );
};

export default Card;
