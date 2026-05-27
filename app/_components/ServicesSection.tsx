import type { FC } from "react";
import type { ServiceItem } from "../_types";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
        Nos prestations
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
