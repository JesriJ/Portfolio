"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Experience } from "@/content/experience";
import type { Project } from "@/content/projects";
import { getProjectImages } from "@/content/project-images";

export type CarouselSlide =
  | { kind: "project"; project: Project }
  | { kind: "experience"; experience: Experience };

type HomeCarouselProps = {
  slides: CarouselSlide[];
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function ExperiencePanel({ experience }: { experience: Experience }) {
  const highlights = experience.highlights ?? [];
  const technologies = experience.technologies ?? [];

  return (
    <div className="experience-panel carousel-frame">
      <div className="flex items-start justify-between gap-4 border-b border-cream/10 pb-5">
        <div>
          <p className="eyebrow">Engagement</p>
          <p className="mt-3 text-sm text-cream-secondary">
            {experience.organization}
          </p>
        </div>
        <p className="meta shrink-0">{experience.period}</p>
      </div>

      {highlights.length > 0 ? (
        <ol className="mt-6 space-y-4">
          {highlights.map((item, index) => (
            <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3">
              <span className="meta pt-0.5">{pad(index + 1)}</span>
              <p className="text-sm leading-relaxed text-cream-secondary sm:text-base">
                {item}
              </p>
            </li>
          ))}
        </ol>
      ) : null}

      {technologies.length > 0 ? (
        <p className="meta mt-8 border-t border-cream/10 pt-5">
          {technologies.join(" · ")}
        </p>
      ) : null}
    </div>
  );
}

export function HomeCarousel({ slides }: HomeCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!slide) return null;

  const href =
    slide.kind === "project" ? `/work/${slide.project.slug}` : "/about";
  const label = slide.kind === "project" ? "Project" : "Experience";
  const title =
    slide.kind === "project" ? slide.project.title : slide.experience.title;
  const meta =
    slide.kind === "project"
      ? `${slide.project.year} · ${slide.project.category}`
      : `${slide.experience.period} · ${slide.experience.organization}`;
  const body =
    slide.kind === "project"
      ? slide.project.description
      : slide.experience.summary;
  const tech =
    slide.kind === "project" ? slide.project.technologies.join(" · ") : null;
  const projectImages =
    slide.kind === "project" ? getProjectImages(slide.project.slug) : undefined;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Selected work and experience"
    >
      <div className="flex items-end justify-between gap-6 border-b border-cream/10 pb-4">
        <p className="eyebrow">{label}</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="carousel-btn"
            aria-label="Previous slide"
            onClick={() => go(-1)}
          >
            ←
          </button>
          <p className="meta tabular-nums" aria-live="polite">
            {pad(index + 1)} / {pad(total)}
          </p>
          <button
            type="button"
            className="carousel-btn"
            aria-label="Next slide"
            onClick={() => go(1)}
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
        <div key={`copy-${index}`} className="carousel-copy">
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] text-cream">
            {title}
          </h2>
          <p className="meta mt-4">{meta}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-secondary sm:text-base">
            {body}
          </p>
          {tech ? <p className="meta mt-5">{tech}</p> : null}
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-2 text-sm text-cream-secondary transition-colors hover:text-cream"
          >
            {slide.kind === "project" ? "View project" : "About me"} →
          </Link>
        </div>

        <div key={`media-${index}`} className="carousel-media">
          {slide.kind === "experience" ? (
            <Link href={href} className="block" aria-label={`${title} details`}>
              <ExperiencePanel experience={slide.experience} />
            </Link>
          ) : slide.project.hasImages === false ? (
            <Link href={href} className="block" aria-label={`${title} details`}>
              <div className="experience-panel carousel-frame">
                <p className="eyebrow">Focus</p>
                <p className="mt-4 text-sm leading-relaxed text-cream-secondary sm:text-base">
                  {slide.project.description}
                </p>
                <p className="meta mt-8 border-t border-cream/10 pt-5">
                  {slide.project.technologies.join(" · ")}
                </p>
              </div>
            </Link>
          ) : projectImages ? (
            <Link href={href} className="group block" aria-label={`${title} details`}>
              <ProjectMedia
                image={projectImages.hero}
                className="carousel-frame"
                priority={index === 0}
              />
            </Link>
          ) : (
            <Link href={href} className="group block" aria-label={`${title} details`}>
              <ImagePlaceholder
                label={title}
                aspectClassName="aspect-[16/11]"
                className="carousel-frame"
              />
            </Link>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Slides">
          {slides.map((item, i) => (
            <button
              key={
                item.kind === "project"
                  ? item.project.slug
                  : item.experience.id
              }
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i === index ? "bg-cream" : "bg-cream/20 hover:bg-cream/40"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <Link
          href="/work"
          className="text-sm text-muted underline-offset-4 transition-colors hover:text-cream hover:underline"
        >
          All work →
        </Link>
      </div>
    </section>
  );
}
