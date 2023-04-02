import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./AddressForm.form";


const addressCtrl = new Address()

export const AddressForm = (Props) => {

    const { onClose, onReload, addressId, address } = Props;
    const {user } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValues)=>{
            try {

                if(addressId){
                   await addressCtrl.update(formValues, addressId)
                } else {
                    await addressCtrl.create(formValues, user.id)
                }
                
                formik.handleReset()
                onReload()
                onClose()
            } catch (error) {
                console.error(error)
            }
        }
    })
    
    return (
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input value={formik.values.title} error={formik.errors.title} onChange={formik.handleChange} name="title" placeholder="titulo de la direccion" />
        <Form.Group widths="equal">
            <Form.Input value={formik.values.name} error={formik.errors.name} onChange={formik.handleChange} name="name" placeholder="Nombre y apellidos" />
            <Form.Input value={formik.values.address} error={formik.errors.address} onChange={formik.handleChange} name="address" placeholder="Dirección" />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input value={formik.values.state} error={formik.errors.state} onChange={formik.handleChange} name="state" placeholder="Provincia" />
            <Form.Input value={formik.values.city} error={formik.errors.city} onChange={formik.handleChange} name="city" placeholder="Ciudad" />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input value={formik.values.postal_code} error={formik.errors.postal_code} onChange={formik.handleChange} name="postal_code" placeholder="Codigo postal" />
            <Form.Input value={formik.values.phone} error={formik.errors.phone} onChange={formik.handleChange} name="phone" placeholder="Teléfono" />
        </Form.Group>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Enviar</Form.Button>
      </Form>
    )
}
