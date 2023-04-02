import { User } from '@/api'
import { useAuth } from '@/hooks'
import { useFormik } from 'formik'
import { Form } from 'semantic-ui-react'
import { initialValues, validationSchema } from './ChangeNameForm.form'
import styles from './ChangeNameForm.module.scss'

const userCtrl = new User();

export const ChangeNameForm = () => {


  const {user} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(user.firstname,user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.error(error)
      }
    }
  })


  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input value={formik.values.firstname} onChange={formik.handleChange} error={formik.errors.firstname} name="firstname" placeholder="Nombre" />
        <Form.Input value={formik.values.lastname} onChange={formik.handleChange} error={formik.errors.lastname} name="lastname" placeholder="Apellidos" />

        <Form.Button type='submit' loading={formik.isSubmitting}>Enviar</Form.Button>
      </div>

    </Form>
  )
}
