import {
  FaReact,
  FaLaravel,
  FaSymfony,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
} from 'react-icons/fa'
import { SiSupabase, SiNgrok, SiXampp, SiFirebase } from 'react-icons/si'

export const technologies = [
  { name: 'XAMPP', icon: SiXampp, className: 'tech-xampp' },
  { name: 'Firebase', icon: SiFirebase, className: 'tech-firebase' },
  { name: 'Supabase', icon: SiSupabase, className: 'tech-supabase' },
  { name: 'Ngrok', icon: SiNgrok, className: 'tech-ngrok' },
  { name: 'Laravel', icon: FaLaravel, className: 'tech-laravel' },
  { name: 'React', icon: FaReact, className: 'tech-react' },
  { name: 'Symfony', icon: FaSymfony, className: 'tech-symfony' },
  { name: 'Python', icon: FaPython, className: 'tech-python' },
  { name: 'Java', icon: FaJava, className: 'tech-java' },
  { name: 'Docker', icon: FaDocker, className: 'tech-docker' },
  { name: 'Git', icon: FaGitAlt, className: 'tech-git' },
  { name: 'GitHub', icon: FaGithub, className: 'tech-github' },
]
