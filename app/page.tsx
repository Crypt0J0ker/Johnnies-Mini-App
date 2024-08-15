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
    <div
      className="min-h-screen flex flex-col items-center py-10 bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://storage.yandexcloud.net/mobiltelefon/june23/06/oboi_ios_17_uzhe_dostupny_dla_vseh_zhelauschih_picture2_0_resize.jpg)',
      }}
    >
      <h1 className="text-2xl font-bold mb-6">Johnnies Mini App</h1>

      <div className="space-y-4 w-full px-4 py-8 justify-center items-center flex flex-col">
        <button className="w-44 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Start Lesson
        </button>
        <button className="w-44 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Pass Test
        </button>
        <button className="w-44 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600">
          Mint NFT
        </button>
      </div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
