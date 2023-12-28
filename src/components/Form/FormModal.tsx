import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

import { Gift } from '../../types'
import Form from './Form'

export default function FormModal({
  onAddGift
}: {
  onAddGift: (gift: Gift) => Array<Gift>
}) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button
        className=""
        onClick={() => setOpenModal(true)}
        outline
        gradientDuoTone="pinkToOrange"
      >
        Add gift
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add a gift to the list</Modal.Header>
        <Modal.Body>
          <Form onAddGift={onAddGift} setOpenModal={setOpenModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}
