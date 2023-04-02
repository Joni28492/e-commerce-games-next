import { BasicModal } from '@/shared'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { AddressForm } from '../AddressForm'
import styles from './AddAddress.module.scss'



export const AddAddress = (Props) => {

  const { onReload } =Props

  const [show, setShow] = useState(false)
  

  const onOpenClose = () => setShow((prevState)=>!prevState)

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva direccion">
        <AddressForm onClose={onOpenClose} onReload={onReload}/>
      </BasicModal>
    </>
  )
}
