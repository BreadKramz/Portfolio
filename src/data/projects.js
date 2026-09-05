import {
  FaReact,
  FaLaravel,
  FaSymfony,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaChurch,
  FaCode,
} from 'react-icons/fa'
import { SiTailwindcss, SiSupabase, SiVite, SiMysql, SiCplusplus } from 'react-icons/si'

export const projects = [
  {
    title: 'OMP Church',
    description:
      'A website for our church community. Built to share announcements, schedules, and resources with members online.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    role: 'Solo Developer',
    year: '2025',
    status: 'Live',
    icon: FaChurch,
    accent: 'project-accent-1',
    demo: 'https://omp-church.vercel.app/',
    repo: 'https://github.com/BreadKramz/OMP-Church.git',
  },
  {
    title: 'Computer Science Organization',
    description:
      'A site for our university CS organization. Showcases events, members, and resources for students joining the org.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    role: 'Solo Developer',
    year: '2025',
    status: 'Live',
    icon: FaCode,
    accent: 'project-accent-2',
    demo: 'https://computer-science-organization.vercel.app/',
    repo: 'https://github.com/BreadKramz/Computer-Science-Organization.git',
  },
  {
    title: 'Kramz Notes',
    description:
      'A minimalist markdown note-taking app with tags, search, and dark mode. Built for speed and keyboard-first workflows.',
    stack: ['React', 'Supabase', 'Vite'],
    role: 'Solo Developer',
    year: '2025',
    status: 'In progress',
    icon: FaReact,
    accent: 'project-accent-3',
  },
  {
    title: 'Personal Site',
    description:
      'This very portfolio, hand-rolled React + Vite, zero UI frameworks, custom CSS. Optimized for performance and accessibility.',
    stack: ['React', 'Vite', 'CSS'],
    role: 'Designer & Developer',
    year: '2026',
    status: 'Live',
    icon: FaReact,
    accent: 'project-accent-4',
  },
]

export const projectStackIcons = {
  React: FaReact,
  Laravel: FaLaravel,
  Symfony: FaSymfony,
  'Node.js': FaNodeJs,
  PHP: FaPhp,
  Python: FaPython,
  JavaScript: FaJs,
  Java: FaJava,
  'C++': SiCplusplus,
  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'Tailwind CSS': SiTailwindcss,
  Supabase: SiSupabase,
  Vite: SiVite,
  MySQL: SiMysql,
  Bootstrap: FaReact,
  CSS: FaReact,
  Express: FaNodeJs,
}
