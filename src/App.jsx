import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/sign-up"
import Login from "./pages/login"
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
      element: <SignUp />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "preview",
      element: <Preview />
    }
  ])
  return <RouterProvider router={router} />;
}
export default App