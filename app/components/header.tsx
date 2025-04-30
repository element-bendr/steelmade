"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import { SeriesMetadata } from "../../types"
import { cn } from "../../lib/utils"
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
    <header className="morphism sticky top-0 z-50 backdrop-blur-morphism bg-gradient-morphism border-b border-white/20">
      <div className="container flex h-16 items-center justify-center gap-8 transition-all duration-300">
        <Link 
          href="/" 
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-morphism"
        >
          <span className="text-xl font-bold text-text">SteelMade</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Chairs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
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
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Desks</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
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
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Storage</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
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
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
