import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



// eslint-disable-next-line react/prop-types
const PrivetRout = ({children}) => {
    const { user,loading} = useContext(AuthContext)

    const location = useLocation()
    if(loading){
        return (
            <div className="text-center">
                <progress className="progress w-80"></progress>
            </div>
        )
    }
    
    if(!user){
        return <Navigate state={{ from: location }} replace to="/login"></Navigate>
    }
    return (
        
        <div>
            {children}
        </div>
    );
};

export default PrivetRout;