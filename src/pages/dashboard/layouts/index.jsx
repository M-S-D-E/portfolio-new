// import { Outlet } from 'react-router-dom'
// import Sidebar from '../../../components/Sidebar'
// import { getToken } from '../../dashboard/layouts/pagesLayout'
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { apiGetProfile } from "../../../services/profile";
import { useEffect, useState } from "react";
import { getToken } from "../../../services/config";
import { toast } from "react-toastify";

const DashboardLayout = () => {
    const [profile, setProfile] = useState();
    
    const token = getToken();

    const getUserProfile = async () => {
        try {
          const response = await apiGetProfile();
          const userProfileData = response?.data.profile;
          setProfile(userProfileData);
        } catch (error) {
          toast.error("An error occured");
        }
      };

      // useEffect(() => {
      //   if (token) {
      //     getUserProfile();
      //   }
      // }, []);

    //   useEffect(() => {
    //     if (token) {
    //       getUserProfile();
    //     }
    //   }, []);
    // if (!token) {
    //     return <Navigate to="/login" />;
    // }
    return (
        <div className="flex">
            <Sidebar />
            <div className='w-full'>
            <Outlet context={[profile, setProfile]} />
            </div>
        </div>
    )
}

export default DashboardLayout
