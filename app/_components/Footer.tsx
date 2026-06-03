import type { FC } from "react";
import type { FooterData } from "../_types";

interface FooterProps {
  data: FooterData;
}

const Footer: FC<FooterProps> = ({ data }) => {
  // Limit zones to 10 entries as per requirement 8.2

  return (
    <footer className="bg-gray-900 px-4 py-10 text-gray-200 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Provider name */}
          <div>
            <p className="text-lg font-semibold text-white">{data.name}</p>
          </div>

          {/* Contact links */}
          <div className="flex flex-row justify-between">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
