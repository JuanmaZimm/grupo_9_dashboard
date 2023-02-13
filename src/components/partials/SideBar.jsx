import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function SideBar() {
   return (
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
               <img className="w-100" src={logo} alt="Digital House" />
            </div>
         </a>

         <hr className="sidebar-divider my-0" />

         <li className="nav-item active">
            <Link className="nav-link" to="/">
               <i className="fas fa-fw fa-tachometer-alt"></i>
               <span>Dashboard - AllStartTech</span>
            </Link>
         </li>

         <hr className="sidebar-divider" />

         <div className="sidebar-heading">Actions</div>

         <li className="nav-item">
            <Link className="nav-link collapsed" to="/categories">
               <i className="fas fa-fw fa-folder"></i>
               <span>Categories</span>
            </Link>
         </li>

         <li className="nav-item">
            <Link className="nav-link" to="/detail">
               <i className="fas fa-fw fa-chart-area"></i>
               <span>Last product added</span>
            </Link>
         </li>

         <li className="nav-item">
            <Link className="nav-link" to="/tables">
               <i className="fas fa-fw fa-table"></i>
               <span>Tables</span>
            </Link>
         </li>

         <hr className="sidebar-divider d-none d-md-block" />
      </ul>
   )
}