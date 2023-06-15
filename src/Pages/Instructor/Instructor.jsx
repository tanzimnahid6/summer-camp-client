import { useQuery } from "@tanstack/react-query"

const Instructor = () => {
  const { data: allInstructors = [] } = useQuery({
    queryKey: ["allInstructors"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-eight-kappa.vercel.app/instructors")
      return res.json()
    },
  })

  return (
    <div className="pt-24 ">
    <div>
    <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
    Instructor
      </h1>
    </div>
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        {allInstructors.map((item) => (
          <div
            className="card  rounded-md bg-base-100 shadow-2xl m-4"
            key={item._id}
          >
            <figure>
              <img className="w-96 h-[350px] object-cover rounded-lg" src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <h2 className="card-title">{item.email}</h2>

              <p>{item.email}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructor
