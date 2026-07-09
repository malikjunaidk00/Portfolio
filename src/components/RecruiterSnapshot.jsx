import { CheckCircle2, Compass, FileSearch, Layers3 } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { coreStrengths, recruiterSignals } from "../data/portfolio";

const icons = [Compass, FileSearch, Layers3];

export default function RecruiterSnapshot() {
  return (
    <section id="fit" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Recruiter Fit"
          title="Clear positioning for junior roles that need practical problem solving."
          description="The strongest story is not only academic: it is the combination of Computer Science, technical support, backend learning, automation, and data tooling."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {recruiterSignals.map((signal, index) => {
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <Reveal key={signal.title} delay={index * 0.04} className="panel h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-tealpro text-white">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink dark:text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-stone-300">{signal.detail}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 rounded-lg border border-ink/10 bg-ink p-5 text-white shadow-soft dark:border-white/10 dark:bg-white/10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreStrengths.map((strength) => (
              <article key={strength.title} className="rounded-lg border border-white/10 bg-white/10 p-4">
                <div className="mb-3 flex items-center gap-2 text-teal-100">
                  <CheckCircle2 size={17} />
                  <h3 className="text-sm font-bold uppercase">{strength.title}</h3>
                </div>
                <p className="text-sm leading-6 text-stone-200">{strength.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
