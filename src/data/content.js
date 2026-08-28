// Central content file — edit this to update site copy without touching components.

import interlinkShot1 from '../assets/projects/interlink-1.jpg'
import interlinkShot2 from '../assets/projects/interlink-2.jpg'
import interlinkShot3 from '../assets/projects/interlink-3.jpg'
import interlinkShot4 from '../assets/projects/interlink-4.jpg'
import talentlensShot2 from '../assets/projects/talentlens-2.jpg'
import talentlensShot3 from '../assets/projects/talentlens-3.jpg'
import talentlensShot4 from '../assets/projects/talentlens-4.jpg'
import talentlensShot5 from '../assets/projects/talentlens-5.jpg'
import pocketlyShot1 from '../assets/projects/pocketly-1.jpg'
import pocketlyShot2 from '../assets/projects/pocketly-2.jpg'
import pocketlyShot3 from '../assets/projects/pocketly-3.jpg'
import pocketlyShot4 from '../assets/projects/pocketly-4.jpg'
import quillShot1 from '../assets/projects/quill-1.jpg'

export const profile = {
  name: 'Senithi Malalanayake',
  firstName: 'Senithi',
  role: 'Software Engineer & Business Analyst in the making',
  tagline:
    'I build full-stack products — Java/Spring Boot, the MERN stack, and AI-powered features — then bring a CIMA-backed eye for the numbers, turning raw data into dashboards that show what it’s actually worth.',
  location: 'Colombo, Sri Lanka',
  email: 'senithimalalanayake@gmail.com',
  phone: '+94 77 490 3079',
  linkedin: 'https://linkedin.com/in/senithi',
  github: 'https://github.com/svm04',
  bio: [
    'I’m a third-year BSc (Hons) IT & Management undergraduate at the University of Moratuwa, working at the intersection of software engineering, data analysis, and business strategy.',
    'On one side, I write full-stack code — Java/Spring Boot, the MERN stack, AI-powered features. On the other, I hold a CIMA background in management accounting. Most of my projects live where those two things meet: building the system, then building the dashboard that proves it works.',
  ],
}

// Small stat/credibility chips shown near the hero photo.
export const heroStats = [
  { label: 'GPA', value: '3.61 / 4.00' },
  { label: 'Shipped', value: '5 Projects' },
  { label: 'Status', value: 'Open to Interns' },
]

// Floating skill chips scattered around the hero photo.
export const heroBadges = ['React', 'Spring Boot', 'Power BI', 'OpenAI API', 'PostgreSQL', 'MongoDB', 'Docker']

// The "How I build things" accordion — five core strengths.
export const strengths = [
  {
    title: 'Full-Stack Development',
    summary: 'Java/Spring Boot on the back end, React on the front, and everything wired together in between.',
    tags: ['Java', 'Spring Boot', 'React', 'Node.js'],
  },
  {
    title: 'AI-Powered Features',
    summary: 'Built an OpenAI-backed CV screening engine with a custom weighted scoring model for Interlink.',
    tags: ['OpenAI API', 'Prompt Design', 'Scoring Logic'],
  },
  {
    title: 'Data & Power BI Analytics',
    summary: 'Star-schema data modeling, Power Query cleaning, and DAX measures that turn raw data into decisions.',
    tags: ['Power BI', 'DAX', 'Power Query'],
  },
  {
    title: 'Business Analysis (CIMA)',
    summary: 'A CIMA-backed lens on management accounting that shapes how I scope and prioritize what I build.',
    tags: ['CIMA', 'Costing', 'Reporting'],
  },
  {
    title: 'Project & Team Leadership',
    summary: 'Co-chaired committees, ran finance operations, and coordinated cross-functional teams outside the classroom.',
    tags: ['Jira', 'Figma', 'Stakeholder Comms'],
  },
]

export const education = [
  {
    school: 'University of Moratuwa',
    detail: 'BSc (Hons) in Information Technology & Management',
    period: '2024 – 2028 (Expected)',
  },
  {
    school: 'Visakha Vidyalaya, Colombo',
    detail: 'G.C.E. Advanced Level — Business Stream (Z-score 2.006)',
    period: '',
  },
  {
    school: 'Anula Vidyalaya, Nugegoda',
    detail: 'G.C.E. Ordinary Level — 9 Distinction Passes',
    period: '',
  },
]

export const certifications = [
  {
    name: 'CIMA Diploma in Management Accounting (Dip MA)',
    issuer: 'Chartered Institute of Management Accountants (CIMA), UK',
    status: 'Operational Level Completed',
  },
  {
    name: 'CIMA Certificate in Business Accounting (Cert BA)',
    issuer: 'Chartered Institute of Management Accountants (CIMA), UK',
    status: 'Completed',
  },
  {
    name: 'Power BI for Beginners',
    issuer: 'Microsoft, via Simplilearn',
    status: 'Certificate',
  },
]

export const skills = {
  Languages: ['C', 'Java', 'JavaScript', 'SQL', 'PHP'],
  'Web & Data': ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Power BI'],
  Tools: ['Git', 'Docker', 'Figma', 'Jira', 'Postman', 'ExcelJS'],
}

// `accent` picks which of the two theme colors a project's tile/detail
// header leans on, so the grid doesn't look monotone. `features` breaks
// each project's work into titled cards for the case-study page.
export const projects = [
  {
    id: 'interlink',
    name: 'Interlink',
    tagline: 'AI-Powered Recruitment & Interview Management Platform',
    period: 'Second-Year Team Project',
    team: 'Team SyncX · 5 members',
    accent: 'mint',
    description:
      'A recruitment platform built with a five-person team, from AI-driven CV screening to the billing engine that keeps it running.',
    features: [
      {
        title: 'AI-Powered CV Screening',
        detail:
          'Built an AI-based CV screening engine (OpenAI API) with a custom scoring algorithm weighting skills, experience, and education.',
      },
      {
        title: 'Billing & Subscription Engine',
        detail:
          'Architected the billing & subscription system: multi-tier plans, usage metering, and race-condition-safe quota enforcement.',
      },
      {
        title: 'Automated Lifecycle & Support Desk',
        detail:
          'Built an automated subscription lifecycle engine (Spring’s task scheduler) and a role-secured support ticket system with JWT verification.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'OpenAI API', 'Docker', 'CI/CD'],
    links: { github: 'https://github.com/svm04' },
    images: [interlinkShot1, interlinkShot2, interlinkShot3, interlinkShot4],
    caseStudy: {
      overview:
        'Interlink is a recruitment and interview management platform built as a final-year software engineering capstone by a team of five. It handles the full hiring lifecycle — from a company posting a job to a candidate being screened, interviewed, and evaluated — while running itself as a multi-tenant SaaS product with tiered subscription billing. The system serves four distinct user roles (candidates, company admins, interviewers, and a super admin) across a Spring Boot backend and a React frontend, with roughly 40 backend controllers and 150+ REST endpoints. It integrates OpenAI’s API for AI-assisted CV screening, automated interview question generation, and a retrieval-augmented (RAG) support chatbot, backed by a PostgreSQL database with vector search via pgvector. My role was full-stack developer, responsible for the AI-based CV screening engine, the billing and subscription management system, the support ticket module, and the automated subscription lifecycle job, alongside UI/UX design work in Figma and authoring the technical approach chapter of the final report.',
      problem:
        'Recruitment platforms typically solve one piece of the hiring process well — job boards, ATS software, or interview scheduling tools — but rarely combine screening, scheduling, evaluation, and the business side (billing, usage limits, support) into a single coherent product. Our team set out to build something closer to a real SaaS product: one a company could actually subscribe to, use end-to-end, and rely on to reduce the manual effort of shortlisting candidates against a job’s requirements. The core technical challenge wasn’t just “add AI somewhere” — it was building AI-assisted features that were explainable and consistent, while also solving the unglamorous but essential SaaS plumbing: usage metering, quota enforcement, subscription renewals, and role-based access across four very different types of users.',
      contributions: [
        {
          title: 'AI-Based CV Screening',
          body: 'I built the engine that extracts structured data from uploaded CVs (PDF/DOCX, parsed with Apache PDFBox and POI) and scores each candidate against a job’s requirements. Rather than relying purely on an LLM’s judgment, I designed a hybrid approach: OpenAI’s API extracts skills, education, and experience from free-text CVs, then a deterministic scoring algorithm I built weighs those fields against the job (50% skills, 30% experience, 20% education), using a hand-built synonym taxonomy so that, for example, “Spring Boot” experience correctly counts toward a “Java” requirement. This kept scoring explainable and consistent, rather than a black-box AI verdict a company couldn’t audit or trust.',
        },
        {
          title: 'Billing & Subscription Management',
          body: 'I designed and built the platform’s subscription system end-to-end: multiple pricing tiers (Free, Growth, Enterprise), usage metering across three axes (AI CV analyses, active job posts, interviewer seats), and a Super Admin dashboard for managing company subscriptions — confirming payments, renewing, changing plans, undoing changes. The trickiest part was making usage limits race-condition-safe, using an atomic check-and-increment pattern so two simultaneous requests from the same company can’t both slip past a quota that should only allow one.',
        },
        {
          title: 'Support Ticket System',
          body: 'I built the full ticket lifecycle — creation, threaded replies, status tracking, and filtering — shared across all four user roles. A detail I was deliberate about: the system never trusts a user’s role from their login token at face value, it independently verifies their role against the database before allowing admin-level actions, closing off a common class of privilege-spoofing bug.',
        },
        {
          title: 'Subscription Automation',
          body: 'I built the scheduled job (using Spring’s task scheduler) that runs daily to automatically renew paid subscriptions or downgrade unpaid ones to the Free tier, resetting usage counters on each cycle. This is the piece that lets the billing system run unattended rather than requiring an admin to manually process every company’s renewal.',
        },
      ],
      beyondCode:
        'I also contributed to the product’s UI/UX direction through Figma prototyping and research early in the project, wrote the “Our Approach” chapter of the final academic report, and led the final presentation for project evaluation.',
      architecture:
        'Backend: Java 21, Spring Boot 3.4.4, structured as feature modules (CV screening, scoring, subscriptions, support tickets, interview lifecycle, job postings) rather than a monolithic layer-based structure. Authentication runs through Spring Security validating Supabase-issued JWTs (ES256) against a JWKS endpoint, with method-level authorization via @PreAuthorize. Database: PostgreSQL via Supabase, with the pgvector extension powering a hybrid retrieval system — combining vector similarity search and native full-text search — for the RAG-based support chatbot. AI integration: OpenAI’s gpt-4o-mini for CV field extraction, job requirement extraction, and AI-generated interview questions; gpt-4.1-mini for the RAG chatbot; text-embedding-3-small for embeddings. Frontend: React 19 with Vite, Tailwind CSS layered over a substantial hand-written CSS design system, communicating with the backend over a REST API. Auth: Supabase Auth handling email/password and Google OAuth, with the backend calling Supabase’s Auth Admin API for server-side account management, like provisioning interviewer accounts.',
      challenges: [
        {
          title: 'Keeping AI scoring trustworthy, not just impressive',
          body: 'It would have been easy to let an LLM output a raw “match score” and call it done. Instead, I split the problem: let AI handle the messy, unstructured part (reading a CV) and keep a transparent, rule-based algorithm in charge of scoring, so the result is something a company can inspect and reason about, not a black box.',
        },
        {
          title: 'Making quota enforcement actually safe',
          body: 'My first pass at usage limiting had a subtle race condition — two nearly-simultaneous requests could both read “under the limit” before either one updated the count. Rebuilding it as a single atomic check-and-increment operation closed that gap.',
        },
        {
          title: 'Designing billing automation that fails safely',
          body: 'A scheduled job that silently does nothing if the server happens to be asleep at the trigger time is a real risk for any subscription system hosted on non-always-on infrastructure. Working through this pushed me to think about the automation less like “code that runs once a day” and more like a system that needs observability and fallback behavior if it’s missed.',
        },
      ],
      reflection:
        'This project was as much about the unglamorous SaaS infrastructure — quotas, billing cycles, role-based access — as it was about the AI features that get top billing in a demo. Building both taught me that the “boring” parts, a race-condition-safe increment, a role check that doesn’t trust the client, are often what actually determines whether a system is production-ready, not the flashiness of the AI integration layered on top.',
    },
  },
  {
    id: 'talentlens',
    name: 'TalentLens',
    tagline: 'Recruitment & Workforce Analytics Dashboard',
    period: 'Personal Companion Project',
    team: 'Solo · companion to Interlink',
    accent: 'coral',
    description:
      'The analytics layer for Interlink — a Power BI dashboard that turns raw hiring data into decisions.',
    features: [
      {
        title: 'Data Modeling & ETL',
        detail:
          'Built an end-to-end Power BI layer for Interlink: cleaned 10+ sources in Power Query with an 8-table star schema.',
      },
      {
        title: 'DAX Measures & KPIs',
        detail: 'Wrote 15+ DAX measures covering funnel conversion, time-to-fill, cost-per-hire, and attrition.',
      },
      {
        title: 'Multi-Page Reporting',
        detail:
          'Delivered a multi-page report surfacing sourcing-channel effectiveness and funnel drop-off by department.',
      },
    ],
    stack: ['Power BI', 'Power Query (M)', 'DAX', 'Data Modeling'],
    links: {},
    images: [talentlensShot2, talentlensShot3, talentlensShot4, talentlensShot5],
    caseStudy: {
      overview:
        'Interlink, the AI-powered recruitment platform I contributed to, handles the operational side of hiring: postings, AI-driven CV screening, and application tracking. What it does not do is answer the questions HR leadership actually asks once that data starts piling up — where are we losing candidates, which sourcing channels are worth the spend, and are the people we hire actually staying. TalentLens is the analytics layer built to answer those questions: a Power BI project simulating the recruitment and workforce data a platform like Interlink would generate at scale for a mid-sized tech company, taken through the full pipeline from raw, messy source data to a five-page interactive report.',
      situation:
        'A company using an ATS-style platform accumulates recruitment data by default — applications, offers, hires — but that data sits siloed and largely unused. Without a dedicated analytics layer, HR cannot see funnel drop-off by stage, cannot compare sourcing channels on anything beyond volume, and cannot connect hiring speed or source to how long a new hire actually stays. I set out to build the tool that closes that gap.',
      task: [
        'See where candidates are lost in the funnel, and at which stage',
        'Compare sourcing channels on cost, speed, and retention, not just volume',
        'Track whether hiring is happening on time and on budget',
        'Understand whether hiring speed or source correlates with early attrition',
      ],
      action: [
        {
          title: 'Data Preparation',
          body: 'I worked with a ten-table dataset (six dimension tables, four fact tables) built to mirror the shape and imperfections of a real ATS export. In Power Query I resolved duplicate candidate records, handled the distinction between true nulls and empty strings in blank location fields — a subtlety that trips up a straightforward Replace Values approach — converted a currency field stored as text ("LKR 165,000") into a clean number, and split a combined status field into two separate, analysis-ready columns using conditional logic.',
        },
        {
          title: 'Data Modeling',
          body: 'I built a star schema across eight related tables. The model included four separate fact tables each with their own date column linking back to a single date dimension, which meant navigating multiple ambiguous relationship path errors as the model grew — for example, activating the Application Stage to Requisition relationship created a second, indirect path to both Recruiter and Date that Power BI would not allow active simultaneously. Resolving each of these required identifying which relationship should be the source of truth and deliberately deactivating the redundant path, then reactivating specific ones on demand inside DAX with USERELATIONSHIP where needed, for instance to analyze offers by the date the offer itself was made rather than the date the underlying requisition opened.',
        },
        {
          title: 'DAX',
          body: 'I wrote over fifteen measures covering funnel conversion, average time to fill, cost per hire, offer acceptance rate, attrition rate, tenure of leavers, and year-over-year hiring trends, using CALCULATE with cross-table filtering, variables to avoid row context ambiguity inside iterators like AVERAGEX, and time intelligence functions such as SAMEPERIODLASTYEAR.',
        },
        {
          title: 'Reporting',
          body: 'The final report spans five pages, each scoped to one business question rather than being a generic collection of charts: an Executive Overview, a Funnel Analysis page built around a funnel visual and a department-by-stage matrix, a Source Effectiveness page comparing channels on cost, speed, and conversion, a Diversity and Workforce Composition page, and an Attrition and Quality of Hire page.',
        },
      ],
      result: [
        '77.76% offer acceptance rate against an 11.44% overall attrition rate, giving HR a baseline to track against future hiring cycles',
        'Average time to fill of 52 days, calculated by matching each requisition to its earliest linked hire date — a measure that required careful handling of row context across two related fact tables',
        'A funnel that narrows from 2,005 applications down to 430 hires, with the steepest drop-off consistently occurring between Resume Screened and Interview 1 across every department, the single clearest signal in the whole model for where a real hiring team should focus process improvements',
        'Source channel comparisons showing meaningful spread in applicant-to-hire conversion rate by channel, giving a concrete basis for reallocating sourcing spend rather than guessing',
      ],
      reflection:
        'The most valuable part of this project was not building the charts, it was the debugging. Diagnosing why a DAX measure returned blank despite every individual component testing correctly meant building isolated test measures, checking data types across related tables, and narrowing the problem down systematically rather than guessing. That process — forming a hypothesis, testing it, ruling it out, moving to the next one — is the same structured thinking a business analyst applies to any ambiguous problem, just applied here to a technical one.',
      note: 'The dataset used in this project is synthetic, generated to mirror the structure and realistic imperfections of a production ATS export.',
    },
  },
  {
    id: 'pocketly',
    name: 'Pocketly',
    tagline: 'Full-Stack Personal Finance Tracker',
    period: 'Personal Project · Live in Production',
    team: 'Solo',
    accent: 'mint',
    description:
      'A production MERN finance tracker with real authentication, real automation, and a reporting suite people actually use.',
    features: [
      {
        title: 'Full-Stack MERN Build',
        detail:
          'Built and deployed a full-stack MERN finance tracker (Render, Vercel, MongoDB Atlas), live in production.',
      },
      {
        title: 'Secure Authentication',
        detail:
          'Engineered secure JWT authentication with refresh-token reuse detection, bcrypt hashing, and a password-reset flow.',
      },
      {
        title: 'Automation & Reporting',
        detail:
          'Designed MongoDB aggregation pipelines, an automated recurring-transactions engine, and a multi-sheet ExcelJS/Recharts reporting suite.',
      },
      {
        title: 'Production Incident Fix',
        detail:
          'Diagnosed a production SMTP failure and migrated the email pipeline to a REST-based provider (Brevo) with zero downtime.',
      },
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'bcrypt', 'Recharts'],
    links: { github: 'https://github.com/svm04', live: 'https://pocketly-six.vercel.app' },
    apiUrl: 'https://pocketly-api-amba.onrender.com',
    images: [pocketlyShot1, pocketlyShot2, pocketlyShot3, pocketlyShot4],
    // a deeper, written case study — only Pocketly has one so far, but any
    // project can opt in by adding this object; ProjectDetail renders it
    // automatically when present.
    caseStudy: {
      overview:
        'Pocketly is a personal expense and budgeting app I built and deployed end-to-end — a React frontend, an Express/Node API, and a MongoDB database, running as two independently hosted services that talk to each other over a REST API. It’s not a tutorial clone left untouched; it’s a project I’ve kept building on past the first version, adding real features and fixing real production problems as they came up — the way an app actually behaves once people are using it, not just demoing it. Most expense trackers either oversimplify (a single running list) or overcomplicate (accounting software dressed up as a budgeting app). I wanted something in between: categorized tracking with real budgeting discipline behind it, but still fast enough for the two-second job of logging a coffee purchase.',
      whatItDoes:
        'At its core, Pocketly tracks income and expenses, each tagged with a category, an icon, an amount, a date, and an optional description. You can set a monthly budget per category and see live budget-versus-actual status with alerts when you’re close to or over a limit. Recurring transactions — rent, subscriptions, a salary deposit — post themselves automatically instead of being re-entered every month, and savings goals let you set a target and log contributions toward it. At the start of each month, a “Start New Month” action closes out the previous month, snapshots its totals and budget performance, and rolls budgets forward automatically. The dashboard ties it together with balance, income, and expense totals, a recent-transactions feed, and category/source breakdown charts — and a single “Export Report” button generates a multi-sheet Excel workbook with a yearly overview, full ledgers, a running-balance sheet, and a per-month budget breakdown.',
      architecture:
        'The frontend is a React 19 SPA built with Vite and Tailwind CSS v4, deployed on Vercel. The backend is an Express 5 API on Node.js, deployed on Render, backed by MongoDB Atlas via Mongoose. Authentication runs on JWTs with a short-lived access token paired with a rotating refresh token — each refresh issues a new pair and invalidates the old one, so a stolen or reused refresh token gets rejected. Passwords are hashed with bcrypt, password-reset emails go out through Brevo’s transactional email API, Excel exports are generated server-side with ExcelJS, and a daily cron job handles recurring transactions and month-end rollover in the background. Splitting the frontend and backend into separate deployments meant dealing with real distributed-system concerns at a small scale — CORS, environment-based API URLs, and the specific quirks of what a free hosting tier will and won’t allow over the network.',
      challenges: [
        {
          title: 'Diagnosing a production outage with a misleading symptom',
          body: 'The “Forgot Password” flow stopped working in production — the request would hang and time out with no useful error. The obvious suspects (bad email credentials, a misconfigured env var, an SMTP typo) weren’t it. The actual cause was an infrastructure-level policy: Render’s free tier blocks outbound traffic on standard SMTP ports, a change made after this project was first deployed — and an SMTP connection doesn’t fail loudly when that happens, it just hangs. The fix wasn’t to upgrade hosting tiers; it was to stop using SMTP entirely. I rewrote the email sender to call Brevo’s REST API over plain HTTPS instead, keeping the exact same function signature so the password-reset controller that calls it needed zero changes.',
        },
        {
          title: 'A subtle data-integrity bug in free-text categories',
          body: 'Categories are free text with autocomplete, not a fixed dropdown, which keeps the app flexible but opens the door to a specific bug: “Rent” and “Rent ” (with a trailing space) are different strings to MongoDB but the same category to a human — silently splitting one category into two slices on the dashboard chart and two entries in the budget list. Rather than patch it in one spot, I fixed it at every layer it could recur: added trim: true at the schema level, wrote a one-time backfill migration to clean existing records, and added defensive trimming inside every aggregation query that groups by category.',
        },
      ],
      security:
        'Security wasn’t bolted on at the end — I went back through the authentication flow specifically to close gaps after the core features were stable. Beyond JWT rotation and bcrypt hashing, I added rate limiting on login, registration, and password-reset endpoints (the last one sized to protect a limited daily email quota from being drained by a script), input validation on every auth field, guards against NoSQL-injection-style payloads on any field that reaches a database query, and helmet for baseline HTTP security headers — with one deliberate exception so user-uploaded profile pictures, served from a different origin, still load correctly.',
      reflection:
        'A few things I’d approach differently today: the frontend is currently a single ~1.2 MB JavaScript bundle, a natural target for code-splitting. Auth tokens live in localStorage, which is standard for an SPA but a trade-off worth revisiting under a more adversarial threat model. And the app is single-tenant in spirit — no admin role or multi-user layer — fine for a personal tool, but the first real architectural decision to make if it ever grew into something shared more broadly. What I’m most glad I did was resist patching symptoms: both bugs above could have been fixed narrower and faster, but going one layer deeper each time is what kept them from resurfacing later in a different shape.',
    },
  },
  {
    id: 'race-track-circuit',
    name: 'Race-Track Circuit',
    tagline: 'IoT Sensor-Based Racing System',
    period: 'First-Year Team Project',
    team: 'CodeByBit, ITM Group 4 · 5 members',
    accent: 'coral',
    description: 'Where the code meets hardware — a live leaderboard fed by real sensors on a physical race track.',
    features: [
      {
        title: 'Real-Time Web Dashboard',
        detail:
          'Built the full race-tracking website (React/Vite, Node/Express/WebSocket) with a live leaderboard and real-time stats.',
      },
      {
        title: 'Sensor Integration',
        detail:
          'Integrated a TCRT 5000 IR sensor at the starting line to detect the car and trigger real-time race data transfer to the website.',
      },
      {
        title: 'Embedded Display Output',
        detail: 'Configured a 1.8" SPI TFT display on the ESP32 to show live game timer and stats from the website.',
      },
    ],
    stack: ['React (Vite)', 'Node.js', 'Express', 'WebSocket', 'Arduino/ESP32'],
    links: { github: 'https://github.com/svm04' },
    images: [],
    caseStudy: {
      overview:
        'Race-Track Circuit is a smart RC car racing game built around a physical track with motor-controlled obstacles and embedded sensors. The car is fitted with sensors that detect movement, acceleration, and collisions, triggering LEDs for each action, while the track itself features sensor-responsive obstacles — servo-driven barriers, a stepper-driven track shift — that react to the car’s position in real time. A companion website displays live race data — timers, lap counts, and collisions — turning a single-player physical race into something with a persistent, competitive record.',
      sections: [
        {
          heading: 'Aim',
          type: 'paragraph',
          content:
            'Develop an intelligent RC car racing system combining IoT technology, smart sensors, and motor-controlled obstacles to deliver an immersive, interactive racing experience.',
        },
        {
          heading: 'Objectives',
          type: 'bullets',
          content: [
            'Design an interactive RC car with real-time crash detection and feedback',
            'Build a track with sensor-responsive obstacles, including lap-progress tracking',
            'Integrate an LCD/TFT display showing race statistics (time, laps, crashes)',
            'Develop a web interface for users to analyze race data and leaderboard stats',
          ],
        },
        {
          heading: 'My Role & Contribution',
          type: 'bullets',
          content: [
            'Built the full race-tracking website end-to-end — a React (Vite) frontend and a Node.js/Express/WebSocket backend — providing a live leaderboard and real-time race data as the game was played.',
            'Integrated a TCRT5000 IR sensor at the starting line to detect the car and trigger real-time data transfer from the track hardware to the website, so the moment a race began, the dashboard reflected it.',
            'Configured a 1.8" SPI TFT display on the ESP32 to fetch and show the live game timer and final race stats pulled from the website backend, closing the loop between the physical track and the web dashboard.',
            'Soldered the display and start sensor to the PCB, and contributed to the physical construction of the track (painting and assembly), working alongside teammates who owned the servo-barrier logic, the stepper-driven track shift, the ultrasonic obstacle sensor, and the PCB/power design.',
          ],
        },
        {
          heading: 'Technical Approach',
          type: 'paragraph',
          content:
            'The system runs on an ESP32 microcontroller communicating over Wi-Fi. Sensor events on the track — an infrared trigger at the starting line, an accelerometer on the car, an ultrasonic sensor for obstacle detection — are captured and relayed to the website backend via HTTP polling, where they update a live game state. The frontend polls this state to keep the leaderboard and live timer in sync, while the TFT display on the physical car mirrors the same data locally, so a player gets feedback both on the track and on-screen without needing to check a phone or laptop mid-race. Game logic was kept intentionally simple to make the physical build the star: a single race consists of one lap, triggered automatically when the IR sensor detects the car, with a hard four-minute cap to keep races fast-paced and the game auto-ending if the limit is exceeded.',
        },
        {
          heading: 'Challenges & Solutions',
          type: 'bullets',
          content: [
            'Syncing hardware events with a web dashboard in real time meant the sensor-to-website pipeline had to be reliable even over a track built from raw components on a breadboard before being moved to a soldered PCB — this pushed the team toward incremental testing (breadboard → PCB → full assembly) rather than building everything at once.',
            'Keeping the on-car display and the website in agreement required the TFT display to poll the same backend the website used, rather than maintaining a separate source of truth, which kept the two views from drifting out of sync during a race.',
          ],
        },
        {
          heading: 'Outcome',
          type: 'paragraph',
          content:
            'A working physical race track with LED-lit lane markings, sensor-triggered obstacles, and a car instrumented with collision and motion sensors, paired with a live web dashboard showing real-time leaderboard and race stats — successfully demonstrated as a complete, end-to-end interactive racing system.',
        },
      ],
    },
  },
  {
    id: 'quill',
    name: 'Quill',
    tagline: 'Blog Management System',
    period: 'Academic Project',
    team: 'Solo',
    accent: 'mint',
    description: 'A secure, role-aware blogging platform built on classic PHP/MySQL fundamentals.',
    features: [
      {
        title: 'Role-Based Blog Platform',
        detail:
          'Built a secure PHP/MySQL blog platform with hashed authentication, role-based access control, and full CRUD post management.',
      },
      {
        title: 'Session Security Hardening',
        detail: 'Enforced server-side session validation to block direct dashboard URL access by unauthenticated users.',
      },
    ],
    stack: ['PHP', 'MySQL'],
    links: { github: 'https://github.com/svm04' },
    images: [quillShot1],
    caseStudy: {
      overview:
        'Quill is a secure, full-stack blog management platform built to demonstrate authentication, access control, and content management patterns in a real PHP/MySQL application — the kind of system a small publication or internal team blog might actually run on. Users can register, log in, and manage their own posts, while admins get a dedicated dashboard to oversee all content and categories across the platform.',
      sections: [
        {
          heading: 'My Role & Contribution',
          type: 'bullets',
          content: [
            'Designed and built the authentication system, including registration, login, and password hashing via PHP’s password_hash(), so credentials are never stored in plain text.',
            'Implemented role-based access control, separating standard users (who manage their own posts) from admins (who can manage all posts and categories platform-wide).',
            'Closed a direct-access gap by enforcing server-side session validation — if someone tries to reach the dashboard via a direct URL without being authenticated, they’re redirected to the login page rather than being allowed to view protected content.',
            'Built the admin dashboard, giving admins a post overview with edit/delete controls and the ability to create and manage categories for organizing content.',
            'Implemented full CRUD for blog posts, with category-based organization and dynamic, database-driven rendering so the site reflects the current state of the database rather than static pages.',
            'Designed a responsive UI across the login, registration, and dashboard views, including styled success/error alerts for events like invalid logins or failed registrations.',
          ],
        },
        {
          heading: 'Technical Approach',
          type: 'paragraph',
          content:
            'The system follows a fairly classic procedural PHP + MySQL architecture: session-based authentication gates access to protected routes, with every dashboard-facing request re-validated server-side rather than trusting client-side state. Passwords are hashed before storage, and user input is validated on both the registration and post-creation paths to reduce the risk of malformed or malicious data reaching the database. Posts and categories are modeled relationally in MySQL, with the admin view querying across all users’ content while the standard user view is scoped to their own posts.',
        },
        {
          heading: 'Challenges & Solutions',
          type: 'bullets',
          content: [
            'Preventing unauthorized dashboard access was the core security concern for the project — rather than relying on hiding a link in the UI, access control was enforced at the session layer, so even a user who knew or guessed the dashboard URL couldn’t reach it without a valid session.',
            'Balancing admin and user permissions in the same codebase meant designing role checks that applied consistently across post and category management, rather than duplicating logic per view.',
          ],
        },
        {
          heading: 'Outcome',
          type: 'paragraph',
          content:
            'A working blog platform with secure authentication, enforced access control, and a functional admin/user permission split — built to practice the security fundamentals (hashing, session validation, role separation) that show up in almost any real-world content management system.',
        },
      ],
    },
  },
]

export const extracurricular = [
  {
    org: 'IEEE WIE Student Branch Affinity Group, University of Moratuwa',
    role: 'Co-Chair — FestX 2025',
    period: 'Jul – Sep 2025',
    detail:
      'Co-chaired FestX 6.0, the IEEE WIE UoM Inauguration, managing the Finance and PR Committees end-to-end — budgeting, sponsor communications, and promotional rollout — while coordinating cross-team tasks between logistics, design, and program committees to keep the event on schedule.',
  },
  {
    org: 'IEEE Student Branch, University of Moratuwa',
    role: 'Finance Committee Member — MoraForesight 3.0',
    period: 'Nov 2024 – Aug 2025',
    detail:
      'Pitched to and cold-called prospective sponsors for MoraForesight 2025, helping secure event funding, and supported day-to-day financial operations — tracking budgets and expenses — across the nearly year-long lead-up to the event.',
  },
  {
    org: 'Rotaract Club, University of Moratuwa',
    role: 'Co-Chair, MentHer Initiative & Swim or Sink',
    period: 'Oct 2024 – Feb 2025',
    detail:
      'Co-led MentHer, a career-development mentorship program pairing female undergraduates with mentors for guidance on career planning, and separately organized Swim or Sink, a beginner swimming event from concept to execution — coordinating venue logistics, partnerships, and a volunteer team throughout.',
  },
  {
    org: 'Leo Club, University of Moratuwa',
    role: 'Design Committee Coordinator',
    period: '',
    detail:
      'Coordinated the design committee for Celestia, the club’s cultural dinner — overseeing visual direction for event branding, invitations, and on-the-day signage, and working with the wider organizing team to keep design output aligned with the event timeline.',
  },
]
