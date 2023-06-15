import { useQuery } from "@tanstack/react-query";
const useApproved = () => {
    const {data:approvedClass=[],isLoading:loading,refetch} = useQuery({
        queryKey:["approvedClass"],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-server-eight-kappa.vercel.app/approvedClass`)
            return res.json()
        }
    })
    return [approvedClass,loading,refetch]
};

export default useApproved;