import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { WorkCard } from "@/components/WorkCard";
import { works } from "@/lib/constants";

export const metadata: Metadata = {
  title: "制作・運用実績",
};

export default function WorksPage() {
  const featured = works.filter((w) => w.featured);
  const others = works.filter((w) => !w.featured);

  return (
    <>
      <PageHero
        label="Works"
        title="制作・運用実績"
        description="WEB制作の実績の一部となります。"
        visual="works"
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {featured.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-sm font-medium tracking-widest text-orange-600 uppercase">
                導入事例
              </h2>
              <div className="grid gap-6">
                {featured.map((work, i) => (
                  <WorkCard key={work.url ?? work.title} work={work} index={i} />
                ))}
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div>
              <h2 className="mb-6 text-sm font-medium tracking-widest text-slate-400 uppercase">
                その他の支援実績
              </h2>
              <div className="grid gap-6">
                {others.map((work, i) => (
                  <WorkCard
                    key={work.url ?? work.title}
                    work={work}
                    index={i + featured.length}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
