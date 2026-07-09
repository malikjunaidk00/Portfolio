import { Briefcase, Code2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import SectionHeader, { Reveal } from "./SectionHeader";
import { personal } from "../data/portfolio";

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replaceAll(" ", "")}` },
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: Code2, label: "GitHub", value: personal.githubUsername, href: personal.github },
  personal.linkedin ? { icon: Briefcase, label: "LinkedIn", value: "Profile", href: personal.linkedin } : null,
].filter(Boolean);

function ContactCard({ item }) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-tealpro/10 text-tealpro dark:bg-teal-300/10 dark:text-teal-200">
        <item.icon size={22} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink/60 dark:text-stone-400">{item.label}</span>
        <span className="mt-1 block font-semibold text-ink dark:text-white">{item.value}</span>
      </span>
    </>
  );

  if (!item.href) {
    return <div className="panel flex items-center gap-4 p-5">{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="panel flex items-center gap-4 p-5 transition hover:border-tealpro/50"
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject") || "Portfolio contact";
    const message = form.get("message");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app with a prepared message.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad section-surface">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Available for junior engineering, AI automation, backend, GIS, QA, and technical support roles."
          description="Recruiters and hiring teams can reach Muhammad directly by email, phone, GitHub, or the contact form."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="grid gap-4">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </Reveal>

          <Reveal className="panel p-6 sm:p-8" delay={0.05}>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                  Name
                  <input className="input-field" name="name" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                  Email
                  <input className="input-field" name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                Subject
                <input className="input-field" name="subject" required />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                Message
                <textarea className="input-field min-h-36 resize-y" name="message" required />
              </label>
              <button type="submit" className="button-primary justify-self-start">
                <Send size={18} />
                Send Message
              </button>
              {status ? <p className="text-sm font-semibold text-tealpro dark:text-teal-300">{status}</p> : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
