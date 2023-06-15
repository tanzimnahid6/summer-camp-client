import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ClassCard from "./ClassCard"

const PopularClass = () => {
  const url = `https://summer-camp-server-eight-kappa.vercel.app/popularClass` //==========================modified

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
