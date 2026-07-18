import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FooterData } from "../_types";

interface FooterProps {
  data: FooterData;
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-gray-900 px-4 py-10 text-gray-200 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex md:flex-row md:justify-between flex-col">
          {/* Provider name + legal link */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-row">
              <Image
                src="/si_logo.webp"
                alt="Logo"
                width={80}
                height={80}
                className="h-16 w-16 rounded-lg object-contain sm:h-20 sm:w-20"
              />

              {/* Contact links */}
              <div className="flex flex-col justify-center ml-8">
                <a
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                  className="inline-flex text-sm text-gray-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  📞 {data.phone}
                </a>

                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex text-sm text-gray-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ✉️ {data.email}
                </a>
              </div>
            </div>
            <p className="text-lg font-semibold text-white">{data.name}</p>
            <Link
              href={data.legalUrl}
              className="w-fit text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Mentions légales
            </Link>
          </div>

          {/* Contact links */}
          <div className="flex md:flex-col flex-row justify-between">
            <Image
              src="/urssaf.png"
              alt="URSSAF LOGO"
              width={80}
              height={80}
              className="h-16 w-16 rounded-lg object-contain sm:h-20 sm:w-20"
            />{" "}
            <Image
              src="/dgfp.svg"
              alt="DGFP Logo"
              width={80}
              height={80}
              className="h-16 w-16 rounded-lg object-contain sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
