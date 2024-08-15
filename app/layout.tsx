'use client'

import React, { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-web-app.js'
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        if (window.Telegram) {
          window.Telegram.WebApp.ready()
        }
      }
    }
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
