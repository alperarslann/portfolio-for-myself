import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed top-5 right-5 z-50 px-4 py-2 rounded-full transition-all duration-300",
        "bg-primary/10 hover:bg-primary/20 backdrop-blur-md border border-primary/30",
        "flex items-center gap-2 text-sm font-medium"
      )}
      aria-label="Toggle Language"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
    </button>
  );
};
