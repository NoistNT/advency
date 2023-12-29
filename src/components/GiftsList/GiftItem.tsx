import { Gift } from '@/types'

export default function GiftItem({
  gift,
  handleRemoveGift
}: {
  gift: Gift
  handleRemoveGift: (id: number) => void
}) {
  return (
    <li
      className="flex justify-between items-center w-full px-2 bg-green-700/50 rounded-lg font-medium py-1 text-white"
      key={gift.id}
    >
      <p>{gift.quantity} Units</p>
      <p>{gift.name[0].toUpperCase() + gift.name.slice(1)}</p>
      <button
        className="bg-red-600/80 w-24 px-2 py-2 rounded hover:bg-red-600/100 hover:shadow-lg"
        type="button"
        onClick={() => handleRemoveGift(gift.id)}
      >
        Remove
      </button>
    </li>
  )
}
