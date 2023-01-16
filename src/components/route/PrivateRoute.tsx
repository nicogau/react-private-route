import {ReactNode} from "react"
import {Navigate, Outlet} from "react-router-dom"
import {useIsUserAllowed} from "../../hooks"

interface PrivateRouteProps {
  isAuthenticated: boolean
  redirectRoute: string
  hasRole?: string
  allowedRoles?: string[]
  children?: ReactNode
}

const PrivateRoute = (props: PrivateRouteProps) => {

  const isUserAllowed = useIsUserAllowed(props.isAuthenticated, props.hasRole, props.allowedRoles)

  return (
    <>
    {
        isUserAllowed 
        ?  <>{ props.children ?? <Outlet/>}</>
        : <Navigate to={props.redirectRoute} replace /> 
    }
    </>
  )
}

export default PrivateRoute
