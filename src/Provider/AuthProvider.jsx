import { createContext, useEffect, useState } from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import app from "../../firebase.config"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loginUsers, setLoginUsers] = useState([])

  //get previous login user====================
  useEffect(() => {
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => {
        setLoginUsers(data)
      })
  }, [])

  //create user method ==================================
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //login with google=========================================
  const loginGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //sign in method=======================================
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //logout method =======================================
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  //update user profile===========================
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  //on auth state change=================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    loginGoogle,
    loginUsers,
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
