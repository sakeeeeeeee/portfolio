export type ProjectCategory = 'Web' | 'Mobile' | 'AI' | 'Research'
export type Project = {
  id: string; title: string; eyebrow: string; description: string; category: ProjectCategory; featured?: boolean; year: string; accent: string; image: string; tags: string[]; github?: string; demo?: string
  problem: string; goal: string; role: string; process: string; challenges: string; solution: string; result: string; learned: string; future: string; screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 'hotelaz',
    title: 'Hotelaz — Hotel Management System',
    eyebrow: 'Featured case study',
    description: 'A full-featured hotel management web app: room browsing, reservations with overbooking protection, payment-proof upload, email notifications, and an admin dashboard with revenue statistics.',
    category: 'Web',
    featured: true,
    year: '2025',
    accent: '#6ee7c8',
    image: '/screenshots/hotelaz-cover.jpg',
    tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/sakeeeeeeee/hotelaz',
    problem: 'Small hotel operations rely on scattered tools — paper records or spreadsheets — to manage rooms, bookings, and payments. This causes double-bookings, lost reservations, and no clear picture of revenue.',
    goal: 'Build a complete hotel management system where guests can book rooms self-service and staff can control every operation — rooms, bookings, galleries, testimonials, users — from one dashboard.',
    role: 'Solo developer — database design, backend, frontend UI, and deployment setup.',
    process: 'Started with the data model (rooms, room units, reservations, testimonials, galleries), then built the guest booking flow, then the admin panel. Iterated with feature tests after the core worked.',
    challenges: 'The hardest part was availability logic: preventing overbooking when multiple reservations overlap partially with the requested date range. Also handling file uploads securely and separating guest/admin authorization.',
    solution: 'Implemented an overlapping date-range query compared against each room\'s unit quantity — a booking is only accepted if active (non-cancelled) reservations for that range stay below the room count. Each room type tracks individual physical units (RoomUnit) with their own status. SMTP credentials and uploads are handled via validated storage and environment config.',
    result: '18 automated tests (43 assertions) covering the reservation flow, availability logic, authorization, and email delivery — all passing on CI (GitHub Actions). The app sends confirmation emails with a unique booking reference (resi) generated on confirmation.',
    learned: 'Designing correctness-critical queries (overlap detection), structuring a Laravel app with middleware-based role separation, policies for resource ownership, and testing business rules instead of just CRUD.',
    future: 'Add a payment gateway integration (the current flow records payment proofs manually), a calendar view for admins, and rate-based pricing on peak dates.',
    screenshots: [
      '/screenshots/hotelaz-home.jpg',
      '/screenshots/hotelaz-rooms.jpg'
    ]
  },
  {
    id: 'xauusd-ict-bot',
    title: 'XAUUSD ICT Trading Signal Bot',
    eyebrow: 'Algorithmic trading system',
    description: 'A rule-based trading signal bot for Gold (XAUUSD) implementing the ICT Silver Bullet strategy: FVG detection, session filters, smart risk management, Telegram integration, and an analytics dashboard.',
    category: 'AI',
    year: '2026',
    accent: '#a7b8ff',
    image: '/screenshots/ictbot-dashboard.jpg',
    tags: ['Python', 'MetaTrader 5', 'SQLite', 'Streamlit', 'Telegram Bot'],
    github: 'https://github.com/sakeeeeeeee/xauusd-ict-bot',
    problem: 'Manual intraday traders miss setups because monitoring charts during London and New York sessions is impractical, and emotions break consistency. Existing bots are black boxes with no risk validation.',
    goal: 'Automate a strict, rule-based ICT strategy end-to-end: detect setups mechanically, validate every trade against risk limits, deliver signals instantly, and record outcomes for measurable evaluation.',
    role: 'Solo developer — strategy engine, MT5 integration, risk manager, bot infrastructure, and dashboard.',
    process: 'Studied the ICT Silver Bullet methodology first, translated it into deterministic rules (H4 bias → FVG retest → confluence scoring), then layered session filters, an anti-overfitting profile, and walk-forward backtesting to validate parameters before going live.',
    challenges: 'Preventing overfitting was central: a strategy tuned to historical data fails live. Also, running the scan engine and the interactive Telegram interface in one process without blocking each other.',
    solution: 'Built a Dual-Tier architecture: the core engine runs uninterrupted on the main thread (scanning, FVG detection, SQLite persistence) while the Telegram interface answers commands asynchronously in a background thread. Risk manager computes ATR-based stop loss, enforces R:R bounds, and validates min/max risk. A backtest engine with walk-forward train/test splits and an offline Gemini-analysis script (weekly, manual) complete the loop — LLMs are explicitly excluded from live execution.',
    result: 'A complete pipeline: MT5 data → signal detection → risk validation → Telegram broadcast with charts → outcome tracking in SQLite → Streamlit analytics showing historical win rate. Covered by unit tests for risk and analysis modules.',
    learned: 'Translating a discretionary trading methodology into deterministic code, walk-forward testing to fight overfitting, threading and async design for responsive bots, and separating measurable evaluation from execution.',
    future: 'Expand to multi-symbol scanning, add proper position-sizing from account equity, and publish the backtest reports as static pages.',
    screenshots: [
      '/screenshots/ictbot-dashboard.jpg'
    ]
  },
  {
    id: 'scrape-x',
    title: 'Twitter/X Keyword Scraper',
    eyebrow: 'Data & automation',
    description: 'A Python utility that collects posts matching a keyword with cookie-based account rotation, exporting results to CSV and JSON for analysis.',
    category: 'Research',
    year: '2026',
    accent: '#ffb86c',
    image: '/screenshots/scrapex-terminal.jpg',
    tags: ['Python', 'Twikit', 'CSV', 'JSON'],
    github: 'https://github.com/sakeeeeeeee/scrape_x',
    problem: 'Researchers and analysts need bulk access to public posts matching specific keywords, but exporting them manually is slow and the official API is costly.',
    goal: 'Build a lightweight, configurable scraper that collects keyword-matched posts reliably and outputs clean structured data ready for analysis.',
    role: 'Solo developer — design, implementation, and testing.',
    process: 'Prototyped with the Twikit library against a single account, then added rotation across multiple cookie sessions to survive rate limits, and standardized output formats.',
    challenges: 'Rate limiting and session invalidation: long runs would die mid-collection. Handling pagination and duplicate posts across pages also needed care.',
    solution: 'Implemented automatic cookie-based account rotation — when one session hits a limit, the scraper transparently switches to the next account and continues. Results are deduplicated and exported to both CSV and JSON.',
    result: 'A working command-line tool that collects keyword-matched posts continuously without manual intervention, used for personal research datasets.',
    learned: 'Practical web-data ethics and rate-limit handling, session management, and designing for failure (resumable runs, structured logging).',
    future: 'Add keyword scheduling, media download support, and a simple summary report of collection statistics.',
    screenshots: []
  },
  {
    id: 'crud-form-sekolah',
    title: 'CRUD Form Sekolah',
    eyebrow: 'Learning in public',
    description: 'A PHP CRUD application for managing school data — the project where I first connected forms, databases, and server-side validation into one working system.',
    category: 'Web',
    year: '2025',
    accent: '#f38ba8',
    image: '/screenshots/crud-form.jpg',
    tags: ['PHP', 'MySQL', 'CRUD'],
    github: 'https://github.com/sakeeeeeeee/CRUD-form-sekolah',
    problem: 'School administrative data (students, classes, records) is often managed on paper, with no validation and no history.',
    goal: 'Learn the fundamentals of database-backed web applications by building complete Create, Read, Update, and Delete flows for school data.',
    role: 'Solo developer — full stack, from schema to UI.',
    process: 'Designed the schema, built each CRUD operation one at a time, and hardened the forms with server-side validation after the happy paths worked.',
    challenges: 'Understanding how form submissions map to database operations, preventing invalid or duplicate entries, and writing SQL safely.',
    solution: 'A straightforward PHP + MySQL application with prepared statements, server-side validation on every write operation, and clean feedback for each action.',
    result: 'A functional data-management app that became the foundation for my later Laravel work — the same concepts, now with a framework.',
    learned: 'Core CRUD mechanics, SQL injection awareness (prepared statements), and why server-side validation is non-negotiable.',
    future: 'Rebuild it in Laravel as a comparison exercise to show the same problem solved at a higher abstraction level.',
    screenshots: []
  }
]

export const skills = [
  { title: 'Programming', items: ['PHP', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Web Development', items: ['Laravel', 'HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { title: 'Tools & Practices', items: ['Git & GitHub', 'GitHub Actions (CI)', 'PHPUnit', 'Vite', 'Streamlit'] }
]
export const timeline = [
  { year: '2023', title: 'Started learning programming', body: 'Began my informatics degree at Universitas Putera Batam and wrote my first HTML pages and simple programs.' },
  { year: '2025', title: 'Built my first serious projects', body: 'Shipped my first database-backed web apps in PHP, then moved to Laravel with Hotelaz — a complete hotel management system with tests and CI.' },
  { year: '2026', title: 'Automation, bots & testing', body: 'Built a Python trading-signal bot with MetaTrader 5 and Telegram, plus data tooling. Now focused on testing, CI, and writing software that holds up under real use.' }
]
export const achievements = [
  { type: 'Certificate', title: 'Apple Developer Academy @ Infinite Learning', org: 'Batam, Indonesia', year: '2026', detail: 'Applying for the 2027 cohort — preparing through Apple ecosystem learning paths.' },
  { type: 'Project', title: 'Open-source portfolio on GitHub', org: 'github.com/sakeeeeeeee', year: '2026', detail: 'Web apps, automation tools, and a tested trading bot with continuous integration.' },
  { type: 'Learning', title: 'Test-driven & CI workflows', org: 'Self-directed', year: '2026', detail: 'Added automated test suites and GitHub Actions pipelines to my projects — 18 feature tests on my main web app.' }
]
