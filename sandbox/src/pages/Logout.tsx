import { useEffect, useRef, useState } from "react";
import firebase from "../auth/Firebase"

export function Logout() {
  const [pending, setPending] = useState(false)
  const mounted = useRef(true)

  useEffect(()=>{
    const cleanup = () => {
      mounted.current = false
    }
    return cleanup
  }, [])

  const logout = async () => {
    setPending(true)
    await firebase.auth().signOut()
    if (mounted.current) setPending(false)
  }

  return (
    <div>
      <button type="button" onClick={logout}>
        ログアウト
      </button>
      {pending && "ログアウトしています..."}
    </div>
  )
}