import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
           <div className='w-full'> <Outlet /> </div>
        </div>
    )
}

export default DashboardLayout
