type ServiceItem = {
  image: string;
  service_name: string;
};

export const Services = ({ services }: { services: ServiceItem[] }) => {
  return (
    <div className="component_container">
      <div className="header_section">
        <p>Services</p>
        <h1>The Ways We Help</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>
      <div className="service_container">
        {services.map((service, index) => {
          return (
            <div className="service_item">
              <img
                key={index}
                src={service.image}
                alt={service.service_name}
                className="service_image"
              />
              <div className="description_container">
                <h1>{service.service_name}</h1>
                <p>
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
