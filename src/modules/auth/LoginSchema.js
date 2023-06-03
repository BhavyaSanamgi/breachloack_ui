import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().email('Incorrect format').required('Email is required'),
    password: yup.string().required('Password is required'),
})

export default loginSchema
