import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react'
import initailizeAuthentication from "../Pages/Login/firebase/firebase.init"
initailizeAuthentication()
const googleProvider = new GoogleAuthProvider()
const auth = getAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const googleHandler = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        setIsLoading(true)
        const unbscribed = onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unbscribed
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser('')
            })
            .finally(() => setIsLoading(false))
    }
    return {
        googleHandler,
        isLoading,
        logOut,
        user
    }
}

export default useFirebase

