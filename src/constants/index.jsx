import {
    Award,
    Badge,
    BookA,
    BookText,
    BriefcaseBusiness,
    FolderKanban,
    GraduationCap,
    LayoutDashboard,
  } from "lucide-react";
  
  const K = {
    NAVLINKS: [
      {
        icon: <LayoutDashboard />,
        text: "Overview",
        link: "/dashboard",
      },
      {
        icon: <BookText />,
        text: "Skills",
        link: "/dashboard/skills",
      },
      {
        icon: <FolderKanban />,
        text: "Projects",
        link: "/dashboard/projects",
      },
      {
        icon: <BriefcaseBusiness />,
        text: "Experiences",
        link: "/dashboard/experiences",
      },
      {
        icon: <GraduationCap/>,
        text: "Education",
        link: "/dashboard/education",
      },
      {
        icon: <Award />,
        text: "Achievements",
        link: "/dashboard/achievements",
      },
    ],
    OVERVIEW: [
      {
        id: "skills",
        icon: <BookText />,
        text: "Skills",
      },
      {
        id: "projects",
        icon: <FolderKanban />,
        text: "Projects",
      },
      {
        id: "experiences",
        icon: <BriefcaseBusiness />,
        text: "Experiences",
      },
      {
        id: "achievements",
        icon: <Award />,
        text: "Achievements",
      },
      {
        id: "education",
        icon: <BookA />,
        text: "Education",
      },
      {
        id: "volunteering",
        icon: <Badge />,
        text: "Volunteering",
      },
    ],
    SKILLS: [
      {
        name: "JavaScript",
        levelOfProficiency: "Intermediate",
      },
      {
        name: "HTML",
        levelOfProficiency: "Advanced",
      },
      {
        name: "CSS",
        levelOfProficiency: "Beginner",
      },
      {
        name: "Typescript",
        levelOfProficiency: "Beginner",
      },
      {
        name: "React Native",
        levelOfProficiency: "Beginner",
      },
      {
        name: "Solidity",
        levelOfProficiency: "Beginner",
      },
    ],
    EDUCATION : [
      {
        title: 'B.Sc. Computer Science',
        description: 'Graduated with honors from University of Ghana.',
        deleted: false,
        edit: true,
      },
      {
        title: 'M.Sc. Data Science',
        description: 'Completed with distinction from Technical Institute.',
        deleted: false,
        edit: true,
      },
      {
        title: 'B.Sc. Computer Science',
        description: 'Graduated with honors from Stanford University.',
        deleted: false,
        edit: true,
      },
      {
        title: 'M.Sc. Data Science',
        description: 'Completed with distinction from Institute of Professional Studies.',
        deleted: false,
        edit: true,
      },
    ],
    
  };

  export default K;