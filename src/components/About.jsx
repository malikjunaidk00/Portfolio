import { Building2, Globe, Languages, UserRound } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { personal, targetRoles } from "../data/portfolio";

const profileFacts = [
  { icon: Building2, label: "University", value: personal.university },
  { icon: UserRound, label: "Nationality", value: personal.nationality },
  { icon: Globe, label: "Base", value: personal.location },
  { icon: Languages, label: "Languages", value: personal.languages.join(", ") },
];

export default function About() {
  return (
    <section id="about" className="section-pad section-surface">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="About"
            title="A support-trained Computer Science graduate moving into practical software engineering."
            description="Muhammad's background is useful for teams that value people who can understand users, diagnose messy technical problems, and build structured software solutions."
          />

          <Reveal className="panel p-6 sm:p-8">
            <p className="text-lg leading-8 text-ink/75 dark:text-stone-200">{personal.summary}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="quiet-panel p-4">
                  <fact.icon className="mb-3 text-tealpro dark:text-teal-300" size={22} />
                  <p className="text-sm font-semibold text-ink/60 dark:text-stone-400">{fact.label}</p>
                  <p className="mt-1 font-semibold text-ink dark:text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2" aria-label="Target role badges">
            {targetRoles.map((role) => (
              <span key={role} className="badge">
                {role}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
