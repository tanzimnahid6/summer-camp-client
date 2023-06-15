import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import useRole from "../../Hooks/useRole"

import { BiHome, BiLogIn} from 'react-icons/bi';
import { AiFillSetting} from 'react-icons/ai';




const DashBoard = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log(user);
  const role = useRole()
  // const [role, loading, refetch] = useGetRole()
  console.log(role)
  
  const signOut = () => {
    logOut()
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full md:bg-lime-50 flex flex-col items-center justify-center">
        {/* Page content here */}
        <div>
          <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side bg-white md:bg-red-300 ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div>
          <div className="avatar flex flex-col items-center mt-8">
            <div className="w-28 rounded-full">
              <img src={user?.photoURL} />
            </div>
            <h1 className="font-bold text-3xl">{user?.displayName}</h1>
          </div>
        </div>
        <ul className="menu p-4 w-80 h-full text-2xl    text-base-content">
          {/* Sidebar content here */}
          <div>
            {/* Admin */}
            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashBoard/adminManageClass">Manage Classes:</Link>
                </li>
                <li>
                  <Link to="/dashBoard/adminManageUser">Manage Users</Link>
                </li>
              </>
            )}
            {/* Instructor */}
            {role === "instructor" && (
              <>
                <li>
                  <Link to="/dashBoard/addClass">Add a Class</Link>
                </li>
                <li>
                  <Link to="/dashBoard/myClass">My Classes</Link>
                </li>
              </>
            )}
            {/* Student */}
         
            {role === "student" && (
              <>
                <li>
                  <Link to="/dashBoard/selectClass">My Select class</Link>
                </li>
                <li>
                  <Link to="/dashBoard/enrolledClass">My Enrolled Classes</Link>
                </li>
                <li><Link to='paymentHistory'>Payment History</Link></li>
              </>
            )}
          </div>
          <hr />
          <div>
            <li >
              <Link to="/"> <span><BiHome size={20}></BiHome></span>Home</Link>
              
            </li>
            <li onClick={signOut}>
              <Link><span className="-ml-2"><BiLogIn size={24}></BiLogIn></span>Log Out</Link>
            </li>
            <li>
              <Link><span><AiFillSetting size={20}></AiFillSetting></span>Settings</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
