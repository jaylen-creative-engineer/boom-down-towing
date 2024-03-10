import { ServiceItem } from "@/typings/ServiceItem";
import Image from "next/image";

export const Services = ({ services }: { services: ServiceItem[] }) => {
  return (
    <div className="component_container">
      <div className="header_section">
        <p className="header_tagline">Services</p>
        <h1 className="header_label">The Ways We Help</h1>
        <p className="services_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>
      <div className="services_container">
        {services.map((service, index) => {
          return (
            <div
              className="service_item"
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                justifyContent: "flex-start",
              }}
            >
              <Image
                key={index}
                src={service.image}
                alt={service.service_name}
                className="service_image"
              />
              <div className="description_container">
                <h1 className="service_label">{service.service_name}</h1>
                <p className="service_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
