import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { useEffect, useState } from "react";
import { getDetails } from "../../../services/config";

const DashboardLayout = () => {
  const [user, setUser] = useState();

  const { token, firstName, lastName, userName } = getDetails();

    useEffect(() => {
      if (token) {
        setUser({
          firstName,
          lastName,
          userName,
        });
      }
    }, []);
  
    
    if (!token) {
        return <Navigate to="/signup" />;
    }



    // const getAvatar = () => {
    //   if (!user) return "N/A";
    //   const initials = `${firstName[0]}${lastName[0]}`;
    //   return initials.toUpperCase();
    // };

  
    return (
        <div className="flex">
            <Sidebar />
            <div className='w-full'>
            <Outlet context={[user, setUser]} />
            </div>
        </div>
    )
}

export default DashboardLayout
