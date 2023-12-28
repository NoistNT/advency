import { toast } from 'sonner'

import { Gift } from './types'

const api = {
  bulkAdd: (gifts: Gift[]) => {
    localStorage.setItem('gifts', JSON.stringify(gifts))
  },

  list: () => {
    const localGifts: Gift[] = JSON.parse(localStorage.getItem('gifts') || `[]`)

    return localGifts
  },

  add: ({ name, quantity }: { name: string; quantity: number }) => {
    const localGifts: Gift[] = api.list()
    const id = Math.max(...localGifts.map((gift) => gift.id)) + 1
    const gift = { id, name, quantity }

    if (
      localGifts.some((gift) => gift.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error('Gift already exists')
      return gift
    }

    api.bulkAdd([...localGifts, gift])

    toast.success('Gift added successfully')

    return gift
  },

  remove: (id: number) => {
    const localGifts = api.list()
    const newGifts = localGifts.filter((gift) => gift.id !== id)
    api.bulkAdd(newGifts)

    toast.success('Gift removed successfully')

    return newGifts
  },

  removeAll: () => {
    if (!api.list().length) {
      toast.error('Your gift list is already empty')
      return []
    }

    localStorage.removeItem('gifts')

    toast.success('Cleaned up all your gifts')

    return []
  }
}

export default api
