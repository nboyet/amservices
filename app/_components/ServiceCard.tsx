import type { ServiceItem } from "../_types";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div
        className="flex items-center justify-center bg-mint p-6 text-4xl"
        aria-hidden="true"
      >
        {service.icon}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>
      </div>
    </article>
  );
}
