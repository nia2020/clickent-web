import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionDecor } from "@/components/visuals/SectionDecor";
import { newsItems } from "@/lib/constants";

type NewsDetailPageProps = {
  params: Promise<{ id: string }>;
};

const categoryStyles = {
  お知らせ: "border-orange-200 bg-orange-50 text-orange-700",
  WEB制作: "border-blue-200 bg-blue-50 text-blue-700",
  採用: "border-rose-200 bg-rose-50 text-rose-700",
  イベント: "border-amber-200 bg-amber-50 text-amber-700",
} as const;

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = newsItems.find((entry) => entry.id === id);

  if (!item) {
    return { title: "お知らせ" };
  }

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const item = newsItems.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 to-slate-50 pt-32 pb-16">
        <SectionDecor variant="blue" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/news"
              className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              ← お知らせ一覧
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <time dateTime={item.dateIso} className="text-sm tabular-nums text-slate-500">
                {item.date}
              </time>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${categoryStyles[item.category]}`}
              >
                {item.category}
              </span>
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {item.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <div className="space-y-6 text-base leading-[1.9] text-slate-600">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
