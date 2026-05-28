import { processSteps } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { SceneVisual } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      <SectionDecor variant="violet" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">支援の流れ</h2>
            </FadeIn>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {processSteps.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.1}>
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="text-sm font-bold text-orange-600">{step.step}</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.2} className="sticky top-32 hidden lg:block">
            <SceneVisual variant="process" size="md" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
