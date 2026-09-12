import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Neeraj Kumar Saini",
  title: "Neeraj Kumar Saini | MERN Stack Developer",
  description:
    "MERN Stack Developer building responsive, secure, and scalable web applications with React, Node.js, Express, MongoDB, and modern frontend technologies.",
  url: siteUrl,
  ogImage: "/og-image.png",
  creator: "Neeraj Kumar Saini",
  authors: [
    {
      name: "Neeraj Kumar Saini",
      url: "https://github.com/NeerajSaini271",
    },
  ],
  keywords: [
    "Neeraj Kumar Saini",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Rajasthan India",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  absoluteTitle = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: absoluteTitle && title ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
