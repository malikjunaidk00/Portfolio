import { Code2, ExternalLink } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { githubRepos, personal } from "../data/portfolio";

const contributionClasses = [
  "bg-ink/10 dark:bg-white/10",
  "bg-tealpro/20 dark:bg-teal-300/20",
  "bg-tealpro/40 dark:bg-teal-300/40",
  "bg-amberpro/40 dark:bg-amber-300/40",
];

export default function GithubSection() {
  return (
    <section id="github" className="section-pad section-surface-alt">
      <div className="content-shell">
        <SectionHeader
          eyebrow="GitHub"
          title="Repository direction focused on backend, automation, GIS, and portfolio evidence."
          description={`GitHub username: ${personal.githubUsername}. Repository cards should be kept public and README-driven as projects mature.`}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {githubRepos.map((repo) => (
              <article key={repo.name} className="panel p-5">
                <Code2 className="text-tealpro dark:text-teal-300" size={23} />
                <h3 className="mt-4 text-lg font-bold text-ink dark:text-white">{repo.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70 dark:text-stone-300">{repo.focus}</p>
                <p className="mt-4 text-sm font-semibold text-amberpro">{repo.language}</p>
              </article>
            ))}
          </Reveal>

          <Reveal className="panel p-6" delay={0.05}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white">Development activity</h3>
                <p className="mt-2 text-sm text-ink/60 dark:text-stone-300">Representative contribution-style overview</p>
              </div>
              <a href={personal.github} target="_blank" rel="noreferrer" className="button-secondary">
                <ExternalLink size={17} />
                View GitHub Profile
              </a>
            </div>

            <div className="mt-8 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-2" aria-hidden="true">
              {Array.from({ length: 84 }, (_, index) => (
                <span
                  key={index}
                  className={`aspect-square rounded ${contributionClasses[(index * 5 + index) % contributionClasses.length]}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
