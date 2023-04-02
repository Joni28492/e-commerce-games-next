import {Form} from "semantic-ui-react"
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./RegisterForm.form";
import {Auth} from '@/api'


const authCtrl = new Auth()


export const RegisterForm = () => {

  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false, //no valida cada vez que cambie algo 
    onSubmit: async(formValues)=> {
      try {
        await authCtrl.register(formValues)
        router.push("/join/sign-in")
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
            <Form.Input onChange={formik.handleChange} error={formik.errors.email} name="email" type="text" placeholder="Correo electronico" value={formik.values.email}/>
            <Form.Input onChange={formik.handleChange} error={formik.errors.username} name="username" type="text" placeholder="Nombre de ususario" value={formik.values.username} />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input onChange={formik.handleChange} error={formik.errors.name} name="name" type="text" placeholder="Nombre y apellidos" value={formik.values.name}/>
            <Form.Input onChange={formik.handleChange} error={formik.errors.password} name="password" type="password" placeholder="Contraseña" value={formik.values.password}/>

        </Form.Group>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
            Registrarse
        </Form.Button>

    </Form>
  )
}
