export const about = {
  summary:
    "CS student at BCIT, graduating 2026. I like to build full-stack applications end to end, and being able to spot a bottleneck in my life and build an app to handle it has shaped me as an engineer. I love learning, whether it’s about cooking, cars, sports, or Neovim plugins, I pick up something new every day. ",
  tools: ["WSL2 + Fedora", "Neovim", "tmux", "Alacritty"],
  currently: [
    "Building an app to support tradespeople from underrepresented groups grow their careers",
    "Reading Operating Systems: Three Easy Pieces",
    "Perfecting my pan sauce recipe",
  ],
};

export const projects = [
  {
    title: "WriteShare",
    descriptionPlain: "Google Docs-style markdown editor with real-time sync.",
    whyBuilt:
      "Built to explore CRDTs and WebSocket performance with Go microservices.",
    reflection:
      "Learned where collaborative editing actually bottlenecks and how to budget latency.",
    techStack: [
      "Go",
      "gRPC",
      "WebSockets",
      "Yjs",
      "Redis",
      "PostgreSQL",
      "Docker",
      "AWS ECS",
    ],
    github: "https://github.com/nikitalobanov12/writeshare",
  },
  {
    title: "DayFlow",
    descriptionPlain:
      "Personal productivity app that grew to 300+ daily users.",
    whyBuilt:
      "Started from frustration with existing calendar apps & task managers, decided to build my own with the features that I want",
    reflection:
      "Explored AI-assisted workflows, Tauri for cross-platform & native desktop app, & Google Calendar integration.",
    techStack: [
      "Tauri",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google Gemini AI",
      "Bun",
    ],
    github: "https://github.com/nikitalobanov12/dayflow",
  },
  {
    title: "Circles",
    descriptionPlain:
      "Photo sharing for small groups with roles and clean uploads.",
    whyBuilt:
      "I wanted a private space that felt closer to Google Drive with friends than another social feed.",
    reflection:
      "Spent time optimizing performance, learning how social media feeds work, and building the foundation of full-stack development beyond a simple CRUD app.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Vercel",
      "AWS S3",
    ],
    github: "https://github.com/nikitalobanov12/circle",
  },
  {
    title: "Markdown Parser API",
    descriptionPlain:
      "Tiny Go service that converts markdown to HTML and streams changes.",
    whyBuilt:
      "Built to sharpen low-level Go skills and squeeze performance out of goroutines.",
    reflection:
      "Dialed in concurrency patterns and metrics for lightweight services.",
    techStack: ["Go", "WebSockets", "Markdown-it", "Docker"],
    github: "https://github.com/nikitalobanov12/markdown-parser",
  },
];

export const experience = [
  {
    company: "Seaspan",
    role: "Software Development Intern",
    period: "May–Aug 2024",
    highlights: [
      "Automated ingestion of 1,400+ finance files/month with Spring Boot APIs + Oracle ERP.",
      "Built React dashboards for vessel data monitoring that surfaced KPIs instantly.",
      "Tuned SQL queries and connection pools, reducing downtime by about 35%.",
    ],
  },
  {
    company: "Affistash",
    role: "Full Stack Developer",
    period: "2023–2024",
    highlights: [
      "Shipped Next.js dashboards surfacing AI-sourced analytics so brands could work in one place.",
      "Integrated Firebase + OpenAI for brand matching with caching to keep latency predictable.",
      "Built D3 visualisations across 100k+ data points for quick scans and exports.",
    ],
  },
];

export const stack = {
  dailyDrivers: ["Go", "TypeScript", "PostgreSQL", "Python"],
  frontend: "React + Tailwind + shadcn/ui",
  backend:
    "Go for reliability, TypeScript when flexibility matters, Python for niche ai integrations.",
  infra: ["AWS Amplify", "RDS", "S3", "Lambda", "Terraform", "Docker"],
  exploring: [
    "Operating Systems",
    "Hugging Face AI tasks",
    "Distributed Systems",
  ],
};

export const contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikitaalobanovv@gmail.com",
};
