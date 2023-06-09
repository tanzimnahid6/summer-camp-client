import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Home from "../Home"
import Login from "../Pages/Login_Reg/Login"
import SignUp from "../Pages/Login_Reg/SignUp"
import DashBoard from "../Pages/DashBoard/DashBoard"
import PrivetRoute from "./PrivetRoute"
import Instructor from "../Pages/Instructor/Instructor"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path:'instructor',
        element:<Instructor></Instructor>
      }
    ],
  },
  {
    path: "dashBoard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
  },
])
export default router
