import {
  Coffee,
  Sprout,
  Atom,
  Database,
  Sparkles,
  Box,
  Workflow,
  BarChart3,
  Filter,
  Sigma,
  Server,
  Hexagon,
  Wind,
  KeyRound,
  Lock,
  LineChart,
  Zap,
  Radio,
  Cpu,
  FileCode,
  Leaf,
  Code2,
} from 'lucide-react'

// Maps each stack-tag label used in data/content.js to a fitting lucide
// icon plus its real-world brand color, so tech tags read as
// recognizable icons-at-a-glance instead of plain text. Not every tool
// has a literal logo in lucide's set, so a couple lean on a close
// conceptual match (still colored to the brand) rather than going
// unlabeled.
const TECH = {
  Java: { icon: Coffee, color: '#ED8B00' },
  'Spring Boot': { icon: Sprout, color: '#6DB33F' },
  React: { icon: Atom, color: '#61DAFB' },
  'React (Vite)': { icon: Zap, color: '#646CFF' },
  PostgreSQL: { icon: Database, color: '#4169E1' },
  MySQL: { icon: Database, color: '#4479A1' },
  'OpenAI API': { icon: Sparkles, color: '#10A37F' },
  Docker: { icon: Box, color: '#2496ED' },
  'CI/CD': { icon: Workflow, color: '#DB6E4A' },
  'Power BI': { icon: BarChart3, color: '#F2C811' },
  'Power Query (M)': { icon: Filter, color: '#F2C811' },
  DAX: { icon: Sigma, color: '#F2C811' },
  'Data Modeling': { icon: Database, color: '#B08D57' },
  MongoDB: { icon: Leaf, color: '#47A248' },
  Express: { icon: Server, color: '#E8E4DC' },
  'Node.js': { icon: Hexagon, color: '#339933' },
  'Tailwind CSS': { icon: Wind, color: '#38BDF8' },
  JWT: { icon: KeyRound, color: '#D6409F' },
  bcrypt: { icon: Lock, color: '#7C93A6' },
  Recharts: { icon: LineChart, color: '#22B5BF' },
  WebSocket: { icon: Radio, color: '#4AC1E0' },
  'Arduino/ESP32': { icon: Cpu, color: '#00979D' },
  PHP: { icon: FileCode, color: '#8892BF' },
  Git: { icon: Workflow, color: '#F05032' },
  C: { icon: Code2, color: '#A8B9CC' },
  JavaScript: { icon: Code2, color: '#F7DF1E' },
  SQL: { icon: Database, color: '#4479A1' },
}

export function TechIcon({ name, size = 12, className = '' }) {
  const entry = TECH[name]
  if (!entry) return null
  const Icon = entry.icon
  return <Icon size={size} className={className} style={{ color: entry.color }} aria-hidden="true" />
}

export function hasTechIcon(name) {
  return Boolean(TECH[name])
}
