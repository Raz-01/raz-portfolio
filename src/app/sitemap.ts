import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/data/projects";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/work"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const allProjects = await getAllProjects();
  const projectRoutes = allProjects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
