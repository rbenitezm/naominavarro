import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Menu, X, Home, User, Tag as TagIcon, ChevronDown, ShoppingCart, Leaf, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";

const Header = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio", icon: <Home className="mr-2 h-4 w-4" /> },
    { to: "/quien-soy", label: "Quién Soy", icon: <User className="mr-2 h-4 w-4" /> },
    { to: "/ebook", label: "Ebook", icon: <Book className="mr-2 h-4 w-4" /> },
    {
      label: "Suplementos",
      icon: <TagIcon className="mr-2 h-4 w-4" />,
      isSubmenu: true,
      subLinks: [
        { to: "/suplementos/npro", label: "N-PRO", icon: <ShoppingCart className="mr-2 h-4 w-4" /> },
        { to: "/suplementos/cien-por-cien-natural", label: "100% Natural", icon: <Leaf className="mr-2 h-4 w-4" /> },
      ]
    },
    {
      to: "https://www.instagram.com/naomi_navarro_coach",
      label: "Instagram",
      icon: <Instagram className="mr-2 h-4 w-4" />,
      external: true
    },
  ];

  const NavItem = ({ to, icon, children, onClick, external, hasSubmenu = false, subLinks = [] }) => {
    const isActive = location.pathname === to || (hasSubmenu && subLinks.some(sub => location.pathname === sub.to));

    if (hasSubmenu) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-150 flex items-center
                ${isActive
                  ? 'bg-accent/20 text-accent'
                  : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                }`}
            >
              {icon} {children} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background border-border shadow-lg">
            {subLinks.map(subLink => (
              <DropdownMenuItem key={subLink.to} asChild className="focus:bg-accent/10">
                <NavLink
                  to={subLink.to}
                  className={({ isActive: isSubActive }) =>
                    `flex items-center w-full px-3 py-2 text-sm font-medium rounded-md
                    ${isSubActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground/80 hover:bg-secondary/50 hover:text-primary'
                    }`
                  }
                >
                  {subLink.icon} {subLink.label}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    if (external) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 text-foreground/70 hover:text-primary hover:bg-secondary/50"
        >
          {icon} {children}
        </a>
      );
    }

    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive
            ? 'bg-accent/20 text-accent'
            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
          }`
        }
      >
        {icon} {children}
      </NavLink>
    );
  };

  const MobileNavItem = ({ to, children, onClick, hasSubmenu = false, subLinks = [] }) => {
    if (hasSubmenu) {
      return (
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            className="flex items-center w-full px-4 py-3 text-base font-medium rounded-md text-foreground/80 hover:bg-secondary/50 hover:text-primary focus:bg-accent/10"
            onClick={() => console.log('Submenú abierto')}
          >
            {children} <ChevronDown className="ml-auto h-4 w-4" />
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              className="bg-background border-border shadow-lg p-1 z-50"
            >
              {subLinks.map(subLink => (
                <DropdownMenuItem key={subLink.to} asChild className="focus:bg-accent/10">
                  <NavLink
                    to={subLink.to}
                    onClick={() => setMobileMenuOpen(false)} // Cierra el menú móvil al seleccionar un subenlace
                    className={({ isActive }) =>
                      `flex items-center w-full px-3 py-2 text-sm font-medium rounded-md
                      ${isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground/80 hover:bg-secondary/50 hover:text-primary'
                      }`
                    }
                  >
                    {subLink.icon} {subLink.label}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }

    return (
      <NavLink
        to={to}
        onClick={() => {
          if (onClick) onClick();
          setMobileMenuOpen(false);
        }}
        className={({ isActive }) =>
          `flex items-center w-full px-4 py-3 text-base font-medium rounded-md ${isActive
            ? 'bg-accent/20 text-accent'
            : 'text-foreground/80 hover:bg-secondary/50 hover:text-primary'
          }`
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="text-2xl flex font-bold text-primary hover:text-accent transition-colors">
            <img
              src="/images/logo-mini.png" // Ruta de la imagen en la carpeta public
              alt="Logo Naomi Navarro"
              className="w-8 h-8 mr-2" // Ajusta el tamaño y el margen
            />
            Naomi Navarro
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <NavItem key={link.label} to={link.to} hasSubmenu={link.isSubmenu} subLinks={link.subLinks} icon={link.icon} external={link.external}>
              {link.icon && React.cloneElement(link.icon, { className: "mr-1 h-4 w-4 hidden" })} {link.label}
            </NavItem>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 mt-2 p-2 bg-background shadow-xl rounded-lg border-border md:hidden"
            >
              {navLinks.map(link => (
                link.isSubmenu ? (
                  <MobileNavItem key={link.label} hasSubmenu={true} subLinks={link.subLinks}>
                    {link.icon} {link.label}
                  </MobileNavItem>
                ) : (
                  <DropdownMenuItem key={link.to} asChild className="focus:bg-accent/10">
                    <MobileNavItem to={link.to} onClick={() => setMobileMenuOpen(false)}>
                      {link.icon} {link.label}
                    </MobileNavItem>
                  </DropdownMenuItem>
                )
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;