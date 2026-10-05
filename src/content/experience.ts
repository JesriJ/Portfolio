export type Experience = {
  id: string;
  period: string;
  title: string;
  organization: string;
  summary: string;
  highlights?: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    id: "trading-group",
    period: "May 2026 — Aug 2026",
    title: "Freelance Software Engineer",
    organization: "Online Proprietary Trading Group",
    summary:
      "Designed and deployed a trading platform with live market feeds, configurable dashboards, and production support for daily trader use.",
    highlights: [
      "End-to-end ownership from requirements to production",
      "Live market dashboards with Redis-backed feeds",
      "Daily use by traders in an active workflow",
    ],
    technologies: ["Spring Boot", "React", "TypeScript", "Redis", "WebSockets"],
  },
  {
    id: "clinic",
    period: "Jan 2026 — Jun 2026",
    title: "Software Developer",
    organization: "Physical Therapy & Rehabilitation Clinic",
    summary:
      "Built scheduling services and React workflows that prevented overlapping therapist, patient, and room bookings.",
    highlights: [
      "Coordinated therapists, patients, and rooms in one schedule",
      "PostgreSQL exclusion constraints to block double-bookings",
      "Idempotent booking flows for reliable writes under concurrency",
      "Shipped with a small team for real weekly clinic use",
    ],
    technologies: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy"],
  },
  {
    id: "mentor",
    period: "Aug 2025 — May 2026",
    title: "Computer Science Mentor & Tutor",
    organization: "University of Maryland Honors College",
    summary:
      "Mentored students in data structures, algorithms, debugging, and software design with careful, actionable feedback.",
    highlights: [
      "One-on-one mentoring in core CS fundamentals",
      "Assignment and project review with concrete feedback",
      "Focus on debugging process and design clarity",
    ],
    technologies: ["Data Structures", "Algorithms", "Software Design"],
  },
];
