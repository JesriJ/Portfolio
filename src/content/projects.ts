export type Project = {
  title: string;
  slug: string;
  year: number;
  category: string;
  role: string;
  description: string;
  overview: string;
  technologies: string[];
  featured: boolean;
  /** When false, skip home carousel (e.g. covered by an experience slide). */
  homeCarousel?: boolean;
  /** When false, render a text-led layout instead of image placeholders. */
  hasImages?: boolean;
  href?: string;
  outcome?: string;
  sections?: {
    title: string;
    body: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Contractor Marketplace",
    slug: "contractor-marketplace",
    year: 2026,
    category: "Full-stack application",
    role: "Full-stack Developer",
    description:
      "A marketplace meant to bridge the gap between customers and contractors. Developed features for posting jobs, submitting bids, messaging, payments, reviews, and a smart matching system. Built end to end and deployed to production.",
    overview:
      "Contractor Marketplace connects customers and contractors through authenticated workflows for job posting, bidding, messaging, payments, and reviews. The product emphasizes reliable authorization, transactional hiring logic, and real payment handling.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    featured: true,
    href: "https://contractor-marketplace-seven.vercel.app/",
    outcome:
      "Shipped a live marketplace with role-based workflows, atomic hire transactions, and idempotent Stripe payment handling.",
    sections: [
      {
        title: "Architecture",
        body: "Next.js application with server-side authorization checks, Prisma data models, and transactional flows for bidding and hiring.",
      },
      {
        title: "Technical challenges",
        body: "Preventing duplicate hires, enforcing resource-level authorization, and integrating Stripe webhooks with idempotent event handling.",
      },
    ],
  },
  {
    title: "Trading Analytics Platform",
    slug: "trading-analytics-platform",
    year: 2026,
    category: "Full-stack application",
    role: "Freelance Software Engineer",
    description:
      "A trading platform with configurable dashboards, live market feeds, and strategy-matched watchlists used daily by traders.",
    overview:
      "Designed and deployed a Spring Boot and React/TypeScript trading platform for an online proprietary trading group. The system screens live market instruments across multiple indicators and delivers updates through Redis-backed WebSocket feeds.",
    technologies: [
      "Spring Boot",
      "React",
      "TypeScript",
      "Redis",
      "WebSockets",
    ],
    featured: true,
    homeCarousel: false,
    outcome:
      "Delivered a production trading tool used daily by traders, covering architecture, implementation, deployment, and support.",
    sections: [
      {
        title: "Implementation",
        body: "Configurable React dashboards connected to Redis-backed WebSocket feeds for low-latency market updates and strategy-matched watchlists.",
      },
      {
        title: "Scope",
        body: "Owned requirements, architecture, testing, deployment, and production support for the client engagement.",
      },
    ],
  },
  {
    title: "Clinic Scheduling Platform",
    slug: "clinic-scheduling-platform",
    year: 2026,
    category: "Web application",
    role: "Software Developer",
    description:
      "A scheduling system for a physical therapy clinic that coordinates therapists, patients, and rooms without double-bookings.",
    overview:
      "Collaborated on a team to build and deploy a scheduling platform for a physical therapy and rehabilitation clinic. The system manages weekly appointments while preventing overlapping therapist, patient, and room bookings.",
    technologies: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy"],
    featured: true,
    homeCarousel: false,
    hasImages: false,
    outcome:
      "Deployed a scheduling platform used by clinic staff to manage weekly appointments with conflict prevention.",
    sections: [
      {
        title: "Design decisions",
        body: "Used PostgreSQL exclusion constraints and idempotency keys to prevent overlapping bookings across therapists, patients, and rooms.",
      },
      {
        title: "Implementation",
        body: "Built FastAPI and SQLAlchemy services with React scheduling workflows so clinic staff could manage appointments without conflicting therapist, patient, or room assignments.",
      },
      {
        title: "Collaboration",
        body: "Shipped as part of a small team with shared ownership of backend services, booking logic, and the day-to-day scheduling interface.",
      },
    ],
  },
  {
    title: "Distributed AI Email System",
    slug: "distributed-ai-email-system",
    year: 2026,
    category: "Distributed systems",
    role: "Developer",
    description:
      "An asynchronous email processing pipeline with worker scaling, classification, retries, and dead-letter handling.",
    overview:
      "Built a distributed email processing system using Java, Python, Spring Boot, and Redis Streams. The pipeline scales asynchronous processing across workers and classifies messages with a GPT-4o mini service.",
    technologies: [
      "Java",
      "Python",
      "Spring Boot",
      "Redis Streams",
      "GPT-4o mini",
    ],
    featured: true,
    outcome:
      "Improved asynchronous throughput across workers while preserving durability through retries and dead-letter queues.",
    sections: [
      {
        title: "Reliability",
        body: "Handled injected failure modes with idempotent writes, exponential-backoff retries, and dead-letter queues so jobs are not silently lost.",
      },
    ],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getHomeCarouselProjects() {
  return projects.filter(
    (project) => project.featured && project.homeCarousel !== false,
  );
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
