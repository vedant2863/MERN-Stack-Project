import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
//Navigate is a component fron react-router-dom

export default function PrivateRoute() {

  const { currentUser } = useSelector((state) => state.user)
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
