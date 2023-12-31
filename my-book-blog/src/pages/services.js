import React from "react";
import servicesData  from "../assets/Data/serviceData";
import ServiceCard from "../components/common/service-card";
import '../assets/scss/_service.scss';


export default function Services() {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-row">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}