"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VERSIONS = [
  { label: "Version A", sublabel: "Actuelle", href: "/version-a" },
  { label: "Version B", sublabel: "Cartes tarifaires", href: "/version-b" },
  { label: "Version C", sublabel: "Style flyer", href: "/version-c" },
];

export default function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[128px] left-0 right-0 z-30 flex justify-center">
      <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white/95 px-2 py-1.5 shadow-md backdrop-blur">
        {VERSIONS.map((v) => {
          const isActive = pathname === v.href;
          return (
            <Link
              key={v.href}
              href={v.href}
              className={`flex flex-col items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span>{v.label}</span>
              <span className={`text-[10px] font-normal ${isActive ? "text-white/80" : "text-gray-400"}`}>
                {v.sublabel}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
