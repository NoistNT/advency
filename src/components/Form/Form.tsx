import { useState } from 'react'

import api from '../../api'
import { Gift } from '../../types'

export default function Form({
  onAddGift
}: {
  onAddGift: (gift: Gift) => Array<Gift>
}) {
  const [giftname, setGiftName] = useState('')

  const handleChange = (text: string) => {
    setGiftName(text)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const trimmed = giftname.trim()
    if (!trimmed) return

    const newGift = api.add(trimmed)

    onAddGift(newGift)

    setGiftName('')
  }

  return (
    <form className="flex justify-center items-center w-full gap-3">
      <input
        placeholder="Add your wishlist item"
        className="w-full rounded py-2 px-3 opacity-90 bg-black/80 text-white placeholder-white/50 focus:outline-none focus:ring focus:ring-white/20"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={giftname}
      />

      <button
        type="button"
        className="flex justify-center items-center w-1/5 bg-black/70 hover:cursor-pointer hover:bg-black/60 text-white py-2 px-2 rounded hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
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
