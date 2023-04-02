import * as Yup from "yup";


export const initialValues = () => {
    return {
        email: "",
        repeatEmail: "",
    }
}

export const validationSchema = () => {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        repeatEmail: Yup.string().email(true).required(true).oneOf([Yup.ref("email")], "Los emails no son iguales"),
    })
}