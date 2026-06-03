import type { FC } from "react";
import Image from "next/image";
import type { ServiceItem } from "../_types";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8">
        <Image
          src="/si_logo.webp"
          alt="Logo"
          width={80}
          height={80}
          className="h-16 w-16 rounded-lg object-contain sm:h-20 sm:w-20"
        />
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Prestations
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
