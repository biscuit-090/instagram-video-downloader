"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-is-mobile";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { LogoImage, LogoText } from "@/components/logo";
import { LocaleDropdown } from "@/features/i18n/locale-dropdown";
import { ThemeToggleButton } from "@/features/theme/theme-toggle-button";

import { Menu } from "lucide-react";

import { homeLinks } from "@/lib/constants";

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("layouts.home.header");

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div
          role="button"
          onClick={scrollUp}
          className="flex cursor-pointer items-center gap-2"
        >
          <LogoImage className="h-6 w-6 text-teal-500" />
          <LogoText />
        </div>
      </div>
    </header>
  );
}
