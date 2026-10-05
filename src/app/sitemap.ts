import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
