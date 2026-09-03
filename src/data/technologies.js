import {
  FaReact,
  FaLaravel,
  FaSymfony,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiTailwindcss, SiSupabase, SiVite } from 'react-icons/si'

export const technologies = [
  { name: 'React', icon: FaReact, className: 'tech-react' },
  { name: 'Laravel', icon: FaLaravel, className: 'tech-laravel' },
  { name: 'Symfony', icon: FaSymfony, className: 'tech-symfony' },
  { name: 'Node.js', icon: FaNodeJs, className: 'tech-node' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, className: 'tech-tailwind' },
  { name: 'Supabase', icon: SiSupabase, className: 'tech-supabase' },
  { name: 'Docker', icon: FaDocker, className: 'tech-docker' },
  { name: 'Git', icon: FaGitAlt, className: 'tech-git' },
  { name: 'GitHub', icon: FaGithub, className: 'tech-github' },
  { name: 'Vite', icon: SiVite, className: 'tech-vite' },
]
