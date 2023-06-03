import SecurityService from './security.service'

class AuthService {
    async signup(data) {
        return (await SecurityService.createHttpHandler()).post(
            `/user/signup/`,
            data
        )
    }
    async login(data) {
        return (await SecurityService.createHttpHandler()).post(
            `/user/login/`,
            data
        )
    }

    async logout(data) {
        return (await SecurityService.createHttpHandler()).post(
            `auth/logout`,
            data
        )
    }

    async validateOTP(data) {
        return (await SecurityService.createHttpHandler()).post(
            `/user/otp/verify/`,
            data
        )
    }
}

export default new AuthService()
