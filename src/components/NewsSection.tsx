import Link from "next/link";
import { newsItems } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { NewsListItem } from "./NewsListItem";
import { SectionDecor } from "./visuals/SectionDecor";

const PREVIEW_COUNT = 3;

export function NewsSection() {
  const latest = newsItems.slice(0, PREVIEW_COUNT);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <SectionDecor variant="blue" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">News</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">お知らせ</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              最新のお知らせ・更新情報をご案内します。
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/news"
              className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              お知らせ一覧 →
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 shadow-sm md:px-8">
          {latest.map((item) => (
            <NewsListItem key={item.id} item={item} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
