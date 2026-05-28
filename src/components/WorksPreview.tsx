import Link from "next/link";
import { works } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { WorkCard } from "./WorkCard";
import { SceneVisual } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

export function WorksPreview() {
  const featured = works.filter((w) => w.featured);

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <SectionDecor variant="cyan" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end lg:flex-col">
            <FadeIn>
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Works
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">制作・運用実績</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/works"
                className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
              >
                すべて見る →
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="hidden md:block">
            <SceneVisual variant="works" size="sm" className="max-w-sm lg:ml-auto" />
          </FadeIn>
        </div>

        {featured.length > 0 && (
          <div className="mt-12 grid gap-6">
            {featured.map((work, i) => (
              <WorkCard key={work.title} work={work} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
