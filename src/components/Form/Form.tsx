import { useState } from 'react'

import api from '../../api'
import { Gift } from '../../types'

export default function Form({
  onAddGift,
  setOpenModal
}: {
  onAddGift: (gift: Gift) => Array<Gift>
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [gift, setGift] = useState({
    name: '',
    quantity: 1
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newGift = { ...gift, [name]: value }

    setGift(newGift)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { name, quantity } = gift

    const trimmed = name.trim()
    if (!trimmed) return

    const newGift = api.add({ name: trimmed, quantity })

    onAddGift(newGift)

    setGift({ name: '', quantity: 1 })

    setOpenModal(false)
  }

  return (
    <form className="flex justify-center items-center w-full gap-3">
      <input
        name="name"
        placeholder="Add your wishlist item"
        className="w-full rounded py-2 px-3 opacity-90 bg-black/80 text-white placeholder-white/50 focus:outline-none focus:ring focus:ring-white/20"
        type="text"
        onChange={(e) => handleChange(e)}
        value={gift.name}
      />
      <input
        name="quantity"
        type="number"
        className="w-1/6 text-center text-white/80 bg-black/80 rounded py-2 px-3 opacity-90 focus:outline-none focus:ring focus:ring-white/20"
        min={1}
        max={100}
        onChange={(e) => handleChange(e)}
        value={gift.quantity}
      />
      <button
        className="w-1/3 bg-black/70 hover:cursor-pointer hover:bg-black/60 text-white py-2 px-2 rounded hover:shadow-lg"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </form>
  )
}
