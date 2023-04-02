import { User } from '@/api'
import { useAuth } from '@/hooks'
import { useFormik } from 'formik'
import { Form } from 'semantic-ui-react'
import { initialValues, validationSchema } from './ChangePasswordForm.form'
import styles from './ChangePasswordForm.module.scss'

const userCtrl = new User();



export const ChangePasswordForm = () => {


    const { user, logout } =useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValues) => {
            try {
                await userCtrl.updateMe(user.id, {password: formValues.password} );
                logout();
            } catch (error) {
                console.error(error)
            }
        }
    })

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
        <label>Cambiar contraseña</label>
        <Form.Input value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} type="password" name="password" placeholder="Nueva contraseña"/>
        <Form.Input value={formik.values.repeatPassword} onChange={formik.handleChange} error={formik.errors.repeatPassword} type="password" name="repeatPassword" placeholder="Repetir contraseña"/>


        <Form.Button type="submit" loading={formik.isSubmitting}>Enviar</Form.Button>
    </Form>
  )
}
