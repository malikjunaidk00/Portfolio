import {
  BrainCircuit,
  ClipboardCheck,
  Code2,
  Database,
  Headphones,
  Map,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { skillGroups } from "../data/portfolio";

const iconMap = {
  code: Code2,
  server: Server,
  frontend: Monitor,
  database: Database,
  brain: BrainCircuit,
  map: Map,
  tools: Wrench,
  testing: ClipboardCheck,
  support: Headphones,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-surface">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Skills grouped by how recruiters and hiring managers scan junior profiles."
          description="The strongest signal is Java backend plus Python, SQL, React, AI automation, GIS tooling, and support systems experience."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] ?? Code2;

            return (
              <Reveal key={group.title} delay={index * 0.03} className="panel h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-tealpro/10 text-tealpro dark:bg-teal-300/10 dark:text-teal-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-ink dark:text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
