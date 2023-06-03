import SecurityService from './security.service'

class StudentService {
    async studentCourses() {
        return (await SecurityService.createHttpHandler()).get(
            `student/courses/`,
        )
    }
    async enrollStudentCourses(data) {
        return (await SecurityService.createHttpHandler()).post(
            `student/courses/`, data
        )
    }

    async getTutorStudents() {
        return (await SecurityService.createHttpHandler()).get(
            `student/tutor/students/`,
        )
    }
}

export default new StudentService()
