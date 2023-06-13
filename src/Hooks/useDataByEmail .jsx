import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useDataByEmail = (email) => {
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/selectClass/${email}`);
    return response.data;
  };

  const query = useQuery(['dataByEmail', email], fetchData);

  const refetchData = () => {
    query.refetch();
  };

  return { ...query, refetch: refetchData };
};

export default useDataByEmail;

