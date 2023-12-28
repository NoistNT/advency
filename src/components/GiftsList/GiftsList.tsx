import { useEffect, useState } from 'react'

import api from '../../api'
import { Gift } from '../../types'
import Form from '../Form/Form'
import FormModal from '../Form/FormModal'

export default function GiftsList() {
  const [giftsList, setGiftsList] = useState<Gift[]>(api.list())

  useEffect(() => {
    setGiftsList(api.list())
  }, [giftsList.length])

  const handleAddGift = (newGift: Gift) => {
    setGiftsList((prevGiftsList) => [...prevGiftsList, newGift])

    return giftsList
  }

  const handleRemoveGift = (id: number) => {
    setGiftsList(api.remove(id))
  }

  const handleRemoveAllGifts = () => {
    setGiftsList(api.removeAll())
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center min-w-[600px] max-w-[768px] bg-gradient-to-r from-amber-600 via-red-700 to-green-700 rounded-lg pt-8 pb-6 px-4">
        <h1 className="text-4xl font-medium mb-6">Gifts</h1>
        <FormModal onAddGift={handleAddGift} />
        <ul className="flex flex-col justify-center items-center w-full gap-3 py-10 transition-all">
          {giftsList.length ? (
            giftsList.map((gift) => (
              <li
                className="flex justify-between items-center w-full px-2 bg-green-700/50 rounded-lg font-medium py-1 text-white"
                key={gift.id}
              >
                <p className="">{gift.quantity} Units</p>
                <p className="">
                  {gift.name[0].toUpperCase() + gift.name.slice(1)}
                </p>
                <button
                  className="bg-red-600/80 w-24 px-2 py-2 rounded hover:bg-red-600/100 hover:shadow-lg"
                  type="button"
                  onClick={() => handleRemoveGift(gift.id)}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p className="text-center font-medium text-xl text-black/60 py-3">
              No gifts yet, try adding one
            </p>
          )}
        </ul>
        <button
          className="font-medium text-base bg-black/70 px-2 py-3 rounded hover:bg-black/60 hover:shadow-lg w-full text-white"
          onClick={handleRemoveAllGifts}
          type="button"
        >
          Remove all
        </button>
      </div>
    </div>
  )
}
