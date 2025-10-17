export const about = {
  summary:
    "I’m a 20 year old CS undergrad from Vancouver, BC. I built my first PC at 10 & I've been tinkering with technology ever since, I like discovering new things, & I'm always looking for interesting things to do.\n\nI primarily work with Go, TypeScript, Python, and Postgres, I daily drive Linux which has helped me get comfortable in the terminal & understand cloud deployment ",
  tools: ["Arch Linux", "Wayland", "Neovim", "tmux", "Ghostty"],
  currently: [
    "Learning about optimizing vector embeddings",
    "Reading Operating Systems: Three Easy Pieces",
    "Editing my dotfiles",
  ],
};

export const projects = [
  {
    title: "WriteShare",
    descriptionPlain: "Google Docs-style markdown editor with real-time sync.",
    whyBuilt:
      "I wanted to explore real time features as well as build something with Golang, I started by building out a markdown parser in Go & turned that into a full-stack app",
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
];

export const stack = {
  icons: [
    "go",
    "ts",
    "cpp",
    "python",
    "neovim",
    "docker",
    "postgres",
    "redis",
    "arch",
    "terraform",
    "aws",
    "bash",
    "github",
    "linux",
    "nextjs",
    "nodejs",
    "tailwind",
    "vitest",
  ],
  categories: [
    {
      label: "Languages & Frameworks",
      items: ["Go", "TypeScript", "Python", "Next.js", "Tailwind CSS", "C++"],
    },
    {
      label: "Data & Infrastructure",
      items: ["PostgreSQL", "Redis", "Docker", "Vercel", "Terraform", "AWS"],
    },
    {
      label: "Workflow & Tooling",
      items: ["Arch Linux", "Neovim", "zsh (bash)", "GitHub CI/CD"],
    },
    {
      label: "Testing",
      items: ["Vitest, Jest, Playwright, Go testing"],
    },
  ],
  exploring: [
    "Operating Systems",
    "Hugging Face AI tasks",
    "vector embeddings",
  ],
};

export const contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikitaalobanovv@gmail.com",
};
