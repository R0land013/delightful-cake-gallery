
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CakeSlice, Menu, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream-50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <CakeSlice className="h-6 w-6 text-brown-300" />
            <span className="text-xl font-playfair font-semibold text-brown-400">Sweet Delights</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brown-300 hover:text-brown-400 transition-colors">Home</Link>
            <Link to="/#about" className="text-brown-300 hover:text-brown-400 transition-colors">About</Link>
            <Link to="/flavors" className="text-brown-300 hover:text-brown-400 transition-colors">Flavors</Link>
            <Link to="/#cakes" className="text-brown-300 hover:text-brown-400 transition-colors">Our Cakes</Link>
            <Link to="/#contact" className="text-brown-300 hover:text-brown-400 transition-colors">Contact</Link>
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
              <Link 
                to="/" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/flavors" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Flavors
              </Link>
              <Link 
                to="/#cakes" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Cakes
              </Link>
              <Link 
                to="/#contact" 
                className="px-4 py-2 text-brown-300 hover:bg-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
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
