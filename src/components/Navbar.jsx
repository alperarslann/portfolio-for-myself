import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), href: "#hero" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Alper Arslan </span>{" "}
            Portfolyo
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "px-3 py-1.5 rounded-full transition-all duration-300",
              "bg-primary/10 hover:bg-primary/20 border border-primary/30",
              "flex items-center gap-1.5 text-sm font-medium"
            )}
            aria-label="Toggle Language"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
          </button>
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Language Toggle - Next to hamburger menu */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "px-2.5 py-1.5 rounded-full transition-all duration-300 z-50",
              "bg-primary/10 hover:bg-primary/20 border border-primary/30",
              "flex items-center gap-1.5 text-xs font-medium"
            )}
            aria-label="Toggle Language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="uppercase">{i18n.language === 'tr' ? 'EN' : 'TR'}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
