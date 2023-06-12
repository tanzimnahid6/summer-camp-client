import useUsers from "../../../Hooks/useUsers"

const MangeUser = () => {
  const [users] = useUsers()
  console.log(users)
  return (
    <div className="w-[600px]">
            <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Manage Users
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item,i)=> <tr key={item._id}>
                <th>{i+1}</th>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="flex flex-col gap-2 ">
                    <div className="btn btn-sm btn-info">Admin</div>
                    <div className="btn btn-sm btn-success">Instructor</div>
                </td>
              </tr>)
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MangeUser
