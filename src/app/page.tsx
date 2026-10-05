import { HomeCarousel, type CarouselSlide } from "@/components/HomeCarousel";
import { PageTransition } from "@/components/PageTransition";
import { experience } from "@/content/experience";
import { getHomeCarouselProjects } from "@/content/projects";
import { site } from "@/content/site";

export default function HomePage() {
  const projects = getHomeCarouselProjects();

  const slides: CarouselSlide[] = [
    ...projects.map((project) => ({
      kind: "project" as const,
      project,
    })),
    ...experience.map((item) => ({
      kind: "experience" as const,
      experience: item,
    })),
  ];

  return (
    <PageTransition>
      <div className="page-shell">
        <section className="relative">
          <h1 className="display max-w-4xl text-[clamp(3.2rem,8vw,6.5rem)] text-cream">
            {site.name}
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted">
            {site.title}
          </p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream-secondary sm:text-lg">
            {site.intro}
          </p>
          <div className="hairline mt-12" aria-hidden="true" />
        </section>

        <section className="mt-14 sm:mt-20">
          <HomeCarousel slides={slides} />
        </section>
      </div>
    </PageTransition>
  );
}
