import type { MetadataRoute } from "next";
import { allProjectsSorted } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = allProjectsSorted.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
