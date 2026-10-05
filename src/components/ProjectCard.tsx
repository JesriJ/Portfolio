import Link from "next/link";
import type { Project } from "@/content/projects";
import { getProjectImages } from "@/content/project-images";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const textLed = project.hasImages === false;
  const images = getProjectImages(project.slug);

  return (
    <article
      className={`project-card group ${featured ? "project-card-featured" : ""}`}
    >
      <Link href={`/work/${project.slug}`} className="contents">
        <div className="project-card-media">
          {textLed ? (
            <div className="experience-panel flex h-full min-h-[14rem] w-full flex-col justify-between">
              <div>
                <p className="eyebrow">Case study</p>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-cream-secondary sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="grid gap-4 border-t border-cream/10 pt-5 sm:grid-cols-3">
                <div>
                  <p className="meta">Role</p>
                  <p className="mt-2 text-sm text-cream">{project.role}</p>
                </div>
                <div>
                  <p className="meta">Year</p>
                  <p className="mt-2 text-sm text-cream">{project.year}</p>
                </div>
                <div>
                  <p className="meta">Stack</p>
                  <p className="mt-2 text-sm text-cream-secondary">
                    {project.technologies.slice(0, 3).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          ) : images ? (
            <ProjectMedia
              image={images.hero}
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 92vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
            />
          ) : (
            <ImagePlaceholder
              label={project.title}
              aspectClassName="aspect-[16/10] w-full"
            />
          )}
        </div>

        <div className="project-card-heading">
          <h3 className="display text-3xl leading-[1.05] text-cream transition-colors group-hover:text-cream-secondary sm:text-4xl">
            {project.title}
          </h3>
          <p className="meta mt-2">
            {project.year} · {project.category}
          </p>
        </div>

        <div className="project-card-body">
          <p className="max-w-2xl text-sm leading-relaxed text-cream-secondary sm:text-base">
            {project.description}
          </p>
          <p className="meta pt-3">{project.technologies.join(" · ")}</p>
        </div>
      </Link>
    </article>
  );
}
