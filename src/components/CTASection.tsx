import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SceneVisual } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      <SectionDecor variant="violet" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-8 py-16 shadow-sm md:px-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />
            <div className="pointer-events-none absolute -left-8 top-8 hidden w-48 opacity-60 lg:block">
              <SceneVisual variant="browser" size="sm" />
            </div>
            <div className="pointer-events-none absolute -right-4 bottom-4 hidden w-48 opacity-60 lg:block">
              <SceneVisual variant="contact" size="sm" />
            </div>
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
                まずは、お気軽に
                <br />
                ご相談ください
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-slate-600">
                WEB制作・新卒採用コンサル（NRS）・業務効率化に関するご相談は、お気軽にお問い合わせください。
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block rounded-full bg-orange-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
