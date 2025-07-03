"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/lib/i18n"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("ar")) {
        setLanguage("ar")
      }
    }
  }, [])

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    localStorage.setItem("language", newLang)

    // Update document direction for RTL
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = newLang
  }

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return { language, changeLanguage }
}
