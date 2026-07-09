import { useState } from "react";
import { Briefcase, Code2, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, personal } from "../data/portfolio";

export default function Header({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07120f]/75 backdrop-blur-xl dark:bg-[#07120f]/80">
      <nav className="content-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-lg" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-tealpro text-sm font-bold text-white">
            MJK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">{personal.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
            aria-label="GitHub profile"
          >
            <Code2 size={18} />
          </a>
          {personal.linkedin ? (
            <a
              href={personal.linkedin}
              className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <Briefcase size={18} />
            </a>
          ) : null}
          <a
            href={`mailto:${personal.email}`}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:border-teal-300 hover:text-white"
            aria-label="Email Muhammad"
          >
            <Mail size={18} />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg bg-white text-ink transition hover:bg-teal-50"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg bg-white text-ink"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07120f] lg:hidden">
          <div className="content-shell py-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="focus-ring rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
