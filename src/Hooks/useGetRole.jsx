import { useContext,  } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query";

const useGetRole = () => {
    const { user } = useContext(AuthContext)
    const {data: role = '', isLoading: loading, refetch} = useQuery({
        queryKey: ['role'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = await res.json()
            return data?.role
        }
    })

    return [role, loading, refetch]
};

export default useGetRole;