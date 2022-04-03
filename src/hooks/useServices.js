import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const useServices = () => {
  const [services, setServices] = useContext(MyContext);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;
