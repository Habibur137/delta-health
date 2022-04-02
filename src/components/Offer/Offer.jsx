import React from "react";

const Offer = ({ offer }) => {
  const { offerName, offerDescription, offerNumber } = offer;
  return (
    <div className="bg-pink-400 text-white px-4 pt-4 rounded hover:shadow-xl">
      <p>
        <span className=" mr-4 font-bold text-2xl">{offerNumber}.</span>
        <span className="text-2xl">{offerName}</span>
      </p>
      <p className="ml-12 mt-2 text-xl">{offerDescription}</p>
    </div>
  );
};

export default Offer;
