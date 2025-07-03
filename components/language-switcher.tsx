"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { languages, type Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        {languages[currentLang]}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border rounded-md shadow-lg z-50 min-w-[120px]">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as Language)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                currentLang === code ? "bg-green-50 text-green-600" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
