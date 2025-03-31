
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface FlavorCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const FlavorCard = ({ name, description, image, tags }: FlavorCardProps) => {
  // Use a placeholder image if the specified one doesn't exist
  const imageSrc = image || "/placeholder.svg";

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      
      <CardContent className="flex-grow p-5">
        <h3 className="font-playfair text-xl font-bold text-brown-400 mb-2">{name}</h3>
        <p className="text-sm text-brown-300">{description}</p>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2 p-5 pt-0">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="bg-cream-100 text-brown-300 hover:bg-cream-200"
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default FlavorCard;
