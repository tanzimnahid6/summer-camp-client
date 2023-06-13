import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Sign-out successful.",
          showConfirmButton: false,
          timer: 1000,
        })
      })
      .catch((error) => {
        console.log("Log out error", error)
      })
  }

  return (
    <nav className="   bg-transparent  text-xl font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="">
              <img className="w-12 h-12 rounded-lg" src="./logo.jpg" alt="logo" />
            </NavLink>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className=" focus:outline-none focus:text-gray-200"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className=" px-3 py-2 rounded-md  font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/instructor"
                className=" px-3 py-2 rounded-md  font-medium"
              >
                Instructors
              </NavLink>
              <NavLink
                to="/classes"
                className=" px-3 py-2 rounded-md  font-medium"
              >
                Classes
              </NavLink>
            </div>
          </div>

          {/* User Profile */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex items-center">
              {!user ? (
                <NavLink to="/login" className="">
                  Login
                </NavLink>
              ) : (
                <div className="flex gap-8 items-center">
                  <Link to="/dashBoard" className="">Dashboard </Link>
                 <div>
                 <NavLink onClick={handleLogOut} to="/" className="">
                    Logout
                  </NavLink>
                 </div>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/menu1"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu 1
            </NavLink>
            <NavLink
              to="/menu2"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu 2
            </NavLink>
            <NavLink
              to="/menu3"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu 3
            </NavLink>
          </div>

          <div className="px-4 py-5 border-t border-gray-800">
            <div className="flex items-center">
              <div className="ml-3">
                <div className="text-base font-medium leading-none ">
                  User Profile
                </div>
                <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                  user@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
    </nav>
  )
}

export default NavBar
