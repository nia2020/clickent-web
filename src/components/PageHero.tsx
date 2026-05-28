import { FadeIn } from "./FadeIn";
import { SceneVisual, SceneVariant } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  visual?: SceneVariant;
};

export function PageHero({ label, title, description, visual = "network" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 to-slate-50 pt-32 pb-20">
      <SectionDecor variant="blue" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
            {label}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="hidden lg:block">
          <SceneVisual variant={visual} size="md" />
        </FadeIn>
      </div>
    </section>
  );
}
