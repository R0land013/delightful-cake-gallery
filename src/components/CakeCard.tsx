
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface CakeCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const CakeCard = ({ name, description, price, image, category }: CakeCardProps) => {
  return (
    <div className="cake-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-cream-100 px-3 py-1 rounded-full text-xs font-medium text-brown-300">
          {category}
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="font-playfair text-xl font-bold text-brown-400">{name}</h3>
        <p className="text-sm text-brown-300 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="text-lg font-medium text-brown-400">{price}</div>
          <Button size="sm" variant="ghost" className="text-brown-300 hover:bg-cream-100">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
