export const Authorization = ({isLoggedIn, role, requiredRole, Element, Navigate}) => {
    if(isLoggedIn && role ===requiredRole) {
        return <Element />
    } else {
        return <Navigate to="/login" />
    }
}