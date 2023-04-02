import { Form } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Auth } from "@/api";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useAuth } from "@/hooks";

const authCtrl = new Auth()

export const LoginForm = () => {

    const router = useRouter()
    // console.log(useAuth())
    const {login} = useAuth()
    

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue)=>{
            try {
                const response = await authCtrl.login(formValue);
                // console.log(response)
                login(response.jwt);
                // router.push('/')
            } catch (error) {
                console.error(error)
            }
        }
    })

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input value={formik.values.identifier}  onChange={formik.handleChange} error={formik.errors.identifier} name="identifier" type="text" placeholder="Correo electronico o nombre de usuario"/>
        <Form.Input value={formik.values.password}  onChange={formik.handleChange} error={formik.errors.password} name="password" type="password" placeholder="Contraseña"/>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
            Entrar
        </Form.Button>
    </Form>
  )
}
