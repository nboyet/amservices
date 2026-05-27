import type { FC } from "react";
import type { AudienceProfile } from "../_types";

interface AudienceSectionProps {
  profiles: AudienceProfile[];
  fallbackInvitation: string;
}

const AudienceSection: FC<AudienceSectionProps> = ({
  profiles,
  fallbackInvitation,
}) => {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
          Pour qui ?
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {profile.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-sky/30 bg-sky/10 px-6 py-4 text-base text-gray-700">
          {fallbackInvitation}
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
