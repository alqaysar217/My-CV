"use client";

import type { ReactNode } from "react";
import { createContext, useState, useContext, useMemo, useEffect } from "react";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const direction = useMemo(
    () => (language === "ar" ? "rtl" : "ltr"),
    [language]
  );

  const value = {
    language,
    direction,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
