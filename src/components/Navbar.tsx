
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CakeSlice, Menu, ShoppingBag, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream-50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <CakeSlice className="h-6 w-6 text-brown-300" />
            <span className="text-xl font-playfair font-semibold text-brown-400">Sweet Delights</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-brown-300 hover:text-brown-400 transition-colors">Home</a>
            <a href="#about" className="text-brown-300 hover:text-brown-400 transition-colors">About</a>
            <a href="#cakes" className="text-brown-300 hover:text-brown-400 transition-colors">Our Cakes</a>
            <a href="#contact" className="text-brown-300 hover:text-brown-400 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-brown-300 text-brown-300">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brown-300" />
              ) : (
                <Menu className="h-6 w-6 text-brown-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-cream-200 mt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#cakes" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Cakes
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="border-brown-300 text-brown-300 w-full">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
