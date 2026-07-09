import { Briefcase, Code2, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-[#07120f] py-10 text-white dark:border-white/10">
      <div className="content-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold">{personal.name}</p>
          <p className="mt-2 text-sm text-stone-300">{personal.degree}</p>
          <p className="mt-1 text-sm text-teal-200">Java Backend Developer | AI Automation Builder</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </a>
          {personal.linkedin ? (
            <a
              href={personal.linkedin}
              className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <Briefcase size={18} />
            </a>
          ) : null}
          <a
            href={`mailto:${personal.email}`}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
