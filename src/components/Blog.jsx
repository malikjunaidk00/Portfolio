import { BookOpen, Clock3 } from "lucide-react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { blogPosts } from "../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="section-pad section-surface">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Writing"
          title="Technical writing topics that can become case studies."
          description="These topics are positioned as future write-ups that explain architecture decisions, lessons learned, and implementation tradeoffs."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((title, index) => (
            <Reveal key={title} delay={index * 0.025} className="panel flex min-h-52 flex-col p-5">
              <BookOpen className="text-tealpro dark:text-teal-300" size={24} />
              <h3 className="mt-5 flex-1 text-lg font-bold leading-7 text-ink dark:text-white">{title}</h3>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-tealpro dark:text-teal-300">
                <Clock3 size={16} />
                Draft planned
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
