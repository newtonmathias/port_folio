"use client";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../../../components/ui/navigation-menu";
import { siteConfig } from "@/config";
import { Button } from "../../../../components/ui/button";
import { Github, Twitter } from "lucide-react";
import { ModeToggle } from "../../../../components/mode-toggle";
import AIChatButton from "../../../../components/ai-chat-button";

const MainNav = () => {
  return (
    <div className="hidden gap-6 lg:flex justify-between py-3">
      <div className="hidden gap-6 lg:flex">
        <Link
          aria-label="NMM"
          href="/"
          className="hidden items-center space-x-2 lg:flex"
        >
          <span className="hidden font-bold lg:inline-block text-3xl font-lustria">
            NMM
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {siteConfig.mainNav.map((item) => (
              <NavigationMenuItem key={item.link}>
                <Link href={`#${item.link}`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <Link
            href="https://github.com/newtonmathias"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="toggle" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://twitter.com/newto97"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="toggle" size="icon">
              <Twitter className="h-4 w-4 fill-current" />
            </Button>
          </Link>

          <ModeToggle />
          <AIChatButton />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNav;
