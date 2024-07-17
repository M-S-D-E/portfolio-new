import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Overview from "./pages/dashboard/pages/overview";
import Skills from "./pages/dashboard/pages/skills";
import DashboardLayout from "./pages/dashboard/layouts";
import Achievements from "./pages/dashboard/pages/achievements";
import Socials from "./pages/dashboard/pages/socials";
import Contact from "./pages/dashboard/pages/contact";
import Projects from "./pages/dashboard/pages/projects";
import Experiences from "./pages/dashboard/pages/experiences";
import Profile from "./pages/dashboard/pages/profile";
import Education from "./pages/dashboard/pages/education";
import Volunteering from "./pages/dashboard/pages/volunteering";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import Landing from "./pages/landing";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "achievements",
          element: <Achievements />,
        },
        {
          path: "socials",
          element: <Socials />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "experiences",
          element: <Experiences />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "volunteering",
          element: <Volunteering />,
        },
      ],
    },
    {
      path: "preview",
      element: <Preview />
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
