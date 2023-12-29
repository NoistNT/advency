import { useEffect, useState } from 'react'

import api from '../../api'
import { Gift } from '../../types'
import FormModal from '../Form/FormModal'
import GiftItems from './GiftItems'
import RemoveAllButton from './RemoveAllButton'
import { Card } from 'flowbite-react'

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
      <Card className="relative min-w-[600px] max-w-[640px] w-full bg-gradient-to-r from-amber-600 via-red-700 to-green-700 rounded-lg pt-8 pb-6 mx-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium mb-10 text-white">Gifts</h1>
          <FormModal onAddGift={handleAddGift} />
          <GiftItems
            giftsList={giftsList}
            handleRemoveGift={handleRemoveGift}
          />
          <RemoveAllButton handleRemoveAllGifts={handleRemoveAllGifts} />
        </div>
      </Card>
    </div>
  )
}
