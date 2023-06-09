import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ClassCard from "./ClassCard"

const PopularClass = () => {
  const url = `http://localhost:5000/popularClass` //==========================modified

  const { data } = useQuery({
    queryKey: ["popularClass"],
    queryFn: () => axios.get(url),
  })
  console.log()
  const popularClass = data?.data || []

  return (
    <div>
      <div className="flex w-full justify-between gap-4 my-12">
        {popularClass.map((item) => (
          <ClassCard item={item} key={item._id}></ClassCard>
        ))}
      </div>
    </div>
  )
}

export default PopularClass
