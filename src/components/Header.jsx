import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Menu, X, Home, User, Tag as TagIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio", icon: <Home className="mr-2 h-4 w-4" /> },
    { to: "/quien-soy", label: "Quién Soy", icon: <User className="mr-2 h-4 w-4" /> },
    { to: "/descuentos-suplementacion", label: "Suplementos", icon: <TagIcon className="mr-2 h-4 w-4" /> },
  ];

  const NavItem = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
          isActive
            ? 'bg-accent/20 text-accent'
            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
        }`
      }
    >
      {children}
    </NavLink>
  );

  const MobileNavItem = ({ to, children, onClick }) => (
     <NavLink
      to={to}
      onClick={() => {
        onClick();
        setMobileMenuOpen(false);
      }}
      className={({ isActive }) =>
        `flex items-center w-full px-4 py-3 text-base font-medium rounded-md ${
          isActive
            ? 'bg-accent/20 text-accent'
            : 'text-foreground/80 hover:bg-secondary/50 hover:text-primary'
        }`
      }
    >
      {children}
    </NavLink>
  );


  return (
    <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            Naomi Navarro
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <NavItem key={link.to} to={link.to}>{link.label}</NavItem>
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
            <DropdownMenuContent align="end" className="w-56 mt-2 p-2 bg-background shadow-xl rounded-lg border-border">
              {navLinks.map(link => (
                <DropdownMenuItem key={link.to} asChild className="focus:bg-accent/10">
                  <MobileNavItem to={link.to} onClick={() => setMobileMenuOpen(false)}>
                    {link.icon} {link.label}
                  </MobileNavItem>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild className="focus:bg-accent/10">
                 <button 
                    onClick={() => {
                      onContactClick();
                      setMobileMenuOpen(false);
                    }} 
                    className="flex items-center w-full px-4 py-3 text-base font-medium rounded-md text-foreground/80 hover:bg-secondary/50 hover:text-primary"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Contactar
                  </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;