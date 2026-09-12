import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(siteConfig.url);
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/about", baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/projects", baseUrl).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: new URL(`/projects/${slug}`, baseUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
