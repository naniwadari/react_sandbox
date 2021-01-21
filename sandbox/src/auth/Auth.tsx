import { Redirect } from 'react-router-dom'
import firebase from './Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export function Auth(props: any) {
  const [user, initialising, error] = useAuthState(firebase.auth())
  if (initialising) {
    return <div>initialising...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (!user) {
    return <Redirect to='/login' />
  }
  return <>{props.children}</>
}