import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import {
  RecruitIconInterview,
  RecruitIconLicense,
  RecruitIconNrs,
  RecruitIconSeminar,
  RecruitIconSystem,
  ServiceOfferingCard,
  WebIconVideo,
} from "@/components/ServiceOfferingCard";
import { SectionDecor } from "@/components/visuals/SectionDecor";

export const metadata: Metadata = {
  title: "新卒採用コンサルティング",
};

const offerings = [
  {
    number: "01",
    title: "NRS（ネクストリクルーティング・システム）",
    description:
      "中小企業に“自立した採用活動”を。人と企業の未来を考えるNRSを確立し、採用ツールに依存しない仕組みづくりを支援します。",
    tags: ["NRS", "採用設計", "自立採用"],
    accent: "from-orange-600 to-rose-400",
    bg: "from-rose-50/80 to-white",
    icon: <RecruitIconNrs />,
    visual: "recruitment" as const,
  },
  {
    number: "02",
    title: "採用仕組みづくり",
    description:
      "採用ツールに依存せず、採用活動を成功させるためのノウハウをもとに、仕組みづくりから研修などすべての作業をサポートします。",
    tags: ["仕組み化", "研修", "運用設計"],
    accent: "from-orange-500 to-amber-400",
    bg: "from-orange-50/80 to-white",
    icon: <RecruitIconSystem />,
    visual: "process" as const,
  },
  {
    number: "03",
    title: "就活セミナー",
    description:
      "企業採用担当・就職活動学生向けの就活セミナーを開催。採用と就活の双方に価値を提供します。",
    tags: ["セミナー", "学生", "採用担当"],
    accent: "from-rose-500 to-orange-400",
    bg: "from-rose-50/60 to-white",
    icon: <RecruitIconSeminar />,
    visual: "network" as const,
  },
  {
    number: "04",
    title: "求人動画制作",
    description:
      "採用ブランディングのための求人動画制作。会社の魅力を視覚的に伝え、応募者の理解を深めます。",
    tags: ["動画", "ブランディング", "SNS"],
    accent: "from-orange-500 to-amber-500",
    bg: "from-amber-50/70 to-white",
    icon: <WebIconVideo />,
    visual: "video" as const,
  },
  {
    number: "05",
    title: "選考・面接支援",
    description:
      "選考フロー設計、面接官トレーニング。質の高い採用を仕組み化し、内定承諾率の向上を支援します。",
    tags: ["選考設計", "面接官研修", "承諾率"],
    accent: "from-orange-600 to-amber-400",
    bg: "from-orange-50/70 to-white",
    icon: <RecruitIconInterview />,
    visual: "contact" as const,
  },
  {
    number: "06",
    title: "有料職業紹介",
    description: "人材紹介にも対応しています。",
    tags: ["人材紹介", "許可番号", "マッチング"],
    accent: "from-amber-500 to-orange-400",
    bg: "from-amber-50/60 to-white",
    icon: <RecruitIconLicense />,
    visual: "works" as const,
  },
];

export default function RecruitmentServicePage() {
  return (
    <>
      <PageHero
        label="Recruit Consulting"
        title="新卒採用コンサルティング"
        description="「採用」を考える、強くする。採用ツールに依存せず、採用活動を成功させるノウハウで、仕組みづくりから研修まですべてをサポートします。"
        visual="recruitment"
      />

      <section className="relative overflow-hidden bg-white pb-32">
        <SectionDecor variant="violet" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative mb-12 overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50/40 p-8 shadow-sm md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-rose-300/20 blur-3xl" />
              <div className="relative max-w-3xl">
                <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-[11px] font-semibold tracking-wider text-rose-700 uppercase">
                  Core System
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900 md:text-2xl">
                  ネクストリクルーティング・システム（NRS）
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  弊社では業務効率化システムの考案/開発、採用活動の支援を行っています。
                  中小企業に“自立した採用活動”を。人と企業の未来を考えるNRSを確立し、
                  より一層人々を繋げることができる会社を目指しております。
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-200 hover:bg-orange-50"
                >
                  NRS導入の相談
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Support Menu
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                採用支援で提供できること
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                NRSを軸に、採用の仕組みづくりからコンテンツ制作、選考支援まで幅広くサポートします。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <ServiceOfferingCard {...item} seriesLabel="Support" layout="vertical" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
