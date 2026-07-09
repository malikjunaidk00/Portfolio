import { Download, FileDown } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { personal } from "../data/portfolio";
import { resumePath } from "../data/resumeLink";

export default function Resume() {
  return (
    <section id="resume" className="section-pad section-surface">
      <div className="content-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Resume"
            title="Download a role-focused resume for junior software and IT positions."
            description="The resume should emphasize Java backend fundamentals, technical support experience, AI automation projects, and the QGIS thesis project."
          />

          <Reveal className="panel p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-tealpro text-white">
                  <FileDown size={26} />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-ink dark:text-white">{personal.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70 dark:text-stone-300">
                    {personal.title}
                  </p>
                </div>
              </div>
              <a href={resumePath} download className="button-primary shrink-0">
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
