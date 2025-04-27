"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "La dialyse", href: "/dialyse" },
    { name: "Types de dialyse", href: "/types" },
    { name: "Vivre avec", href: "/vivre-avec" },
    { name: "Vidéos", href: "/videos" },
    { name: "Centres de dialyse", href: "/centres-dialyse" },
    { name: "Calculateur", href: "/calculateur-nutritionnel" },
    { name: "FAQ", href: "/faq" },
    { name: "Ressources", href: "/ressources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="container flex items-center justify-between h-16 mx-auto px-4 sm:px-6 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">Info Dialyse</span>
        </Link>

        <div className="flex items-center space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-medium transition-colors hover:text-blue-600",
                        pathname === item.href ? "text-blue-600" : "text-zinc-700 dark:text-zinc-300"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <LanguageSwitcher />

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
