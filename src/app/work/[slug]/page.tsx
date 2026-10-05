import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageTransition } from "@/components/PageTransition";
import { ProjectMedia } from "@/components/ProjectMedia";
import { getProjectImages } from "@/content/project-images";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);
  const images = getProjectImages(project.slug);
  const textLed = project.hasImages === false;

  return (
    <PageTransition>
      <div className="page-shell">
        <header className="max-w-3xl">
          <p className="eyebrow">Project</p>
          <h1 className="display mt-4 text-[clamp(3.5rem,9vw,6.5rem)] text-cream">
            {project.title}
          </h1>
          <p className="meta mt-6">
            {project.year} · {project.category}
          </p>
          <p className="mt-2 text-sm text-muted">Role: {project.role}</p>
        </header>

        <section className="mt-12 max-w-2xl">
          <h2 className="eyebrow">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-cream-secondary sm:text-lg">
            {project.overview}
          </p>
        </section>

        {textLed ? (
          <section className="experience-panel mt-12 max-w-3xl">
            <p className="eyebrow">Focus</p>
            <p className="mt-4 text-base leading-relaxed text-cream-secondary sm:text-lg">
              {project.description}
            </p>
            <div className="mt-8 grid gap-6 border-t border-cream/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="meta">Role</p>
                <p className="mt-2 text-sm text-cream-secondary">{project.role}</p>
              </div>
              <div>
                <p className="meta">Year</p>
                <p className="mt-2 text-sm text-cream-secondary">{project.year}</p>
              </div>
              <div>
                <p className="meta">Stack</p>
                <p className="mt-2 text-sm text-cream-secondary">
                  {project.technologies.join(" · ")}
                </p>
              </div>
            </div>
          </section>
        ) : images ? (
          <div className="mt-12">
            <ProjectMedia
              image={images.hero}
              priority
              sizes="(max-width: 1024px) 100vw, min(1200px, 92vw)"
            />
          </div>
        ) : (
          <div className="mt-12">
            <ImagePlaceholder
              label={project.title}
              aspectClassName="aspect-[16/9]"
            />
          </div>
        )}

        <section className="mt-16 grid gap-10 border-y border-cream/10 py-10 sm:grid-cols-3">
          <div>
            <h2 className="eyebrow">Role</h2>
            <p className="mt-3 text-sm text-cream-secondary">{project.role}</p>
          </div>
          <div>
            <h2 className="eyebrow">Technology</h2>
            <ul className="mt-3 space-y-1 text-sm text-cream-secondary">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Year</h2>
            <p className="mt-3 text-sm text-cream-secondary">{project.year}</p>
          </div>
        </section>

        {!textLed && images ? (
          <section className="mt-16 grid gap-6 sm:grid-cols-2">
            {images.gallery.map((image) => (
              <ProjectMedia
                key={image.alt}
                image={image}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            ))}
          </section>
        ) : null}

        {project.sections?.length ? (
          <section className="mt-20 max-w-2xl space-y-12">
            {project.sections.map((section) => (
              <div key={section.title}>
                <h2 className="display text-4xl text-cream sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream-secondary">
                  {section.body}
                </p>
              </div>
            ))}
          </section>
        ) : null}

        {project.outcome ? (
          <section className="mt-20 max-w-2xl">
            <h2 className="display text-4xl text-cream sm:text-5xl">Outcome</h2>
            <p className="mt-4 text-base leading-relaxed text-cream-secondary">
              {project.outcome}
            </p>
          </section>
        ) : null}

        {project.href ? (
          <div className="mt-10">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-secondary underline-offset-4 transition-colors hover:text-cream hover:underline"
            >
              Visit project →
            </a>
          </div>
        ) : null}

        <div className="mt-24 flex items-center justify-between border-t border-cream/10 pt-8">
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-cream"
          >
            ← All work
          </Link>
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="text-sm text-cream-secondary transition-colors hover:text-cream"
            >
              Next Project →
            </Link>
          ) : (
            <Link
              href="/contact"
              className="text-sm text-cream-secondary transition-colors hover:text-cream"
            >
              Contact →
            </Link>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
