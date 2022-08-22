import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from "./../../context/darkModeContext";


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
          <span className='logo'>my store</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <CategoryIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <Link to="/orders" style={{textDecoration:"none"}}>
          <li>
            <ListAltIcon className="icon"/>
            <span>Orders</span>
          </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <span className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></span>
        <span className="colorOption"  onClick={()=>dispatch({type:"DARK"})}></span>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Sidebar