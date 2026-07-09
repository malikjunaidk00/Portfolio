import { AnimatePresence, motion } from "framer-motion";
import { Code2, ExternalLink, Filter, Radio, Star } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import { projectCategories, projects } from "../data/portfolio";

const categoryStyles = {
  AI: "bg-tealpro/10 text-teal-800 dark:bg-teal-300/10 dark:text-teal-200",
  Backend: "bg-amberpro/10 text-amber-800 dark:bg-amber-300/10 dark:text-amber-200",
  Frontend: "bg-coral/10 text-rose-700 dark:bg-rose-300/10 dark:text-rose-200",
  GIS: "bg-emerald-700/10 text-emerald-800 dark:bg-emerald-300/10 dark:text-emerald-200",
  Automation: "bg-zinc-800/10 text-zinc-800 dark:bg-white/10 dark:text-stone-100",
  "Full Stack": "bg-sky-700/10 text-sky-800 dark:bg-sky-300/10 dark:text-sky-200",
};

function ProjectVisual({ project }) {
  const primary = project.categories[0] ?? "Full Stack";
  const techPreview = project.tech.slice(0, 3);

  return (
    <div className="h-52 overflow-hidden rounded-lg border border-ink/10 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(248,250,252,0.86))] p-4 dark:border-white/10 dark:bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))]">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${categoryStyles[primary] ?? categoryStyles["Full Stack"]}`}>
            {primary}
          </span>
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-lg bg-amberpro/20 px-2 py-1 text-xs font-bold text-amber-800 dark:bg-amber-300/20 dark:text-amber-200">
              <Star size={13} />
              Priority
            </span>
          ) : (
            <span className="h-3 w-3 rounded-full bg-tealpro" />
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-ink/50 dark:text-stone-400">
            <Code2 size={14} />
            <span>Project preview</span>
          </div>
          <h4 className="mt-2 truncate text-lg font-bold leading-6 text-ink dark:text-white">{project.name}</h4>
          <p className="mt-1 max-h-10 overflow-hidden text-xs leading-5 text-ink/65 dark:text-stone-300">{project.impact}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-ink/10 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/10">
            <p className="text-lg font-bold leading-none text-teal-800 dark:text-teal-200">{project.tech.length}</p>
            <p className="mt-1 text-[0.68rem] font-semibold uppercase text-ink/55 dark:text-stone-400">tools</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/10">
            <p className="text-lg font-bold leading-none text-amber-800 dark:text-amber-200">{project.features.length}</p>
            <p className="mt-1 text-[0.68rem] font-semibold uppercase text-ink/55 dark:text-stone-400">features</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techPreview.map((tech) => (
            <span key={tech} className="rounded-lg bg-ink/10 px-2 py-1 text-[0.68rem] font-bold text-ink/65 dark:bg-white/10 dark:text-stone-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function hasLiveDemo(project) {
  return Boolean(project.demo?.startsWith("http"));
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(() => {
    const matches =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(activeCategory));

    return [...matches].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [activeCategory]);

  return (
    <section id="projects" className="section-pad section-surface">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Projects presented as recruiter-friendly evidence, not just a list."
          description="The strongest projects are marked as priority because they connect directly to Java backend, AI automation, technical support tooling, and GIS/data roles."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Project filters">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`focus-ring inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-semibold transition ${
                  isActive
                    ? "border-tealpro bg-tealpro text-white"
                    : "border-ink/10 bg-white text-ink/75 hover:border-tealpro hover:text-tealpro dark:border-white/10 dark:bg-white/10 dark:text-stone-200"
                }`}
              >
                <Filter size={15} />
                {category}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm font-semibold text-ink/60 dark:text-stone-400">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} in {activeCategory}
        </p>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28 }}
                className={`panel flex h-full flex-col p-5 transition hover:-translate-y-1 hover:border-tealpro/40 ${
                  project.featured ? "ring-1 ring-tealpro/20" : ""
                }`}
              >
                <ProjectVisual project={project} />
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-tealpro/10 px-3 py-1 text-xs font-bold uppercase text-teal-800 dark:bg-teal-300/10 dark:text-teal-200">
                      {project.role}
                    </span>
                    <span className="rounded-lg bg-ink/10 px-3 py-1 text-xs font-bold uppercase text-ink/60 dark:bg-white/10 dark:text-stone-300">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-ink dark:text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-stone-300">{project.description}</p>

                  <div className="mt-5 rounded-lg border border-tealpro/20 bg-tealpro/10 p-4 dark:border-teal-300/20 dark:bg-teal-300/10">
                    <p className="text-xs font-bold uppercase text-teal-800 dark:text-teal-200">Recruiter signal</p>
                    <p className="mt-2 text-sm leading-6 text-ink/75 dark:text-stone-200">{project.impact}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-lg bg-ink/10 px-2.5 py-1 text-xs font-semibold text-ink/70 dark:bg-white/10 dark:text-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-2 text-sm text-ink/70 dark:text-stone-300">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tealpro" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary">
                      <Code2 size={17} />
                      Repository
                    </a>
                    {hasLiveDemo(project) ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="button-secondary">
                        <ExternalLink size={17} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="button-secondary cursor-not-allowed opacity-70" aria-disabled="true">
                        <Radio size={17} />
                        Demo pending
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
