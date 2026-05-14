import PortfolioTypes "../types/portfolio";

module {
  public type Project = PortfolioTypes.Project;
  public type Skill = PortfolioTypes.Skill;

  public func getProjects() : [Project] {
    [
      {
        id = 1;
        title = "Calculator App";
        description = "A fully functional command-line calculator built in C supporting basic arithmetic operations, trigonometric functions, and memory storage. Features a clean terminal UI with error handling for invalid inputs.";
        techStack = ["C", "GCC", "Make"];
        githubLink = "#";
        demoLink = "#";
      },
      {
        id = 2;
        title = "Todo Application";
        description = "A feature-rich web-based Todo app with task creation, editing, deletion, and priority tagging. Built with Python (Flask) on the backend and HTML/CSS for a responsive, user-friendly interface.";
        techStack = ["Python", "Flask", "HTML", "CSS"];
        githubLink = "#";
        demoLink = "#";
      },
      {
        id = 3;
        title = "Weather Dashboard";
        description = "An interactive weather dashboard that fetches real-time weather data using the OpenWeatherMap API. Displays temperature, humidity, wind speed, and a 5-day forecast with dynamic background visuals.";
        techStack = ["Python", "Requests", "HTML", "CSS"];
        githubLink = "#";
        demoLink = "#";
      },
      {
        id = 4;
        title = "Expense Tracker";
        description = "A console-based personal finance manager written in C++ that tracks income and expenses by category. Generates monthly summaries, visual bar charts in the terminal, and supports CSV export.";
        techStack = ["C++", "STL", "File I/O"];
        githubLink = "#";
        demoLink = "#";
      },
      {
        id = 5;
        title = "Chat System";
        description = "A real-time multi-client chat application built with Python using TCP sockets. Supports multiple simultaneous users in a shared chat room with server-side message broadcasting and graceful disconnect handling.";
        techStack = ["Python", "Sockets", "Threading"];
        githubLink = "#";
        demoLink = "#";
      },
    ]
  };

  public func getSkills() : [Skill] {
    [
      {
        name = "C";
        proficiency = 85;
        iconName = "c";
        color = "#A8B9CC";
      },
      {
        name = "C++";
        proficiency = 80;
        iconName = "cpp";
        color = "#00599C";
      },
      {
        name = "Python";
        proficiency = 78;
        iconName = "python";
        color = "#3776AB";
      },
      {
        name = "HTML";
        proficiency = 88;
        iconName = "html";
        color = "#E34F26";
      },
      {
        name = "CSS";
        proficiency = 82;
        iconName = "css";
        color = "#1572B6";
      },
    ]
  };
};
