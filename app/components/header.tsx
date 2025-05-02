"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { SeriesMetadata } from "../../types"
import { getAllSeries } from "../../lib/services/product-service"

export function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [chairSeriesData, setChairSeriesData] = useState<Record<string, SeriesMetadata> | null>(null);
  const [deskSeriesData, setDeskSeriesData] = useState<Record<string, SeriesMetadata> | null>(null);
  const [storageSeriesData, setStorageSeriesData] = useState<Record<string, SeriesMetadata> | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [chairs, desks, storage] = await Promise.all([
          getAllSeries('chairs'),
          getAllSeries('desks'),
          getAllSeries('storage')
        ]);
        
        if (mounted) {
          setChairSeriesData(chairs);
          setDeskSeriesData(desks);
          setStorageSeriesData(storage);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
          console.error('Error fetching series data:', err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-sm bg-white/15 border-b border-white/20"
    >
      <div className="container flex h-16 items-center justify-between gap-4 px-4 transition-all duration-300">
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger className="p-2 md:hidden hover:bg-accent/50 rounded-lg transition-colors">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] backdrop-blur-sm bg-white/80 border-r border-white/20">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">SteelMade</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="chairs">
                  <AccordionTrigger className="text-lg font-medium">Chairs</AccordionTrigger>
                <AccordionContent>
                    {chairSeriesData && Object.entries(chairSeriesData).map(([id, series], index) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                      <Link
                        key={id}
                        href={`/chairs/${id}`}
                        className="block px-4 py-2 my-1 rounded-lg hover:bg-white/30 transition-all"
                      >
                        <div className="font-medium">{series.title}</div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{series.description}</p>
                      </Link>
                      </motion.div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="desks">
                  <AccordionTrigger className="text-lg font-medium">Desks</AccordionTrigger>
                <AccordionContent>
                    {deskSeriesData && Object.entries(deskSeriesData).map(([id, series], index) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                      <Link
                        key={id}
                        href={`/desks/${id}`}
                        className="block px-4 py-2 my-1 rounded-lg hover:bg-white/30 transition-all"
                      >
                        <div className="font-medium">{series.title}</div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{series.description}</p>
                      </Link>
                      </motion.div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="storage">
                  <AccordionTrigger className="text-lg font-medium">Storage</AccordionTrigger>
                <AccordionContent>
                    {storageSeriesData && Object.entries(storageSeriesData).map(([id, series], index) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                      <Link
                        key={id}
                        href={`/storage/${id}`}
                        className="block px-4 py-2 my-1 rounded-lg hover:bg-white/30 transition-all"
                      >
                        <div className="font-medium">{series.title}</div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{series.description}</p>
                      </Link>
                      </motion.div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              {[
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="block w-full px-4 py-3 rounded-lg hover:bg-white/30 active:bg-white/20 transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle - Mobile */}
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Logo - Centered on mobile */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-morphism absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-10"
        >
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">SteelMade</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Chairs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-3 p-6 w-[400px] backdrop-blur-sm bg-white/15 rounded-lg border border-white/20"
                >
                  {isLoading ? (
                    <li className="text-sm text-muted-foreground">Loading...</li>
                  ) : error ? (
                    <li className="text-sm text-red-500">{error}</li>
                  ) : chairSeriesData && Object.entries(chairSeriesData).length > 0 ? (
                    Object.entries(chairSeriesData).map(([id, series]) => (
                    <li key={id}>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={`/chairs/${id}`}
                          className="morphism-surface block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/30 hover:shadow-morphism-hover focus:bg-white/30 focus:shadow-morphism-hover"
                        >
                          <div className="text-sm font-medium leading-none">
                            {series.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {series.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">No chair series available</li>
                  )}
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Desks</NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-3 p-6 w-[400px] backdrop-blur-sm bg-white/15 rounded-lg border border-white/20"
                >
                  {isLoading ? (
                    <li className="text-sm text-muted-foreground">Loading...</li>
                  ) : error ? (
                    <li className="text-sm text-red-500">{error}</li>
                  ) : deskSeriesData && Object.entries(deskSeriesData).length > 0 ? (
                    Object.entries(deskSeriesData).map(([id, series]) => (
                    <li key={id}>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={`/desks/${id}`}
                          className="morphism-surface block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/30 hover:shadow-morphism-hover focus:bg-white/30 focus:shadow-morphism-hover"
                        >
                          <div className="text-sm font-medium leading-none">
                            {series.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {series.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">No desk series available</li>
                  )}
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Storage</NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-3 p-6 w-[400px] backdrop-blur-sm bg-white/15 rounded-lg border border-white/20"
                >
                  {isLoading ? (
                    <li className="text-sm text-muted-foreground">Loading...</li>
                  ) : error ? (
                    <li className="text-sm text-red-500">{error}</li>
                  ) : storageSeriesData && Object.entries(storageSeriesData).length > 0 ? (
                    Object.entries(storageSeriesData).map(([id, series]) => (
                    <li key={id}>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={`/storage/${id}`}
                          className="morphism-surface block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/30 hover:shadow-morphism-hover focus:bg-white/30 focus:shadow-morphism-hover"
                        >
                          <div className="text-sm font-medium leading-none">
                            {series.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {series.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">No storage series available</li>
                  )}
                </motion.ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-200`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-200`}
                >
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-200`}
                >
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${navigationMenuTriggerStyle()} backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-200`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle - Desktop */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
