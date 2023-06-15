import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useRole = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState("")

  

  useEffect(() => {
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role)
      })
  }, [user])
  return role
}
export default useRole
