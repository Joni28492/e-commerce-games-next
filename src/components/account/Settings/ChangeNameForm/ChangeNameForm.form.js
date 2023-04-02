import * as Yup from 'yup'


export const initialValues = (firstname, lastname) => {
    return {
        firstname,
        lastname,
    }
}

export const validationSchema = () => {
    return Yup.object({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
    })
}