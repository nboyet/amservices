import type { FC } from "react";
import type { AudienceProfile } from "../_types";

interface AudienceSectionProps {
  profiles: AudienceProfile[];
}

const AudienceSection: FC<AudienceSectionProps> = ({ profiles }) => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
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
      </div>
    </section>
  );
};

export default AudienceSection;
