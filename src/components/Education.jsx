import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-pad section-surface">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionHeader
            eyebrow="Education"
            title="Computer Science foundation with practical software and data coursework."
            description="Academic work covered software engineering, AI, databases, object-oriented programming, web development, testing, networks, and systems."
          />

          <Reveal className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-tealpro text-white">
                <GraduationCap size={28} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-ink dark:text-white">{education.institution}</h3>
                <p className="mt-2 text-lg font-semibold text-tealpro dark:text-teal-300">{education.degree}</p>
                <p className="mt-1 text-sm text-ink/60 dark:text-stone-300">Graduated: {education.graduated}</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-amberpro" />
                <h4 className="font-bold text-ink dark:text-white">Relevant coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-tealpro/20 bg-tealpro/10 p-5 dark:border-teal-300/20 dark:bg-teal-300/10">
              <p className="text-sm font-semibold text-tealpro dark:text-teal-300">Thesis</p>
              <p className="mt-2 text-lg font-bold leading-7 text-ink dark:text-white">{education.thesis}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
