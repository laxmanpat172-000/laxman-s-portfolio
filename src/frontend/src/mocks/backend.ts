import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getProjects: async () => [
    {
      id: BigInt(1),
      title: "Smart Attendance System",
      description:
        "A face-recognition based attendance system built with Python and OpenCV. Automates student attendance tracking in college labs.",
      techStack: ["Python", "OpenCV", "Flask", "SQLite"],
      githubLink: "https://github.com/laxmanpatel/smart-attendance",
      demoLink: "https://demo.example.com/attendance",
    },
    {
      id: BigInt(2),
      title: "Student Result Portal",
      description:
        "A web-based portal for students to view exam results, CGPA, and grade history. Built with HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/laxmanpatel/result-portal",
      demoLink: "https://demo.example.com/results",
    },
    {
      id: BigInt(3),
      title: "Weather App",
      description:
        "Real-time weather forecasting application using OpenWeatherMap API. Displays temperature, humidity, and 5-day forecast.",
      techStack: ["HTML", "CSS", "JavaScript", "REST API"],
      githubLink: "https://github.com/laxmanpatel/weather-app",
      demoLink: "https://demo.example.com/weather",
    },
    {
      id: BigInt(4),
      title: "Library Management System",
      description:
        "A C++ console-based library system with book issue/return, fine calculation, and member management features.",
      techStack: ["C++", "File I/O", "OOP"],
      githubLink: "https://github.com/laxmanpatel/library-mgmt",
      demoLink: "",
    },
  ],

  getSkills: async () => [
    {
      name: "C Programming",
      proficiency: BigInt(85),
      iconName: "code",
      color: "#00bcd4",
    },
    {
      name: "C++",
      proficiency: BigInt(80),
      iconName: "code2",
      color: "#7c3aed",
    },
    {
      name: "Python",
      proficiency: BigInt(75),
      iconName: "python",
      color: "#f59e0b",
    },
    {
      name: "HTML",
      proficiency: BigInt(90),
      iconName: "html",
      color: "#e44d26",
    },
    {
      name: "CSS",
      proficiency: BigInt(85),
      iconName: "css",
      color: "#264de4",
    },
    {
      name: "Problem Solving",
      proficiency: BigInt(80),
      iconName: "brain",
      color: "#10b981",
    },
  ],

  getContactSubmissions: async () => [],

  submitContact: async (_input) => ({
    __kind__: "ok",
    ok: BigInt(1),
  }),
};
