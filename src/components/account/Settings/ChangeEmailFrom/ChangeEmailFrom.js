import { User } from '@/api'
import { useAuth } from '@/hooks'
import { useFormik } from 'formik'
import { Form } from 'semantic-ui-react'
import { initialValues, validationSchema } from './ChangeEmailForm.form'
import styles from './ChangeEmailFrom.module.scss'

const userCtrl = new User();

export const ChangeEmailFrom = () => {

    const {user, updateUser} = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async(formValues) => {
            try {
               await userCtrl.updateMe(user.id,{email: formValues.email})
               updateUser("email", formValues.email)
               formik.handleReset()
            } catch (error) {
                console.error(error)
            }
        }
    }) 

  return (
    <Form  onSubmit={formik.handleSubmit} className={styles.form}>
        <label>Cambiar correo electronico</label>
        <Form.Input onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email} name="email" placeholder="Nuevo correo electronico" />
        <Form.Input onChange={formik.handleChange} error={formik.errors.repeatEmail} value={formik.values.repeatEmail} name="repeatEmail" placeholder="Repetir correo electronico" />
        <Form.Button type='submit' loading={formik.isSubmitting}>Enviar</Form.Button>
    </Form>
  )
}
