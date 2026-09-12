export type Project = {
  slug: string;
  icon: "task" | "key" | "journal" | "social" | "music" | "store" | "streaming";
  label: string;
  name: string;
  title: string;
  description: string;
  stack: string;
  technologies: string[];
  image: string;
  darkImage?: string;
  imageAlt: string;
  liveUrl: string;
  githubUrl: string;
  apiUrl?: string;
  overview: string[];
  features: string[];
  highlights: string[];
  responsive: string[];
  note: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    icon: "task",
    label: "TaskFlow",
    name: "TaskFlow",
    title:
      "A focused personal task manager for planning work and tracking progress.",
    description:
      "Built a responsive local-first workflow with priorities, due dates, search, filtering, sorting, cross-tab synchronization, and persistent light and dark themes.",
    stack: "React · Vite · Tailwind CSS · LocalStorage",
    technologies: [
      "React 19",
      "Vite 7",
      "Tailwind CSS 4",
      "JavaScript",
      "localStorage",
      "Storage events",
    ],
    image: "/projects/taskflow-light.png",
    darkImage: "/projects/taskflow-dark.png",
    imageAlt: "TaskFlow task management dashboard",
    liveUrl: "https://taskflow-personal-task-manager.vercel.app",
    githubUrl:
      "https://github.com/NeerajSaini271/TaskFlow-Personal-Task-Manager",
    overview: [
      "TaskFlow is a browser-based, local-first personal task manager for organizing priorities, due dates, notes, and everyday progress.",
      "Task data stays in the current browser and synchronizes across open tabs on the same origin.",
    ],
    features: [
      "Create, edit, complete, and delete tasks",
      "Optional notes, priorities, and due dates",
      "Search, status views, priority filters, and sorting",
      "Progress statistics and clear-completed action",
      "Persistent light and dark themes",
    ],
    highlights: [
      "Corrupted local-storage data recovery",
      "Cross-tab synchronization with Storage events",
      "Accessible labels, focus states, status updates, touch targets, and reduced-motion support",
      "Focused tests for normalization, persistence, recovery, filtering, search, and sorting",
    ],
    responsive: [
      "Two-column desktop dashboard with a sticky composer",
      "Wide single-column tablet layout",
      "Mobile controls stack without horizontal overflow",
    ],
    note: "TaskFlow has no accounts, backend, or cloud synchronization. Clearing browser storage removes saved tasks.",
  },
  {
    slug: "nexlockr",
    icon: "key",
    label: "NexLockr",
    name: "NexLockr",
    title:
      "A secure full-stack password manager with a polished responsive dashboard.",
    description:
      "Created password storage and management flows with a React interface, Node.js and Express APIs, MongoDB persistence, and state-driven password visibility controls.",
    stack: "React · Node.js · Express · MongoDB · Tailwind CSS",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Helmet",
      "Node.js Crypto",
    ],
    image: "/projects/nexlockr-light.png",
    darkImage: "/projects/nexlockr-dark.png",
    imageAlt: "NexLockr password manager dashboard",
    liveUrl: "https://nexlockr.vercel.app",
    githubUrl:
      "https://github.com/NeerajSaini271/NexLockr-Secure-Password-Manager-MongoDB",
    apiUrl: "https://nexlockr-api.onrender.com/api/health",
    overview: [
      "NexLockr is an authenticated, owner-isolated credential vault backed by Express and MongoDB.",
      "Saved credential passwords are encrypted before persistence, while account and session boundaries protect each user's records.",
    ],
    features: [
      "Registration, sign-in, sign-out, and expiring sessions",
      "Create, update, delete, reveal, search, and copy credentials",
      "Responsive credential cards and navigation",
      "Loading, empty, error, and busy states",
      "Persistent light and dark themes",
    ],
    highlights: [
      "AES-256-GCM credential encryption with random IVs and authentication tags",
      "scrypt account-password hashing with unique salts",
      "SHA-256 session-token hashes and MongoDB TTL cleanup",
      "Owner-scoped queries, rate limits, Helmet headers, restricted CORS, body limits, and strict validation",
      "Focused security, authentication, CRUD, tampering, and owner-isolation tests",
    ],
    responsive: [
      "Responsive vault dashboard",
      "Credential cards adapt across viewports",
      "Desktop and mobile navigation patterns",
    ],
    note: "NexLockr is an educational security project and has not undergone an independent security audit. Only fictional demonstration credentials should be used in the public deployment.",
  },
  {
    slug: "devcanvas",
    icon: "journal",
    label: "DevCanvas",
    name: "DevCanvas",
    title:
      "A modern frontend journal for exploring development topics and ideas.",
    description:
      "Designed a responsive editorial experience with technology-specific visual artwork, structured article cards, theme support, and polished navigation behavior.",
    stack: "Next.js · React · Tailwind CSS · JavaScript",
    technologies: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "JavaScript",
      "CSS",
      "Vercel",
    ],
    image: "/projects/devcanvas-light.png",
    darkImage: "/projects/devcanvas-dark.png",
    imageAlt: "DevCanvas frontend journal homepage",
    liveUrl: "https://devcanvas-frontend-journal.vercel.app",
    githubUrl: "https://github.com/NeerajSaini271/devcanvas-frontend-journal",
    overview: [
      "DevCanvas is a responsive frontend-engineering journal with practical articles, topic-based discovery, and custom locally stored visual headers.",
      "Visitors can search and filter articles, open statically generated detail pages, switch themes, and explore a demonstration moderation workflow.",
    ],
    features: [
      "Featured articles, search, and topic filters",
      "Statically generated article routes",
      "Topic, author, date, and reading-time metadata",
      "Demo login and comment moderation interface",
      "Original logo, artwork, and light and dark themes",
    ],
    highlights: [
      "Next.js App Router and static article generation",
      "Locally stored topic-specific SVG artwork",
      "Semantic content and accessible controls",
      "Visible focus states and reduced-motion support",
      "Production build validates all article routes",
    ],
    responsive: [
      "Multi-column desktop article grid and two-column detail hero",
      "Reduced tablet grid with stacked featured content",
      "Single-column mobile layout and navigation drawer",
    ],
    note: "Authentication and moderation are demonstrations only. DevCanvas has no real accounts, persistent authentication, production API, or database-backed content management.",
  },
  {
    slug: "pulsespace",
    icon: "social",
    label: "PulseSpace",
    name: "PulseSpace",
    title:
      "A responsive social feed interface built around clear content hierarchy.",
    description:
      "Developed a polished social experience with reusable interface patterns, responsive layouts, profile content, and a cohesive dark visual system.",
    stack: "HTML · Tailwind CSS · JavaScript · Vite",
    technologies: [
      "HTML5",
      "Tailwind CSS 4",
      "JavaScript",
      "Vite",
      "Local SVG assets",
      "Vercel",
    ],
    image: "/projects/pulsespace.png",
    imageAlt: "PulseSpace social feed interface",
    liveUrl: "https://pulsespace-social-feed.vercel.app",
    githubUrl: "https://github.com/NeerajSaini271/PulseSpace",
    overview: [
      "PulseSpace is an original responsive social-feed interface for sharing ideas, browsing fictional communities, and connecting with creators.",
      "The experience combines an adaptive three-column layout with an interactive composer, session-based posting, and original local visuals.",
    ],
    features: [
      "Session-based post creation, editing, and deletion",
      "Keyboard posting and an auto-expanding composer",
      "Interactive Like, Repost, Bookmark, Share, and menu states",
      "Sticky desktop navigation and search",
      "Mobile navigation drawer with overlay and scroll locking",
    ],
    highlights: [
      "New posts appear at the top of the feed",
      "Outside-click and Escape-key menu handling",
      "Keyboard-accessible controls, visible focus, labels, and live feedback",
      "Local SVG icons with no remote image dependency",
    ],
    responsive: [
      "Three-column desktop layout",
      "Compact tablet navigation with hidden right sidebar",
      "Full-width mobile feed without horizontal overflow",
    ],
    note: "User-created posts exist only for the current browser session and disappear on refresh. PulseSpace has no backend, authentication, API, or database.",
  },
  {
    slug: "music-player",
    icon: "music",
    label: "Music Player",
    name: "NKS MusicPlayer",
    title: "A responsive web music player with interactive playback controls.",
    description:
      "Implemented data-driven playlists, track switching, seeking, volume adjustment, and persistent player controls using browser audio and DOM APIs.",
    stack: "HTML · CSS · JavaScript · HTMLAudioElement",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "HTMLAudioElement",
      "JSON metadata",
      "Vercel",
    ],
    image: "/projects/music-player.png",
    imageAlt: "Web music player interface",
    liveUrl: "https://music-player-web-app-three.vercel.app",
    githubUrl: "https://github.com/NeerajSaini271/Music-Player-Web-App",
    overview: [
      "NKS MusicPlayer is a responsive browser-based player that loads local album metadata and audio tracks.",
      "The production version includes two CC0 demo collections with six verified public-domain tracks and custom artwork.",
    ],
    features: [
      "Album browsing and scrollable song library",
      "Play, pause, previous, next, and automatic track progression",
      "Synchronized song-row and main-player controls",
      "Seek preview with time tooltip",
      "Volume levels, mute restoration, and saved player state",
    ],
    highlights: [
      "Data-driven JSON album metadata",
      "Browser audio control through HTMLAudioElement",
      "Original project branding and artwork",
      "Documented CC0 audio sources and hashes",
    ],
    responsive: [
      "Responsive album and playlist interface",
      "Adaptive player controls",
      "Collapsible sidebar for smaller screens",
    ],
    note: "Demo audio is CC0 public-domain content. Audio and artwork should only be redistributed or deployed when their permissions allow it.",
  },
  {
    slug: "ecommerce-platform",
    icon: "store",
    label: "Ecommerce Platform UI",
    name: "Storefront",
    title:
      "A detailed ecommerce storefront interface with dense product layouts.",
    description:
      "Recreated a complex desktop shopping experience using nested grids, flexible navigation structures, reusable sections, and responsive layout techniques.",
    stack: "HTML · CSS · Grid · Flexbox",
    technologies: [
      "HTML5",
      "CSS3",
      "CSS Grid",
      "Flexbox",
      "Media queries",
      "Font Awesome",
      "Vercel",
    ],
    image: "/projects/ecommerce-platform.png",
    imageAlt: "Ecommerce platform storefront interface",
    liveUrl: "https://ecommerce-platform-ui.vercel.app",
    githubUrl: "https://github.com/NeerajSaini271/Ecommerce-Platform-UI",
    overview: [
      "Storefront is an original responsive ecommerce interface created to explore modern online-store composition.",
      "It combines navigation, search, promotional content, category cards, and an information-rich footer using semantic HTML and reusable CSS.",
    ],
    features: [
      "Responsive navigation, category selection, and search",
      "Promotional hero with educational-project notice",
      "Eight original product-category cards",
      "Layered card and hero composition",
      "Structured footer and accessible form labels",
    ],
    highlights: [
      "Built from scratch with original Storefront branding",
      "Complex layouts using CSS Grid and Flexbox",
      "Visible keyboard-focus states",
      "No collection of credentials, personal data, or payment information",
    ],
    responsive: [
      "Four category cards per desktop row",
      "Two cards per tablet row",
      "Single-column mobile layout with adaptive navigation",
    ],
    note: "Storefront is an independent educational interface. It does not provide real accounts, purchases, payments, or order processing and is not affiliated with an ecommerce company.",
  },
  {
    slug: "streaming-platform",
    icon: "streaming",
    label: "Streaming Platform UI",
    name: "NKS CinemaUI",
    title:
      "A cinematic streaming interface with responsive media presentation.",
    description:
      "Built an adaptive entertainment layout with an immersive hero area, structured content rows, and responsive behavior across desktop and mobile screens.",
    stack: "HTML · CSS · SVG · JavaScript",
    technologies: [
      "HTML5",
      "CSS3",
      "CSS Grid",
      "Flexbox",
      "SVG",
      "Web Animations API",
      "Vercel",
    ],
    image: "/projects/streaming-platform.png",
    imageAlt: "Streaming platform interface",
    liveUrl: "https://streaming-platform-ui-gamma.vercel.app",
    githubUrl: "https://github.com/NeerajSaini271/Streaming-Platform-UI",
    overview: [
      "NKS CinemaUI is an original black-and-red streaming-style homepage built for frontend practice and portfolio presentation.",
      "It uses local SVG artwork and portfolio-safe content while preserving the structural challenge of a cinematic landing page.",
    ],
    features: [
      "Responsive navigation and centered hero",
      "Four alternating feature sections",
      "Original local illustrations for viewing, offline library, devices, and profiles",
      "Semantic FAQ with smooth opening and closing",
      "Responsive multi-column footer",
    ],
    highlights: [
      "Original identity with no remote posters or videos",
      "JavaScript Web Animations API enhancement",
      "Semantic details and summary elements",
      "Keyboard focus, skip navigation, and reduced-motion support",
    ],
    responsive: [
      "Two-column desktop feature sections",
      "Stacked tablet and mobile sections",
      "Adaptive navigation, typography, branding, and footer columns",
    ],
    note: "NKS CinemaUI does not provide streaming, subscriptions, accounts, payments, or copyrighted media and is not affiliated with a streaming company.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
