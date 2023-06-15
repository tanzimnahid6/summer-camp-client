import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-server-eight-kappa.vercel.app/allClass');
            return res.json();
        }
    })

    return [classes, loading, refetch]
}

export default useClass;