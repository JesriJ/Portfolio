import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jesri Joseph — software developer focused on thoughtful products, reliable systems, and clear interfaces.",
  alternates: {
    canonical: "/about",
  },
};

const capabilities = [
  "Web applications",
  "Frontend",
  "Backend",
  "APIs",
  "Database systems",
  "UI implementation",
];

const focus = [
  "Full-stack product engineering",
  "Reliable APIs and data systems",
  "Real-time and distributed workflows",
  "Clean, intentional interfaces",
];

const experience = [
  {
    period: "May 2026 — Aug 2026",
    title: "Online Proprietary Trading Group",
    detail: "Freelance Software Engineer",
  },
  {
    period: "Jan 2026 — Jun 2026",
    title: "Physical Therapy & Rehabilitation Clinic",
    detail: "Software Developer",
  },
  {
    period: "Aug 2025 — May 2026",
    title: "University of Maryland Honors College",
    detail: "Computer Science Mentor & Tutor",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="page-shell">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
          <div>
            <h1 className="display text-[clamp(4rem,10vw,7rem)] text-cream">
              About
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-cream-secondary sm:text-lg">
              <p>
                I&apos;m {site.name.replace(/\.$/, "")}, a software developer who
                builds products and systems with care for clarity, performance,
                and everyday usability.
              </p>
              <p>
                My work spans full-stack applications, APIs, distributed
                services, and AI integrations.
              </p>
              <p>
                I care about intentional architecture, restrained interfaces,
                and shipping work that feels reliable in production.
              </p>
            </div>
          </div>

          <aside className="border-t border-cream/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="eyebrow">Education</p>
            <p className="mt-4 text-cream">University of Maryland</p>
            <p className="mt-1 text-sm text-cream-secondary">
              B.S. Computer Science
            </p>
            <p className="meta mt-3">GPA 3.65 · Expected May 2028</p>

            <p className="eyebrow mt-10">Currently focused on</p>
            <ul className="mt-4 space-y-2 text-sm text-cream-secondary">
              {focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </header>

        <div className="hairline mt-16" aria-hidden="true" />

        <section className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <h2 className="eyebrow">Software Development</h2>
            <ul className="mt-6 space-y-3 text-sm text-cream-secondary sm:text-base">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Skills / Tech Stack</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm text-cream">{group.label}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-cream-secondary">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="eyebrow">Experience</h2>
            <Link
              href="/work"
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              View selected work →
            </Link>
          </div>
          <ul className="mt-8 grid gap-0 lg:grid-cols-3">
            {experience.map((item) => (
              <li
                key={item.title}
                className="border-t border-cream/10 py-6 lg:border-t-0 lg:border-l lg:px-8 lg:py-0 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="meta">{item.period}</p>
                <p className="mt-3 text-cream">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-cream/10 pt-8">
          <a
            href={site.resumeHref}
            className="text-sm text-cream-secondary underline-offset-4 transition-colors hover:text-cream hover:underline"
          >
            View résumé →
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted transition-colors hover:text-cream"
          >
            {site.email}
          </a>
          <p className="w-full text-xs text-muted sm:w-auto">
            {site.resumeLabel}
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
