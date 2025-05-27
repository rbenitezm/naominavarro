import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ onContactClick }) => {
  return (
    <header className="py-6 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-2xl font-bold text-primary">Naomi Navarro</span>
        </motion.div>
        {/* <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Button onClick={onContactClick} variant="ghost">
            <Mail className="mr-2 h-4 w-4" /> Contactar
          </Button>
        </motion.div> */}
      </div>
    </header>
  );
};

export default Header;