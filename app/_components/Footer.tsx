import type { FC } from "react";
import type { FooterData } from "../_types";

interface FooterProps {
  data: FooterData;
}

const Footer: FC<FooterProps> = ({ data }) => {
  // Limit zones to 10 entries as per requirement 8.2
  const zones = data.zones.slice(0, 10);

  return (
    <footer className="bg-gray-900 px-4 py-10 text-gray-200 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Provider name */}
          <div>
            <p className="text-lg font-semibold text-white">{data.name}</p>
          </div>

          {/* Zone list */}
          {zones.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                Zone d&apos;intervention
              </p>
              <ul className="flex flex-wrap gap-x-2 gap-y-1">
                {zones.map((zone) => (
                  <li key={zone} className="text-sm text-gray-300">
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${data.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 text-sm text-gray-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              📞 {data.phone}
            </a>

            <a
              href={`mailto:${data.email}`}
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 text-sm text-gray-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ✉️ {data.email}
            </a>

            <a
              href={data.legalUrl}
              className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm text-gray-400 underline hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
