import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Download, Mail, MapPin, Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { heroHighlights, personal, stats, targetRoles } from "../data/portfolio";
import { portraitImage } from "../data/portraitImage";
import { resumePath } from "../data/resumeLink";

function HeroButton({ href, children, icon: Icon, variant = "primary", download = false }) {
  const className = variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <a href={href} download={download} className={`${className} w-full sm:w-auto`}>
      <Icon size={18} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[82vh] overflow-hidden pt-16 text-white">
      <div className="content-shell relative z-10 grid min-h-[calc(82vh-4rem)] items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-teal-100 backdrop-blur"
          >
            <Sparkles size={16} />
            Graduate software engineer in Debrecen, Hungary
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04 }}
            className="mt-5 flex items-center gap-3 rounded-lg border border-white/20 bg-[#07120f]/72 p-3 shadow-glow backdrop-blur sm:hidden"
          >
            <img
              src={portraitImage}
              alt="Muhammad Junaid Khalil portrait"
              className="h-16 w-16 shrink-0 rounded-lg border border-white/20 object-cover object-[50%_28%]"
            />
            <div>
              <p className="text-sm font-bold text-white">Muhammad Junaid Khalil</p>
              <p className="mt-1 text-xs leading-5 text-teal-100">Java backend, AI automation, and technical support.</p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-7 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-teal-100 sm:mt-6 sm:text-xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 max-w-3xl text-base leading-7 text-stone-100 sm:mt-5 sm:text-lg sm:leading-8"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap"
          >
            <HeroButton href={resumePath} icon={Download} download>
              Download Resume
            </HeroButton>
            <HeroButton href={personal.github} icon={Code2} variant="secondary">
              View GitHub
            </HeroButton>
            <HeroButton href="#projects" icon={ArrowRight} variant="secondary">
              View Projects
            </HeroButton>
            <HeroButton href="#contact" icon={Mail} variant="secondary">
              Contact Me
            </HeroButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 hidden flex-wrap gap-2 sm:flex"
            aria-label="Target roles"
          >
            {targetRoles.slice(0, 5).map((role) => (
              <span key={role} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/90">
                {role}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="hidden justify-self-center lg:block lg:justify-self-end"
          aria-label="Profile snapshot"
        >
          <div className="w-full max-w-md rounded-lg border border-white/20 bg-[#07120f]/75 p-5 shadow-glow backdrop-blur-md">
            <div className="rounded-lg border border-white/20 bg-white/10 p-5">
              <div className="flex items-center gap-4">
                <img
                  src={portraitImage}
                  alt="Muhammad Junaid Khalil portrait"
                  className="h-24 w-24 shrink-0 rounded-lg border border-white/20 object-cover object-[50%_28%] shadow-soft"
                />
                <div>
                  <p className="text-sm font-semibold uppercase text-teal-100">Recruiter snapshot</p>
                  <p className="mt-1 text-xl font-bold text-white">{personal.degree}</p>
                  <p className="mt-1 text-sm text-stone-300">{personal.university}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {heroHighlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-[#07120f]/70 p-3 text-sm leading-6 text-stone-100">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-teal-200" size={18} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg bg-tealpro/20 px-4 py-3 text-sm font-semibold text-teal-100">
                <MapPin size={16} />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="content-shell relative z-10 pb-10 lg:-mt-10">
        <div className="grid gap-3 rounded-lg border border-white/10 bg-white/10 p-3 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-[#07120f]/60 p-4">
              <p className="text-3xl font-bold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-stone-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
