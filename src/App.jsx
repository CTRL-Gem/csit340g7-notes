import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'

function App() {
  const [largeText, setLargeText] = useState(() => {
    const saved = localStorage.getItem('largeText')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('largeText', JSON.stringify(largeText))
  }, [largeText])

  return (
    <SettingsContext.Provider value={{ largeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <button
          type="button"
          onClick={() => setLargeText(!largeText)}
          className="fixed top-7 right-8 z-10 cursor-pointer text-[13px] text-[#949494] underline"
        >
          {largeText ? 'Normal text' : 'Large text'}
        </button>
        <Notes />
        <Info name="Deanne Romar R. Gemal" />
      </div>
    </SettingsContext.Provider>
  )
}

export default App