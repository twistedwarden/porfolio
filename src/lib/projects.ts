export type Project = {
  id: number
  title: string
  role: string
  year: string
  tags: string[]
  description: string
  /** Replace with your screenshot path, e.g. "/screenshots/scholarship.png" */
  screenshot: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Education & Scholarship Management",
    role: "Lead Developer",
    year: "2025 – 2026",
    tags: ["Laravel", "React", "Tailwind", "MySQL"],
    description:
      "Developed a web-based scholarship application portal for a local city government, digitizing the end-to-end application process to reduce manual workload and accelerate scholar selection. Built a centralized admin dashboard enabling city officials to manage applicants, verify requirements, and oversee fund distribution. Integrated an AI-powered chatbot to guide students through eligibility and submission, and AI-driven insights to support data-informed decision-making.",
    screenshot: "screenshots/proj1.png",
  },
  {
    id: 2,
    title: "Attendance Management",
    role: "Developer",
    year: "2025",
    tags: ["Node.js", "React", "Tailwind", "MySQL"],
    description:
      "Fingerprint-based attendance system automating student tracking through biometric verification. Built a real-time web dashboard for administrators, with automated parent notifications sent the moment attendance is logged.",
    screenshot: null, // → "/screenshots/attendance.png"
  },
  {
    id: 3,
    title: "Budget Management",
    role: "Developer",
    year: "2025",
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    description:
      "Budget management module inside an e-commerce financial department. Enables cross-department allocation, real-time expenditure monitoring with overspend alerts, and reporting tools for clear visibility into spending patterns.",
    screenshot: null, // → "/screenshots/budget.png"
  },
  {
    id: 4,
    title: "Library Management",
    role: "Scrum Master / Lead Developer",
    year: "2024",
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    description:
      "Web-based library system digitizing book borrowing and inventory for school use. Real-time availability tracking, advance reservation requests, and comprehensive records for books, students, and staff. Led the team as Scrum Master through full sprint lifecycle.",
    screenshot: null, // → "/screenshots/library.png"
  },
]

