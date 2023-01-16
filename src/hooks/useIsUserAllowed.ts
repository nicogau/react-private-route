import {useMemo} from "react"

/**
 * check if a user is authenticated and if his role is allowed
 *
 * @param {boolean} isUserAuthenticated - is the user authenticated
 * @param {string} [userRole] - which role has the user
 * @param {string[]} [allowedRoles] - array of allowed roles
 * @returns {boolean} if the user is allowed return true else false
 */
const useIsUserAllowed = (isUserAuthenticated: boolean, userRole?: string, allowedRoles?: string[]): boolean => {
  const isAllowed = useMemo( () => {
    // first user must be authenticated
    if (isUserAuthenticated !== true) return false
    // if allowedRoles[] is not empty control the user role is allowed
    if (allowedRoles && allowedRoles.length > 0){
      if (userRole  && allowedRoles.includes(userRole)) return true
    }  else return true
    return false
  }, [isUserAuthenticated, userRole, allowedRoles])
  return isAllowed
} 

export default useIsUserAllowed
