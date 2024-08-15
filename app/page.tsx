'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      window.Telegram.WebApp.ready()
    }
  }, [])

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Telegram) {
      window.Telegram.WebApp.showAlert('Hello from Johnnies Mini App!')
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Johnnies Mini App</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
