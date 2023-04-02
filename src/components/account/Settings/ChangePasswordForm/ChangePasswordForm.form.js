import * as Yup from 'yup'


export const initialValues = () =>{
    return {
        password: "",
        repeatPassword: ""
    }
}


export const validationSchema = () => {

    return Yup.object({
        password: Yup.string().required(),
        repeatPassword: Yup.string().required().oneOf([Yup.ref("password")], true),
    })
}