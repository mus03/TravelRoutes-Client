import { Link, NavLink } from "react-router-dom";
import  {Toaster} from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
// import { MdTravelExplore } from "react-icons/md";
const Navbar = () => {
  const {user,logOut,setUser} = useContext(AuthContext)

    const links=
    <>
   <a className="md:hidden sm:flex text-2xl font-bold bg-gradient-to-r from-[#003C43] via-[#135D66] to-[#77B0AA] text-transparent bg-clip-text">
  TravelRoutes</a>
    <li className="mr-2"><NavLink to='/'>Home</NavLink></li>
      <li className="mr-2"><NavLink to='/updateProfile'>All Tourists Spot</NavLink></li>

    {user ? <div className="flex flex-col md:flex-row">
      <li className="mr-2"><NavLink to='/about'>Add Tourists Spot</NavLink></li>
      <li className="mr-2"><NavLink to='/about'>My List</NavLink></li>

    </div>:
    <div className="flex flex-col md:flex-row"> 
      <li><NavLink to='/login'>Login</NavLink></li>
    </div>
    
    
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">TravelRoutes</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
      
    </ul>
  </div>
  <div className="navbar-end flex gap-4">

         
{
  user ?  
 <div className="flex gap-4"> 
   <div className="avatar tooltip tooltip-bottom"  data-tip={user?.displayName || "Your name"}>
<div className="w-12 rounded-full ">
<img src={user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocJb_QfxzddCYoKhANUSjcls7YkjDxcd_-mlRMKytfrV3yP53wNP=s360-c-no"} />
</div>
</div>
 <button onClick={handleLogout} className="btn  bg-[#003C43] text-white ">Logout</button>
 </div>
 : 
  <Link to='/login' className="hidden md:flex btn bg-[#003C43] text-white">Login</Link>
}
</div>
</div>
    );
};

export default Navbar;