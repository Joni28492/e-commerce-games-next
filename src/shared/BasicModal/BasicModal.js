import { Modal } from 'semantic-ui-react'


export const BasicModal = (Props) => {

    const { children, show, onClose, title } =Props
    

    return (
    <Modal open={show} onClose={onClose} size="small">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{children}</Modal.Content>
    </Modal>
  )
}
