import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Por Waiwitlikhit",
  email: "pw5115@princeton.edu",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  // Uncomment the following to re-enable the blog:
  // {
  //   title: "Blog",
  //   url: "/blog",
  // },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/porwai",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Twitter",
    url: "https://x.com/PWaiwitlikhit",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "pw5115@princeton.edu",
    url: "mailto:pw5115@princeton.edu",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Pongsapak Waiwitlikhit",
    description:
      "Princeton undergraduate student from Thailand who is interested in Maching Learning and Computer Science.",
    image: "/llama_picture.jpeg",
  },
  role: "Undergrad Student @ Princeton University",
  description:
    "Hi ! My name is Por Waiwitlikhit. I'm a Princeton student born in Thailand heavily intersted in Machine Learning and Computer Systems.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Por Waiwitlikhit",
    description:
      "Princeton undergraduate student from Thailand who is interested in Maching Learning and Computer Science.",
    image: "/llama_picture.jpeg",
  },
  subtitle: "cool info about me !",
  about: {
    description: `
I'm currently working as an undergraduate researcher at Princeton AI Lab under Arvind Narayanan's SAgE Research Group, where I'm contributing to research on the systematic study and evaluation of AI agents. I'm also focused on learning more about large language models at Princeton University, where I'm working with Prof. Arti Gupta on optimizing reAct agents with GEPA as part of my advising. 
<br/><br/>
I have strong experience in backend engineering and machine learning, and I especially enjoy working with computer systems. My detailed experiences and awards are listed below.
<br/><br/>
I am also an avid explorer of countries + currently trying for all 7 peaks (non-everest). Here are some pics of travels.`, // Markdown is supported
    image_l: {
      url: "/bridge.jpeg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/castle.jpeg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked at various companies and research labs in the past. My follow experiences are below !`, // Markdown is supported
    items: [
      {
        title: "Undergraduate Researcher",
        company: {
          name: "Princeton AI Lab (SAgE) & Princeton CV&L Lab",
          image: "/sage.png",
          url: "https://sage.cs.princeton.edu",
        },
        date: "Oct 2023 - Present",
      },
      {
        title: "ML Software Engineer Intern",
        company: {
          name: "Amazon AGI",
          image: "/amazon.webp",
          url: "",
        },
        date: "May - Aug 2025",
      },
      {
        title: "Back-End Software Engineer Intern",
        company: {
          name: "Agoda (Bookings.com)",
          image: "/agoda.webp",
          url: "",
        },
        date: "Jun - Aug 2024",
      },
      {
        title: "Data Science and ML Intern",
        company: {
          name: "Kasikorn Business Technology Group",
          image: "/kbtg.png",
          url: "",
        },
        date: "Jun - Aug 2023",
      },
    ],
  },
  awards: {
    description: `I chair the Princeton Data Science Club and lead our engineering. I won the Princeton Data Science Bowl. I’ve also been a 2x finalist at Princeton’s hackathon. Fun twist: before all of this, I represented + won medals for Thailand at international Olympiads… just not the math one. I competed in Economics and Philosophy instead >:).`,
    items: [],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Por Waiwitlikhit",
    description: "Check out what I've been working on.",
    image: "/llama_picture.jpeg",
  },
  subtitle: "Projects that I have worked on !",
  projects: [
    {
      title: "Research Assistant at Princeton Artificial Intelligence Lab",
      description:
        "Advised by Sayash Kapoor at the Science of Agent Evaluation Lab (SAgE). Working on automated agent error detection and optimization via GEPA.",
      image: "/react.png",
      year: "2025",
      url: "https://sage.cs.princeton.edu",
      blogId: "reliability-engineering-for-multi-tool-ai-agents-at-hal", // Links to the detailed blog post
    },
    {
      title: "Building and Optimizing DSPy Coding Agents with Gradient-Estimation Prompts",
      description:
        "Advised by Prof. Aarti Gupta. Improving DSPy coding agent SWE-Bench-Lite performance with GEPA. Achieved 44% Pass@1 success rate for Qwen 3.0 Coder 30B A3B.",
      image: "/dspy_swe_bench/researchpaper.png",
      year: "2025",
      url: "https://github.com/porwai/dspy-code-agent",
      blogId: "beyond-pass-fail-trace-driven-analysis-of-a-dspy-coding-agent-on-swe-bench-lite", // Links to the detailed blog post
    },
    {
      title: "Independent Research: LESS is More",
      description:
        "Explored data-efficient fine-tuning of LLMs by applying LESS data selection and QLoRA. Fine-tuned Llama-2-7B on single-task math with just 1k prompts.",
      image: "/less.png",
      year: "2024",
      url: "https://drive.google.com/file/d/19-G-RsRq4B0T6d3tuxcz6A8jdglrc9c4/view?usp=sharing",
      // blogId: "your-blog-post-id", // Add blog post ID here when you create the blog post
    },
    {
      title: "Working on Compilers: Tree Parsers, Recreating C, and Learning Parsing",
      description:
        "Built compilers by following the *Making Compilers* book. Projects include tree parsers, type checking, SSA-based optimizations, and recreating a C-like compiler with a working runtime.",
      image: "/compilers.png",
      year: "2023",
      url: "https://github.com/porwai/compilers-projects/tree/main",
      // blogId: "your-blog-post-id", // Add blog post ID here when you create the blog post
    },
    {
      title: "Full Stack Web App for NJ Rise",
      description:
        "Led development of a production-ready analytics tool for a New Jersey food pantry. Built with Vue, TypeScript, and Tailwind, delivering actionable insights for non-profit operations.",
      image: "/rise.png",
      year: "2024",
      url: "https://github.com/mhuang412/COS333-NJ-Rise",
      // blogId: "your-blog-post-id", // Add blog post ID here when you create the blog post
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Por Waiwitlikhit",
    description: "Thoughts, stories and ideas.",
    image: "/llama_picture.jpeg",
  },
  subtitle: "Thoughts, stories and ideas.",
};
