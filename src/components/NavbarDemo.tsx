'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Board",
      link: "/board",
    },
    {
      name: "Events",
      link: "/events",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Highlights
            </NavbarButton> */}
            <NavbarButton
              href="https://chat.whatsapp.com/JmwKQ302xhCGe3rzmWXt1h?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Join Community
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="https://chat.whatsapp.com/JmwKQ302xhCGe3rzmWXt1h?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Highlights
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="https://chat.whatsapp.com/JmwKQ302xhCGe3rzmWXt1h?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
