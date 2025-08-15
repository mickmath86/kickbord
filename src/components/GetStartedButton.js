'use client'
import { useState } from 'react'
import { Button } from './button'

export default function GetStartedButton({ planPriceId }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: planPriceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <Button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      disabled={loading}
    >
      {loading ? 'Redirecting...' : 'Get Started'}
    </Button>
  )
}
