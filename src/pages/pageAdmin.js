import { Outlet } from "react-router-dom"
import NavControl from "../components/NavigationControl"

const AdminPage = () => {
    return <div className="admin-content">
        <NavControl/>
        <Outlet/>
    </div>
}

export default AdminPage