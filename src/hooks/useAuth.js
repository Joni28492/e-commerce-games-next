import { AuthContext } from "@/context"
import { useContext } from "react"

export const useAuth = () => useContext(AuthContext)