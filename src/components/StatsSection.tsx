import { stats } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { SceneVisual } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-orange-50/50 py-20">
      <SectionDecor variant="blue" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <FadeIn className="hidden lg:col-span-2 lg:block">
            <SceneVisual variant="dashboard" size="md" />
          </FadeIn>
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 md:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <p className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
