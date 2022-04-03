import React, { useContext } from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";
import { MyContext } from "../../App";

const Services = () => {
  //   const [service] = useContext(MyContext);
  //   console.log(service);
  const [services] = useServices();
  //   console.log(services);
  return (
    <div className="bg-[#f6f6f6] mt-12">
      <h1 className="text-2xl text-center text-[#44B1BA] pt-4 m mb-2">
        Let us brighten your smile!
      </h1>
      <h1 className="text-4xl text-center text-[#484848]">
        Explore Dental Care Services
      </h1>
      <hr className="border border-[#44B1BA] w-24 mt-4 mx-auto " />
      <div className="md:grid grid-cols-3 md:p-20 gap-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
