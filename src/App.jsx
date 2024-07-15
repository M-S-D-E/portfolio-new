import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Overview from "./pages/dashboard/pages/overview";
import Skills from "./pages/dashboard/pages/skills";
import DashboardLayout from "./pages/dashboard/layouts";
import Achievements from "./pages/dashboard/pages/achievements";
import About from "./pages/dashboard/pages/about";
import Socials from "./pages/dashboard/pages/socials";
import Contact from "./pages/dashboard/pages/contact";
import Projects from "./pages/dashboard/pages/projects";

function App() {
  const router = createBrowserRouter([
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
          path: "about",
          element: <About />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
