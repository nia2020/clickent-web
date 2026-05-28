import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import {
  WebIconCode,
  WebIconGlobe,
  WebIconUsers,
  WebIconVideo,
  ServiceOfferingCard,
} from "@/components/ServiceOfferingCard";
import { SectionDecor } from "@/components/visuals/SectionDecor";

export const metadata: Metadata = {
  title: "WEB制作・IT関連事業",
};

const offerings = [
  {
    number: "01",
    title: "コーポレートサイト制作",
    description:
      "あらゆる業種・職種に合わせて、企業様独自のコーポレートサイトを制作。企業の魅力を正しく伝えるWebの顔をつくります。",
    tags: ["コーポレート", "ブランディング", "CMS"],
    accent: "from-orange-500 to-amber-400",
    bg: "from-orange-50/90 to-white",
    icon: <WebIconGlobe />,
    visual: "browser" as const,
  },
  {
    number: "02",
    title: "採用サイト・求人ページ",
    description:
      "新卒・中途採用に特化したリクルートページ。採用コンサルティングと連携し、母集団形成まで一貫支援します。",
    tags: ["採用サイト", "リクルート", "NRS連携"],
    accent: "from-orange-600 to-rose-400",
    bg: "from-rose-50/70 to-white",
    icon: <WebIconUsers />,
    visual: "recruitment" as const,
  },
  {
    number: "03",
    title: "オリジナルシステム開発",
    description:
      "業務効率化システムの考案・開発。企業様独自のオリジナルシステムを、設計から開発・運用まで一貫提供します。",
    tags: ["システム開発", "業務効率化", "運用支援"],
    accent: "from-amber-500 to-orange-400",
    bg: "from-amber-50/80 to-white",
    icon: <WebIconCode />,
    visual: "dashboard" as const,
  },
  {
    number: "04",
    title: "求人動画制作",
    description:
      "採用力強化のための求人動画制作。視覚的に会社の魅力を伝え、応募者の理解を深めます。",
    tags: ["動画制作", "採用ブランディング", "SNS"],
    accent: "from-orange-500 to-amber-500",
    bg: "from-orange-50/60 to-white",
    icon: <WebIconVideo />,
    visual: "video" as const,
  },
];

export default function WebServicePage() {
  return (
    <>
      <PageHero
        label="IT-Related Business"
        title="WEB制作・IT関連事業"
        description="あらゆる業種・職種に合わせて、企業様独自のオリジナルシステムの開発やコーポレートサイトの制作を行っています。業務効率化システムの考案・開発も対応しています。"
        visual="browser"
      />

      <section className="relative overflow-hidden bg-white pb-32">
        <SectionDecor variant="cyan" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Offerings
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                WEB制作で提供できること
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                サイト制作からシステム開発、採用コンテンツまで。目的に合わせて最適な形で支援します。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <ServiceOfferingCard {...item} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50/50 p-8 shadow-sm md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold tracking-wider text-orange-700 uppercase">
                  Collaboration
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900 md:text-2xl">
                  採用コンサルとの連携
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                  WEB制作単体だけでなく、採用サイト + 新卒採用コンサル（NRS）のセット支援も可能です。
                  Web上の見せ方と採用戦略を一体で設計することで、効果的な採用活動を実現します。
                </p>
                <Link
                  href="/services/recruitment"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
                >
                  新卒採用コンサルはこちら
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
