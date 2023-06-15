import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useDataByEmail = (email) => {
  const fetchData = async () => {
    const response = await axios.get(`https://summer-camp-server-eight-kappa.vercel.app/selectClass/${email}`);
    return response.data;
  };

  const query = useQuery(['dataByEmail', email], fetchData);

  const refetchData = () => {
    query.refetch();
  };

  return { ...query, refetch: refetchData };
};

export default useDataByEmail;

