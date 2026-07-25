import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { NewsListItem } from "@/components/NewsListItem";
import { newsItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お知らせ",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News"
        title="お知らせ"
        description="最新のお知らせ・更新情報をご案内します。"
        visual="browser"
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 shadow-sm md:px-8">
              {newsItems.map((item) => (
                <NewsListItem key={item.id} item={item} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
