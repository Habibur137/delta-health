import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { serviceName, serviceImage, serviceDescription, id } = service;
  return (
    <div className="bg-white hover:shadow-2xl pb-6">
      <div className="overflow-hidden ">
        <img
          className="transition-all duration-500 ease-in hover:scale-125"
          src={serviceImage}
          alt=""
        />
      </div>
      <div className="mt-6 text-center p-6">
        <p className="text-2xl text-[#484848]">{serviceName}</p>
        <p className="text-[#919191] text-[16px] mt-2">
          {serviceDescription}{" "}
          <span
            className="text-pink-200 cursor-pointer"
            onClick={() => navigate(`/detail/${id}`)}
          >
            Read More...
          </span>
        </p>
      </div>
    </div>
  );
};

export default Service;
