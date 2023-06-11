import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const InstructorClass = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    const url = `http://localhost:5000/allClass/${userEmail}` 

    const { data } = useQuery({
      queryKey: ["instructorClass"],
      queryFn: () => axios.get(url),
    })
    console.log()
    const instructorClass = data?.data || []
    console.log(instructorClass);

    return (
        <div>
            <h1>All added class which add by instructor </h1>
        </div>
    );
};

export default InstructorClass;