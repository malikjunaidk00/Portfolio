import { CheckCircle2, FlaskConical, Layers } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { thesis } from "../data/portfolio";

export default function Thesis() {
  return (
    <section id="thesis" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Thesis Showcase"
          title={thesis.title}
          description={`${thesis.description} It is one of the strongest portfolio pieces because it connects Python, domain-specific tooling, UI design, and data-quality logic.`}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-amberpro text-white">
                <FlaskConical size={24} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white">Spatial data refinement workflow</h3>
                <p className="mt-1 text-sm text-ink/60 dark:text-stone-300">Python, PyQGIS, and Qt Designer</p>
              </div>
            </div>

            <div className="mt-8 aspect-[16/10] rounded-lg border border-ink/10 bg-white p-5 dark:border-white/10 dark:bg-white/10">
              <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-4">
                <div className="space-y-3">
                  <div className="h-8 rounded-lg bg-tealpro/20" />
                  <div className="h-8 rounded-lg bg-amberpro/25" />
                  <div className="h-8 rounded-lg bg-coral/20" />
                  <div className="h-24 rounded-lg border border-dashed border-ink/20 dark:border-white/20" />
                </div>
                <div className="grid grid-cols-6 grid-rows-5 gap-2">
                  {Array.from({ length: 30 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index % 7 === 0
                          ? "rounded bg-coral/40"
                          : index % 5 === 0
                            ? "rounded bg-amberpro/40"
                            : "rounded bg-tealpro/20"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="panel p-6 sm:p-8" delay={0.06}>
            <div className="mb-6 flex items-center gap-3">
              <Layers className="text-tealpro dark:text-teal-300" size={24} />
              <h3 className="text-xl font-bold text-ink dark:text-white">Core features</h3>
            </div>
            <ul className="grid gap-3">
              {thesis.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-ink/75 dark:text-stone-200">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-tealpro dark:text-teal-300" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {thesis.tech.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
