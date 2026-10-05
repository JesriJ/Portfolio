import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software projects by Jesri Joseph — full-stack applications, distributed systems, and product engineering.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="page-shell">
        <header className="max-w-2xl">
          <h1 className="display text-[clamp(4rem,10vw,7rem)] text-cream">
            Work/Projects
          </h1>
        </header>

        <div className="work-grid mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index % 3 === 0}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
