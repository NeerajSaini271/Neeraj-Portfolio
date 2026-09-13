export type ProfessionalContribution = {
  slug: string;
  name: string;
  label: string;
  description: string;
  contribution: string;
  stack: string;
  technologies: string[];
  prCount: number;
  lightImage: string;
  darkImage: string;
  imageAlt: string;
  originalUrl: string;
  forkUrl: string;
  pullRequestsUrl: string;
  overview: string[];
  highlights: string[];
  areas: string[];
  note: string;
  pullRequestHighlights: { number: number; title: string; url: string }[];
};

export const professionalContributions: ProfessionalContribution[] = [
  {
    slug: "internops",
    name: "InternOps",
    label: "UptoSkills Internship · Collaborative Project",
    description:
      "Enterprise workforce-management platform for role-based teams, attendance, tasks, ratings, administration, and operational workflows.",
    contribution:
      "Contributed across authentication and session security, role-based workflows, attendance and ratings, image delivery, frontend performance, administrative tooling, and backend reliability.",
    stack: "React · Fastify · PostgreSQL · Raw SQL · Python",
    technologies: [
      "React",
      "Fastify",
      "PostgreSQL",
      "Raw SQL",
      "Python",
      "Vite",
      "Tailwind CSS",
    ],
    prCount: 46,
    lightImage: "/projects/internops-light.png",
    darkImage: "/projects/internops-dark.png",
    imageAlt: "Sanitized InternOps administration dashboard with demo data",
    originalUrl: "https://github.com/rajat-wyrm/InternOps",
    forkUrl: "https://github.com/NeerajSaini271/InternOps",
    pullRequestsUrl:
      "https://github.com/rajat-wyrm/InternOps/pulls?q=is%3Apr+state%3Aclosed+author%3ANeerajSaini271",
    overview: [
      "InternOps is a collaborative workforce-management platform for structured intern teams, attendance, performance, tasks, administration, and operational workflows.",
      "My work is publicly documented through 46 closed pull requests across frontend, backend, security, reliability, and user-experience improvements.",
    ],
    highlights: [
      "Improved coordinated loading, responsive skeletons, frontend performance, profiles, notifications, analytics, and management workflows.",
      "Strengthened authentication and session behavior, password reset handling, token refresh, role guards, and impersonation safety.",
      "Improved attendance, ratings, workbook imports, exports, uploads, MIME handling, cross-origin image delivery, and avatar reliability.",
      "Added operational diagnostics, structured logging, API safeguards, AI-provider fallback behavior, and database transaction improvements.",
    ],
    areas: [
      "Authentication and session security",
      "Role-based management workflows",
      "Attendance, ratings, imports, and exports",
      "Frontend performance and responsive UX",
      "Uploads, image delivery, and avatar behavior",
      "Backend reliability and operational diagnostics",
    ],
    note: "InternOps is a collaborative internship project. The original repository belongs to its respective maintainers and contributors; this page describes only my verified contributions.",
    pullRequestHighlights: [
      {
        number: 1995,
        title:
          "Improve coordinated loading, responsive skeletons, and frontend performance",
        url: "https://github.com/rajat-wyrm/InternOps/pull/1995",
      },
      {
        number: 1938,
        title:
          "Improve authenticated experience, secure impersonation, Analytics, and HR",
        url: "https://github.com/rajat-wyrm/InternOps/pull/1938",
      },
      {
        number: 1906,
        title: "Add four-week ratings, data exports, and workflow improvements",
        url: "https://github.com/rajat-wyrm/InternOps/pull/1906",
      },
      {
        number: 1820,
        title: "Complete workbook import and attendance lifecycle",
        url: "https://github.com/rajat-wyrm/InternOps/pull/1820",
      },
      {
        number: 1259,
        title: "Revoke sibling tokens during refresh rotation",
        url: "https://github.com/rajat-wyrm/InternOps/pull/1259",
      },
      {
        number: 130,
        title:
          "Add structured logging and an operational runbook for cron jobs",
        url: "https://github.com/rajat-wyrm/InternOps/pull/130",
      },
    ],
  },
  {
    slug: "ai-mentor",
    name: "AI Mentor",
    label: "UptoSkills Internship · Collaborative Project",
    description:
      "AI-powered learning platform with courses, progress tracking, discussions, analytics, administration, and generated lesson workflows.",
    contribution:
      "Contributed across admin workflows, authentication security, course progress, discussions, API error handling, database integrity, SEO, and AI-service stability.",
    stack: "React · Express · PostgreSQL · FastAPI · Gemini",
    technologies: [
      "React",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "FastAPI",
      "Gemini",
      "Firebase",
      "JWT",
    ],
    prCount: 13,
    lightImage: "/projects/ai-mentor-light.png",
    darkImage: "/projects/ai-mentor-dark.png",
    imageAlt: "Sanitized AI Mentor learning dashboard with demo account data",
    originalUrl: "https://github.com/Mukesh-01-dev/Ai-Mentor",
    forkUrl: "https://github.com/NeerajSaini271/Ai-Mentor",
    pullRequestsUrl:
      "https://github.com/Mukesh-01-dev/Ai-Mentor/pulls?q=is%3Apr+state%3Aclosed+author%3ANeerajSaini271",
    overview: [
      "AI Mentor is a collaborative learning platform with courses, progress tracking, discussions, analytics, administrative tools, and AI-assisted lesson workflows.",
      "My work is publicly documented through 13 closed pull requests spanning frontend, backend, authentication, database integrity, SEO, and AI-service reliability.",
    ],
    highlights: [
      "Improved administrative dashboards, validation, secure password updates, and user database synchronization.",
      "Fixed course progress, learning previews, enrolled-course filtering, discussions, moderation controls, and course retrieval errors.",
      "Strengthened Firebase token-expiry handling, protected learning endpoints, and improved backend error responses.",
      "Resolved AI rate limits and proxy-stream crashes, added SEO metadata, and improved database integrity for course reports.",
    ],
    areas: [
      "Admin workflows and dashboard UX",
      "Authentication and API security",
      "Course progress and learning flows",
      "Discussions and moderation",
      "Database integrity and error handling",
      "SEO and AI-service reliability",
    ],
    note: "AI Mentor is a collaborative internship project. The original repository belongs to its respective maintainers and contributors; this page describes only my verified contributions.",
    pullRequestHighlights: [
      {
        number: 244,
        title:
          "Implement secure password updates, user sync, and API hardening",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/244",
      },
      {
        number: 234,
        title: "Improve the Admin Dashboard, Zod validation, and bug handling",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/234",
      },
      {
        number: 336,
        title: "Resolve AI rate limits, proxy-stream crashes, and UI errors",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/336",
      },
      {
        number: 357,
        title: "Secure the learning endpoint and resolve preview crashes",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/357",
      },
      {
        number: 444,
        title: "Correct discussion data and enable moderation controls",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/444",
      },
      {
        number: 285,
        title: "Fix video course-progress and playback errors",
        url: "https://github.com/Mukesh-01-dev/Ai-Mentor/pull/285",
      },
    ],
  },
];

export function getProfessionalContribution(
  slug: string
): ProfessionalContribution | undefined {
  return professionalContributions.find((item) => item.slug === slug);
}
