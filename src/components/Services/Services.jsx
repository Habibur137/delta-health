import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";
import offerImage from "../../images/dantist.jpg";
import useOffers from "../../hooks/useOffers";

const Services = () => {
  const [offers, setOffers] = useOffers();
  return (
    <div className="services-container px-20 mt-8">
      <div className="offer-part">
        <div>
          <div className="offer-descriotion md:w-3/5 mb-2 mt-2">
            <h1 className="text-3xl text-gray-500">What do we offer?</h1>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
          </div>
          <div className="md:flex gap-4">
            <div className="md:w-3/5 md:grid grid-cols-2 gap-4 h-[350px] mt-2">
              {offers.map((offer) => (
                <Offer offer={offer} key={offer.id}></Offer>
              ))}
            </div>
            <div className="md:w-2/5">
              <img
                className="md:h-[450px] md:relative md:bottom-24"
                src={offerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* offer part end  */}
      {/* services part start  */}
    </div>
  );
};

export default Services;
