import './App.css'

import { Toaster } from 'sonner'

import GiftsList from './components/GiftsList/GiftsList'

function App() {
  return (
    <div>
      <header>
        <GiftsList />
        <Toaster closeButton={true} />
      </header>
    </div>
  )
}

export default App
