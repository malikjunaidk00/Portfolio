import { Clock } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { timeline } from "../data/portfolio";

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Timeline"
          title="A concise path from support operations to software engineering."
          description="This timeline connects customer-facing experience, academic work, graduation, and AI-powered product building."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative space-y-5 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-ink/10 dark:before:bg-white/10">
            {timeline.map((item, index) => (
              <Reveal key={`${item.year}-${item.title}`} delay={index * 0.04} className="relative pl-14">
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-lg bg-tealpro text-white">
                  <Clock size={18} />
                </span>
                <article className="panel p-5">
                  <p className="text-sm font-bold text-amberpro">{item.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70 dark:text-stone-300">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
