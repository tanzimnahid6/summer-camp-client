import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"

const DashBoard = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:bg-lime-100 flex flex-col items-center justify-center">
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
            <h1 className="font-bold text-2xl">{user?.displayName}</h1>
          </div>
        </div>
        <ul className="menu p-4 w-80 h-full    text-base-content">
          {/* Sidebar content here */}
          <div>
            {/* Student */}
            <p className="text-2xl">Student-----------</p>
            <li>
              <Link>My Select class</Link>
            </li>
            <li>
              <Link>My Enrolled Classes</Link>
            </li>

            {/* Instructor */}
            <p className="text-2xl">Instructor-----------</p>
            <li>
              <Link>Add a Class</Link>
            </li>
            <li>
              <Link>My Classes</Link>
            </li>
            {/* Admin */}
            <p className="text-2xl">Admin-----------</p>
            <li>
              <Link to="/dashBoard/adminManage">Manage Classes:</Link>
            </li>
            <li>
              <Link>Manage Users</Link>
            </li>
          </div>
          <hr />
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Log Out</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
