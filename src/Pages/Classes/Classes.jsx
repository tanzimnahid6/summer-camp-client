import useApproved from "../../Hooks/useApproved"

import ClassCard from "./ClassCard"

const Classes = () => {
  const [approvedClass, loading] = useApproved()

  if (loading == true) {
    return (
      <div className="pt-36 mx-4 flex justify-center items-center ">
        <progress className="progress bg-red-500 w-72"></progress>
        <span className="loading bg-red-600 loading-infinity loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="pt-36 mx-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {approvedClass.map((item) => (
          <ClassCard item={item} key={item._id}></ClassCard>
        ))}
      </div>
    </div>
  )
}

export default Classes
