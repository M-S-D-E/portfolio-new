import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "./pages/auth/signUp";
import Overview from "./pages/dashboard/pages/overview";
import Skills from "./pages/dashboard/pages/skills";
import DashboardLayout from "./pages/dashboard/layouts";
import Achievements from "./pages/dashboard/pages/achievements";
import Contact from "./pages/dashboard/pages/contact";
import Projects from "./pages/dashboard/pages/projects";
import Experiences from "./pages/dashboard/pages/experiences";
import Profile from "./pages/dashboard/pages/profile";
import Education from "./pages/dashboard/pages/education";
import Volunteering from "./pages/dashboard/pages/volunteering";
import Preview from "./pages/preview";
import Landing from "./pages/landing";
import AddSkill from "./pages/dashboard/pages/addSkill";
import AddProject from "./pages/dashboard/pages/addProject";
import AddAchievement from "./pages/dashboard/pages/addAchievement";
import AddExperience from "./pages/dashboard/pages/addExperience";
import AddVolunteering from "./pages/dashboard/pages/addVolunteering";
import AddEducation from "./pages/dashboard/pages/addEducation";
import AuthLayout from "./pages/auth/layouts/authLayout";
import { LogOut } from "lucide-react"; 
import { apiGetUserDetails } from "./services/preview";
import { toast } from "react-toastify"; 
import AddProfile from "./pages/dashboard/pages/addProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "signup",
          element: <SignUpForm />,
        },
      ],
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
        {
          path: "logout",
          element: <LogOut />,
        },
        {
          path: "skills/add-skill",
          element: <AddSkill />,
        },
        {
          path: "achievements/add-achievement",
          element: <AddAchievement />,
        },
        {
          path: "education/add-education",
          element: <AddEducation />,
        },
        {
          path: "experiences/add-experience",
          element: <AddExperience />,
        },
        {
          path: "volunteering/add-volunteering",
          element: <AddVolunteering />,
        },
        {
          path: "projects/add-project",
          element: <AddProject />,
        },
        {
          path: "profile/add-profile",
          element: <AddProfile />
        },
      ],
    },
    {
      path: "preview/:username",
      element: <Preview />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occurred");
          return null;
        }
      },
    },
    // {
    //   path: "preview",
    //   element: <Preview />
    // }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
