import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {data:users=[],isLoading:loading,refetch} = useQuery({
        queryKey:['allUser'],
        queryFn:async()=>{
            const res = await fetch('https://summer-camp-server-eight-kappa.vercel.app/users');
            return res.json()
        }
    })
    
    return [users, loading, refetch]
};
export default useUsers;
