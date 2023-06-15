import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ClassCard from "./ClassCard"

const PopularClass = () => {
  const url = `http://localhost:5000/popularClass` //==========================modified

  const { data } = useQuery({
    queryKey: ["popularClass"],
    queryFn: () => axios.get(url),
  })
  
  const popularClass = data?.data || []

  return (
    <div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-3  gap-4 my-12">
        {popularClass.map((item) => (
          <ClassCard item={item} key={item._id}></ClassCard>
        ))}
      </div>
    </div>
  )
}

export default PopularClass
