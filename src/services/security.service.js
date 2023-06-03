import axios from 'axios'


class SecurityService {
    static async createHttpHandler() {
        const token = localStorage.getItem('accessToken')
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json' || 'multipart/form-data'
            },
        })

        instance.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers = {
                        Authorization: `Bearer ${token}`,
                    }
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        return instance
    }
}

export default SecurityService
