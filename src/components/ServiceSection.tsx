import Link from "next/link";
import { services } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { SceneVisual, SceneVariant } from "./visuals/SceneVisual";
import { SectionDecor } from "./visuals/SectionDecor";

const serviceVisuals: Record<string, SceneVariant> = {
  web: "browser",
  recruitment: "recruitment",
  backoffice: "dashboard",
};

export function ServiceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <SectionDecor variant="cyan" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest text-orange-600 uppercase">
              Services
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-900 md:text-5xl">
              3つの事業で、
              <br />
              成長のすべてを支援
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="hidden md:block">
            <SceneVisual variant="network" size="sm" className="max-w-sm lg:ml-auto" />
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="overflow-hidden px-4 pt-4">
                  <SceneVisual
                    variant={serviceVisuals[service.id] ?? "browser"}
                    size="sm"
                    className="max-w-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8 pt-2">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 transition group-hover:opacity-100`}
                  />
                  <span className="text-5xl font-bold text-slate-100">{service.number}</span>
                  <p className="mt-4 text-xs tracking-widest text-slate-400 uppercase">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-orange-600 transition group-hover:gap-3">
                    詳しく見る
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
