import { Gift } from '@/types'
import GiftItem from './GiftItem'

export default function GiftItems({
  giftsList,
  handleRemoveGift
}: {
  giftsList: Gift[]
  handleRemoveGift: (id: number) => void
}) {
  return (
    <ul className="flex flex-col justify-center items-center w-full gap-3 py-10 transition-all">
      {!giftsList.length ? (
        <p className="text-center font-medium text-xl text-black/60 py-3">
          No gifts yet, try adding one
        </p>
      ) : (
        giftsList.map((gift) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            handleRemoveGift={handleRemoveGift}
          />
        ))
      )}
    </ul>
  )
}
