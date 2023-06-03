import jwt_decode from 'jwt-decode'

const useRole = () => {
    const accessToken = localStorage.getItem('accessToken')
    let userRole = 'STUDENT'

    if (accessToken) {
        const userDetails = jwt_decode(accessToken)
        if (userDetails?.role){
            userRole = userDetails?.role
        }
    }

    return userRole;
}

export default useRole;