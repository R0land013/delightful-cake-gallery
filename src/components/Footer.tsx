
import { CakeSlice, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-400 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CakeSlice className="h-6 w-6" />
              <span className="text-xl font-playfair font-semibold">Sweet Delights</span>
            </div>
            <p className="text-cream-100 text-sm">
              Handcrafted cakes made with love using only the finest ingredients.
              Making your special moments sweeter since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-playfair font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream-100 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-cream-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#cakes" className="text-cream-100 hover:text-white transition-colors">Our Cakes</a>
              </li>
              <li>
                <a href="#contact" className="text-cream-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h5 className="font-playfair font-bold text-lg mb-4">Cake Categories</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cream-100 hover:text-white transition-colors">Birthday Cakes</a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-white transition-colors">Wedding Cakes</a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-white transition-colors">Specialty Cakes</a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-white transition-colors">Cupcakes</a>
              </li>
              <li>
                <a href="#" className="text-cream-100 hover:text-white transition-colors">Seasonal Specials</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="font-playfair font-bold text-lg mb-4">Contact Us</h5>
            <address className="not-italic text-cream-100 space-y-2 text-sm">
              <p>123 Bakery Street</p>
              <p>Sweet Town, CA 90210</p>
              <p className="pt-2">(555) 123-4567</p>
              <p>info@sweetdelights.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-brown-300 mt-12 pt-8 text-sm text-center text-cream-100">
          <p>© {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
