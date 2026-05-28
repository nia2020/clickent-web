import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import {
  BackofficeIconMaintenance,
  BackofficeIconOffice,
  BackofficeIconRecruitOps,
  BackofficeIconSystem,
  ServiceOfferingCard,
} from "@/components/ServiceOfferingCard";
import { SectionDecor } from "@/components/visuals/SectionDecor";

export const metadata: Metadata = {
  title: "業務効率化・システム支援",
};

const offerings = [
  {
    number: "01",
    title: "業務効率化システムの考案・開発",
    description:
      "弊社の強みである業務効率化システムの考案・開発。あらゆる業種・職種に合わせたオリジナルシステムで、業務負担を軽減します。",
    tags: ["オリジナル開発", "業務分析", "設計"],
    accent: "from-amber-500 to-orange-400",
    bg: "from-amber-50/80 to-white",
    icon: <BackofficeIconSystem />,
    visual: "dashboard" as const,
  },
  {
    number: "02",
    title: "バックオフィス業務の効率化",
    description:
      "経理・労務・総務などバックオフィス業務の効率化を支援。煩雑な事務処理をシステム化し、本業への集中を可能にします。",
    tags: ["経理", "労務", "総務"],
    accent: "from-orange-500 to-amber-400",
    bg: "from-orange-50/80 to-white",
    icon: <BackofficeIconOffice />,
    visual: "dashboard" as const,
  },
  {
    number: "03",
    title: "採用関連事務の仕組み化",
    description:
      "エントリー管理、選考日程調整、内定者書類対応など。採用コンサル（NRS）と連携した事務支援も行います。",
    tags: ["エントリー管理", "NRS連携", "事務支援"],
    accent: "from-orange-600 to-rose-400",
    bg: "from-rose-50/60 to-white",
    icon: <BackofficeIconRecruitOps />,
    visual: "recruitment" as const,
  },
  {
    number: "04",
    title: "システム運用・保守",
    description:
      "開発後の運用・保守もサポート。継続的な改善を通じて、業務効率化の効果を最大化します。",
    tags: ["運用保守", "改善", "サポート"],
    accent: "from-amber-500 to-orange-500",
    bg: "from-amber-50/70 to-white",
    icon: <BackofficeIconMaintenance />,
    visual: "process" as const,
  },
];

export default function BackofficeServicePage() {
  return (
    <>
      <PageHero
        label="Business Efficiency"
        title="業務効率化・システム支援"
        description="業務効率化システムの考案・開発を通じて、バックオフィス業務の負担を軽減。本業に集中できる環境をつくります。"
        visual="dashboard"
      />

      <section className="relative overflow-hidden bg-white pb-32">
        <SectionDecor variant="emerald" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Solutions
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                業務効率化で提供できること
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                システム開発からバックオフィス支援、運用保守まで。内部業務を整え、本業に集中できる体制をつくります。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <ServiceOfferingCard {...item} seriesLabel="Solution" />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-8 shadow-sm md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold tracking-wider text-amber-800 uppercase">
                  One Stop
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900 md:text-2xl">
                  IT×採用のワンストップ支援
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                  WEB制作で会社の魅力を伝え、NRSで採用を強化し、業務効率化システムで内部を整える。
                  クリックエンターテイメントは、IT×採用の両面から成長を支援します。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/services/web"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    WEB制作
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/services/recruitment"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    新卒採用コンサル
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
