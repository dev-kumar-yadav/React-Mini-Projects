import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
      <ContactForm />
      </main>
    </div>
  )
}

export default App
