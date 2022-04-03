import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";

const ServiceDetail = () => {
  const [services] = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const findItem = services.find((service) => service.id == id);
  const { serviceName, serviceImage, serviceDescription } = findItem;

  return (
    <div>
      <div className="bg-[#44B1BA] h-20 flex items-center pl-28">
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-10 text-2xl text-[#44B1BA] bg-white font-bold rounded-t-2xl shadow-md "
        >
          Back
        </button>
        {/* service detail  */}
      </div>
      <div className="mx-auto w-96 mt-8">
        <div className="bg-white hover:shadow-2xl w-96">
          <div className="overflow-hidden">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
