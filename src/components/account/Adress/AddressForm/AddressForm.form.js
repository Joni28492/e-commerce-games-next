import * as Yup from 'yup';

export const initialValues = (address) => {
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        state: address?.state || "",
        city: address?.city || "",
        postal_code: address?.postal_code || "",
        phone: address?.phone || "",
    }
}


export const validationSchema = () => {
    return Yup.object({
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        address: Yup.string().required(true),
        state: Yup.string().required(true),
        city: Yup.string().required(true),
        postal_code: Yup.string().required(true),
        phone: Yup.number().required(true),
    })
}