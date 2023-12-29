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
        className="hover:shadow-lg transition-all opacity-90"
        onClick={() => setOpenModal(true)}
        gradientDuoTone="pinkToOrange"
      >
        <span className="text-white text-pretty text-base">Add gift</span>
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="backdrop-blur-sm outline outline-1 outline-white/50 bg-gradient-to-r from-amber-600 via-red-700 to-green-700 rounded-lg">
          <Modal.Header>Add a gift to the list</Modal.Header>
          <Modal.Body>
            <Form onAddGift={onAddGift} setOpenModal={setOpenModal} />
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}
