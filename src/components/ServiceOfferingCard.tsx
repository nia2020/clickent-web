"use client";

import type { ReactNode } from "react";
import { SceneVisual, type SceneVariant } from "./visuals/SceneVisual";

type ServiceOfferingCardProps = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  bg: string;
  icon: ReactNode;
  visual: SceneVariant;
  seriesLabel?: string;
  layout?: "horizontal" | "vertical";
};

export function ServiceOfferingCard({
  number,
  title,
  description,
  tags,
  accent,
  bg,
  icon,
  visual,
  seriesLabel = "Service",
  layout = "horizontal",
}: ServiceOfferingCardProps) {
  const isVertical = layout === "vertical";

  const content = (
    <div className="relative z-10 min-w-0 flex-1">
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-orange-500/20 transition duration-300 group-hover:scale-105`}
      >
        {icon}
      </div>

      <p className="mt-6 text-[11px] font-bold tracking-[0.2em] text-orange-500 uppercase">
        {seriesLabel} {number}
      </p>
      <h3 className={`mt-2 font-bold text-slate-900 ${isVertical ? "text-lg" : "text-xl"}`}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );

  const illustration = (
    <div className={`relative z-10 shrink-0 ${isVertical ? "w-full" : "w-full md:w-[44%] lg:w-[40%]"}`}>
      <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/40 p-1 shadow-inner backdrop-blur-sm transition duration-300 group-hover:border-orange-100 group-hover:bg-white/60">
        <SceneVisual variant={visual} size="xs" showBadges={false} className="mx-0 max-w-none" />
      </div>
    </div>
  );

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br ${bg} p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 md:p-7`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-60 transition group-hover:opacity-100`}
      />
      <div
        className="pointer-events-none absolute -left-2 -top-6 select-none text-7xl font-black text-orange-500/[0.07] transition duration-300 group-hover:text-orange-500/[0.12] md:text-8xl"
        aria-hidden
      >
        {number}
      </div>

      <div
        className={`relative flex gap-5 ${isVertical ? "h-full flex-col" : "flex-col md:flex-row md:items-center lg:gap-8"}`}
      >
        {content}
        {illustration}
      </div>
    </div>
  );
}

export function WebIconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function WebIconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M16 8.5c1.4 0 2.5 1.1 2.5 2.5M19 19c0-2-1.2-3.7-3-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WebIconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WebIconVideo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function RecruitIconNrs() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M12 4l8 4.5v7L12 20l-8-4.5v-7L12 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 11v9M8 9l8 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RecruitIconSystem() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RecruitIconSeminar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M5 8h14v8H5zM9 8V5h6v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RecruitIconInterview() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

export function RecruitIconLicense() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M7 4h10v16l-5-2.5L7 20V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 8h4M10 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BackofficeIconSystem() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BackofficeIconOffice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M5 20V6a2 2 0 012-2h10a2 2 0 012 2v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3 20h18M9 10h2M9 14h2M13 10h2M13 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BackofficeIconRecruitOps() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 16l2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BackofficeIconMaintenance() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
      <path
        d="M14.7 6.3a4 4 0 105.657 5.657l-6.01 6.01a2 2 0 01-2.829 0l-.586-.586a2 2 0 010-2.829l6.01-6.01Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 17l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** @deprecated Use ServiceOfferingCard */
export const WebOfferingCard = ServiceOfferingCard;
