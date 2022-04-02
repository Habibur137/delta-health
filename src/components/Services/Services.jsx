import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";

const Services = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("offer.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="services-container">
      <div className="offer-part">
        <div className="offer-descriotion">
          <h1>What do we offer?</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
        </div>
        <div>
          {offers.map((offer) => (
            <Offer offer={offer} key={offer.id}></Offer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
