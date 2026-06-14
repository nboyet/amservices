import type { FC } from "react";
import type { CancellationPolicy } from "../_types";

interface CancellationNoticeProps {
  policy: CancellationPolicy;
  /** "banner" = ambre proéminent (section tarifs), "inline" = sobre (section contact) */
  variant?: "banner" | "inline";
}

const CancellationNotice: FC<CancellationNoticeProps> = ({
  policy,
  variant = "inline",
}) => {
  if (variant === "banner") {
    return (
      <div
        role="note"
        aria-label="Politique d'annulation"
        className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5"
      >
        {/* Icon */}
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg"
          aria-hidden="true"
        >
          ⚠️
        </span>

        {/* Content */}
        <div>
          <p className="font-semibold text-amber-900">
            Annulation sous{" "}
            <span className="underline decoration-amber-400 decoration-2 underline-offset-2">
              {policy.noticePeriod}
            </span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-800">
            {policy.note}
          </p>
        </div>
      </div>
    );
  }

  // variant === "inline"
  return (
    <div
      role="note"
      aria-label="Politique d'annulation"
      className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-amber-50/60 px-4 py-3"
    >
      <span className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm9-1v5H7V7h2ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <p className="text-xs leading-relaxed text-amber-800">
        <strong className="font-semibold">Annulation :</strong> {policy.note}
      </p>
    </div>
  );
};

export default CancellationNotice;
