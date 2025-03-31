
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-cream-50 to-cream-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 md:pr-8 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-pink-100 text-brown-300 rounded-full text-sm font-medium">
              Freshly Baked Every Day
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-400 leading-tight">
              Handcrafted Cakes for Every Occasion
            </h1>
            
            <p className="text-lg text-brown-300 max-w-lg">
              Delicious cakes made with love using only the finest ingredients. 
              From birthdays to weddings, we make your celebrations sweeter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Order Now
              </Button>
              <Button variant="outline" className="border-brown-300 text-brown-300 hover:bg-brown-100">
                View Menu
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-in">
            <div className="relative">
              <div className="rounded-full bg-pink-100 w-64 h-64 md:w-80 md:h-80 absolute -top-6 -right-6 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                alt="Delicious cake with berries" 
                className="rounded-2xl relative z-10 shadow-xl transform rotate-3 object-cover aspect-square w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-cream-200 rounded-full h-24 w-24 z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
