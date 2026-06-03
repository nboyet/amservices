import type { FC } from "react";

interface ContactSectionProps {
  phone: string;
  email: string;
  availability: string;
  invitationText: string;
}

const ContactSection: FC<ContactSectionProps> = ({
  phone,
  email,
  availability,
  invitationText,
}) => {
  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Me contacter
        </h2>

        <p className="mb-6 text-base leading-relaxed text-gray-600">
          {invitationText}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full bg-mint px-6 py-2 text-base font-semibold text-gray-900 hover:bg-mint/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          >
            📞 {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full border-2 border-sky bg-white px-6 py-2 text-base font-semibold text-gray-900 hover:bg-sky/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            ✉️ {email}
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">{availability}</p>
      </div>
    </section>
  );
};

export default ContactSection;
