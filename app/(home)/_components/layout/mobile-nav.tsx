"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center">
      <Link
        aria-label="NMM"
        href="/"
        className="items-center space-x-2  lg:hidden  py-6"
      >
        <span className="font-bold text-3xl">NMM</span>
      </Link>
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pl-1 pr-0">
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-5 justify-center items-center">
                {siteConfig.mainNav?.map(
                  (item) =>
                    item.link && (
                      <MobileLink
                        key={item.title}
                        href={String(item.title)}
                        pathname={pathname}
                        setIsOpen={setIsOpen}
                      >
                        {item.title}
                      </MobileLink>
                    )
                )}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  pathname: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
