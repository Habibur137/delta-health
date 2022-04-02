import React from "react";

const Offer = ({ offer }) => {
  const { offerName, offerDescription } = offer;
  return (
    <div>
      <p>{offerName}</p>
      <p>{offerDescription}</p>
    </div>
  );
};

export default Offer;
