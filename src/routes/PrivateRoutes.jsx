import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { Loading } from "../components/loading/Loading";


export const PrivateRoutes = ({ children }) => {
    const {user} = useContext(AuthContext)

    if (user) {
        return children
    } else if (user === false) {
        return <Navigate to='/login' replace />
    } else {
        return <Loading />
    }
}
