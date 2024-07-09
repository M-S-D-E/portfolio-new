import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/sign-up"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard";

function App() {
  const router = createBrowserRouter([
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
    }
  ])
  return <RouterProvider router={router} />;
}
export default App