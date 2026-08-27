"use client";

import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="shell site-nav" aria-label="Main navigation">
        <a className="brand" href="/home" aria-label="Go Limitless home">
          GO <span>LIMITLESS</span>
        </a>

        <NavigationMenu viewport={false} className="desktop-nav">
          <NavigationMenuList>
            {navItems.slice(1).map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink className="nav-link" href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="mobile-menu-button" variant="outline" size="icon" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="right">
            <SheetHeader>
              <SheetTitle className="mobile-sheet-title">GO LIMITLESS</SheetTitle>
              <SheetDescription className="sr-only">Go Limitless website navigation</SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a className="mobile-nav-cta" href="/classes#try-a-class">
                  Try a class
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
