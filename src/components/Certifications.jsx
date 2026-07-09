import { Award, Clock3 } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Certifications"
          title="A focused certification roadmap, kept separate from completed experience."
          description="Planned credentials are shown as a learning direction rather than claimed achievements."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 0.03} className="panel p-5">
              <Award className="text-amberpro" size={24} />
              <h3 className="mt-4 min-h-14 text-lg font-bold leading-7 text-ink dark:text-white">{cert.name}</h3>
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-tealpro/10 px-3 py-2 text-sm font-semibold text-teal-800 dark:bg-teal-300/10 dark:text-teal-200">
                <Clock3 size={16} />
                {cert.status}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
