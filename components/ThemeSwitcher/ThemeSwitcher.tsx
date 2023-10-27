"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="summer">Summer</option>
      <option value="university">University</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeSwitcher