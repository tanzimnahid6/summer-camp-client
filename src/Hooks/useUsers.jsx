import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {data:users=[],isLoading:loading,refetch} = useQuery({
        queryKey:['allUser'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/users');
            return res.json()
        }
    })
    
    return [users, loading, refetch]
};
export default useUsers;
