import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Home from "../Home"
import Login from "../Pages/Login_Reg/Login"
import SignUp from "../Pages/Login_Reg/SignUp"
import DashBoard from "../Pages/DashBoard/DashBoard"
import PrivetRoute from "./PrivetRoute"
import Instructor from "../Pages/Instructor/Instructor"
import Classes from "../Pages/Classes/Classes"
import ManageClass from "../Pages/DashBoard/Admin/ManageClass"
import MangeUser from "../Pages/DashBoard/Admin/MangeUser"
import AddClass from "../Pages/DashBoard/Instructor/AddClass"
import InstructorClass from "../Pages/DashBoard/Instructor/InstructorClass"
import Enrolled from "../Pages/DashBoard/Student/Enrolled"
import SelectClass from "../Pages/DashBoard/Student/SelectClass"
import ErrorPage from "../Pages/ErrorPage"
import Payment from "../Pages/DashBoard/Payment/Payment"
import PaymentHistory from "../Pages/DashBoard/Student/PaymentHistory"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
      },
      {
        path:'classes',
        element:<Classes></Classes>
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
    children:[
      {
        path:"",
        element:<h1 className="text-7xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Welcome to Dashboard
      </h1>
      },
        {
            path:'adminManageClass',
            element:<ManageClass></ManageClass>
        },
        {
            path:'adminManageUser',
            element:<MangeUser></MangeUser>
        },
        {
            path:'addClass',
            element:<AddClass></AddClass>
        },
        {
            path:'myClass',
            // path:'dashBoard',
            element:<InstructorClass></InstructorClass>
        }
        ,
        {
            path:'selectClass',
            element:<SelectClass></SelectClass>
        },
        {
            path:'enrolledClass',
            element:<Enrolled></Enrolled>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        }
    ]
  },
])
export default router
