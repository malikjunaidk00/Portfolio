import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Real support experience that transfers directly into engineering work."
          description="The professional background shows diagnostics, documentation, customer communication, tool-heavy workflows, and ownership of unclear technical problems."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((item, index) => (
            <Reveal key={`${item.role}-${item.company}`} delay={index * 0.04}>
              <article className="panel p-6 sm:p-7">
                <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-tealpro text-white">
                      <Briefcase size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-ink dark:text-white">{item.role}</h3>
                    <p className="mt-1 font-semibold text-tealpro dark:text-teal-300">{item.company}</p>
                    <div className="mt-4 space-y-2 text-sm text-ink/70 dark:text-stone-300">
                      <p className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{item.dates}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-ink/75 dark:text-stone-200">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-tealpro dark:text-teal-300" size={18} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
