import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jesri Joseph for software development projects and collaborations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="page-shell">
        <header className="max-w-3xl">
          <h1 className="display text-[clamp(3.25rem,9vw,6.25rem)] leading-[0.95] text-cream">
            Let&apos;s work together.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream-secondary sm:text-lg">
            Open to work and collaborations. Feel free to reach out directly by
            email or through LinkedIn.
          </p>
        </header>

        <section className="mt-16 space-y-8">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-xl text-cream transition-colors hover:text-cream-secondary sm:text-2xl"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="eyebrow">Social</p>
            <p className="mt-3 text-base text-cream-secondary">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                LinkedIn
              </a>
              <span className="mx-3 text-muted">·</span>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                GitHub
              </a>
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
