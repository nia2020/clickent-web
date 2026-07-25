import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionDecor } from "@/components/visuals/SectionDecor";
import {
  companyInfo,
  representativeGreeting,
  siteConfig,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "会社案内",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="会社案内"
        description="未来を明るく照らしていきたい。福岡を拠点に、IT×採用で人と企業の未来を支えます。"
        visual="browser"
      />

      <section className="relative overflow-hidden bg-white py-20">
        <SectionDecor variant="cyan" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Identity
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                コーポレート・アイデンティティ
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                “クリック”を行えば、新しいページ（その先）に遷移することから、クリックという言葉に未来という意味合いを重ねています。
                “エンターテイメント”という言葉は、楽しみ・明るいという意味合いを持っています。
              </p>
              <div className="mt-8 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50/50 p-6 shadow-sm">
                <p className="text-lg font-bold leading-relaxed text-slate-900">
                  未来を明るく照らしていきたい。
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  その由来から、クリックエンターテイメントと名付けました。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50/40 p-10 shadow-sm md:p-12">
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-300/15 blur-2xl" />
                <Image
                  src="/clickent-logo.png"
                  alt={siteConfig.name}
                  width={300}
                  height={129}
                  unoptimized
                  priority
                  className="relative mx-auto h-16 w-auto md:h-20 lg:h-24"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-20">
        <SectionDecor variant="violet" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
              Message
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">代表挨拶</h2>
            <p className="mt-2 text-sm text-slate-500">{siteConfig.representative}</p>
            <blockquote className="relative mt-8 rounded-3xl border border-orange-100 bg-white/90 p-8 shadow-sm md:p-10">
              <span
                className="absolute top-4 left-6 text-6xl leading-none text-orange-200"
                aria-hidden
              >
                “
              </span>
              <p className="relative whitespace-pre-line text-base leading-[1.9] text-slate-600">
                {representativeGreeting}
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
              Company Profile
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">会社概要</h2>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-10">
            <dl className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {companyInfo.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-2 px-6 py-5 sm:flex-row sm:gap-8 sm:px-8 ${
                    i !== companyInfo.length - 1 ? "border-b border-slate-100" : ""
                  } ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                >
                  <dt className="flex shrink-0 items-start gap-2 sm:w-40">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                  </dt>
                  <dd className="text-sm leading-relaxed text-slate-900 sm:flex-1">{item.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 pb-32 pt-20">
        <SectionDecor variant="blue" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Access
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">アクセス</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{siteConfig.address}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  TEL {siteConfig.phone}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  FAX {siteConfig.fax}
                </span>
                <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  {siteConfig.hours}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-500">カナエ福岡第2ビル 5Fにオフィスがあります。</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700"
              >
                お問い合わせ
                <span aria-hidden>→</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-orange-100/60 via-white to-amber-50 p-3 shadow-sm md:p-4">
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
                  <iframe
                    title={`${siteConfig.legalName} 地図`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&hl=ja&z=17&output=embed`}
                    className="aspect-[4/3] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center text-sm font-medium text-orange-600 transition hover:text-orange-700"
                >
                  Google Mapで開く →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
