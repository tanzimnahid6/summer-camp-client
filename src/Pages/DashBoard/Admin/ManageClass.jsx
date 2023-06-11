import useClass from "../../../Hooks/useClasses"

const ManageClass = () => {
  const [classes] = useClass()
  console.log(classes)

  return (
    <div className=" w-[1000px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        MANAGE CLASS
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th># </th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {classes.map((item,i)=><tr key={item._id}>
                <th>{i+1} </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">Available Seat : {item.available_seats}</div>
                      <div className="text-sm opacity-50">Price : $ {item.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.instructor_name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.instructor_email}
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageClass
