"use client";

import { FadeIn } from "./FadeIn";
import { WorkThumbnail } from "./WorkThumbnail";

type WorkItem = {
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  result: string;
  year: string;
  url?: string;
  thumbnail?: string;
  featured?: boolean;
};

export function WorkCard({ work, index = 0 }: { work: WorkItem; index?: number }) {
  const content = (
    <div className={work.thumbnail ? "grid gap-6 lg:grid-cols-2 lg:items-center" : ""}>
      {work.thumbnail && (
        <WorkThumbnail
          src={work.thumbnail}
          alt={`${work.title}のサイトデザイン`}
          url={work.url}
          priority={work.featured}
        />
      )}

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            {work.category}
          </span>
          {work.featured && (
            <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white">
              導入事例
            </span>
          )}
          <span className="text-xs text-slate-400">{work.year}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">{work.title}</h3>

        {work.subtitle && (
          <p className="mt-1 text-sm font-medium text-slate-500">{work.subtitle}</p>
        )}

        {work.description && (
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{work.description}</p>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-amber-600">{work.result}</p>
          {work.url && (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-600">
              サイトを見る
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const className = `group block rounded-2xl border bg-white p-6 shadow-sm transition sm:p-8 ${
    work.featured
      ? "border-orange-200 bg-gradient-to-br from-orange-50/50 to-white hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10"
      : "border-slate-200 hover:border-orange-200 hover:shadow-md"
  }`;

  return (
    <FadeIn delay={index * 0.06}>
      {work.url ? (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </FadeIn>
  );
}

export function WorkCardCompact({ work, index = 0 }: { work: WorkItem; index?: number }) {
  const inner = (
    <>
      {work.thumbnail && (
        <div className="-mx-8 -mt-8 mb-6">
          <WorkThumbnail
            src={work.thumbnail}
            alt={`${work.title}のサイトデザイン`}
            url={work.url}
            priority={work.featured}
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          {work.category}
        </span>
        <span className="text-xs text-slate-400">{work.year}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-orange-600">
        {work.title}
      </h3>
      <p className="mt-3 text-sm font-medium text-amber-600">{work.result}</p>
    </>
  );

  return (
    <FadeIn delay={index * 0.08}>
      {work.url ? (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition ${
            work.featured
              ? "border-orange-200 hover:border-orange-300 hover:shadow-md"
              : "border-slate-200 hover:border-orange-200 hover:shadow-md"
          }`}
        >
          {inner}
        </a>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {inner}
        </div>
      )}
    </FadeIn>
  );
}
