import { Button } from 'flowbite-react'

export default function RemoveAllButton({
  handleRemoveAllGifts
}: {
  handleRemoveAllGifts: () => void
}) {
  return (
    <Button
      className="outline outline-1 outline-red-500/50 py-1 w-full hover:shadow-lg transition-all bg-red-950/70"
      onClick={handleRemoveAllGifts}
      type="button"
      color="failure"
    >
      <span className="text-white text-pretty font-medium text-base">
        Remove all
      </span>
    </Button>
  )
}
