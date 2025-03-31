
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CakeCard from "./CakeCard";

const cakes = [
  {
    id: 1,
    name: "Triple Chocolate Mousse",
    description: "Rich chocolate cake with layers of dark, milk, and white chocolate mousse, topped with chocolate shavings.",
    price: "$42.99",
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Bestseller"
  },
  {
    id: 2,
    name: "Strawberry Shortcake",
    description: "Light vanilla sponge cake with layers of fresh strawberries and whipped cream, decorated with strawberry slices.",
    price: "$38.99",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Fruit"
  },
  {
    id: 3,
    name: "Vanilla Bean Cheesecake",
    description: "Creamy vanilla bean cheesecake on a graham cracker crust, topped with fresh berries and a berry compote.",
    price: "$40.99",
    image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZXNlY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Cheesecake"
  },
  {
    id: 4,
    name: "Red Velvet Dream",
    description: "Moist red velvet cake with cream cheese frosting, decorated with red velvet crumbs and edible gold dust.",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1586788680434-30d324626f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Specialty"
  }
];

const categories = ["All", "Bestseller", "Fruit", "Cheesecake", "Specialty"];

const FeaturedCakes = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCakes = activeCategory === "All" 
    ? cakes 
    : cakes.filter(cake => cake.category === activeCategory);

  return (
    <section id="cakes" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-brown-300 font-medium">Delicious Treats</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brown-400">Our Featured Cakes</h3>
          <p className="text-brown-300">
            Discover our selection of handcrafted cakes made with the finest ingredients
            and baked fresh daily. Perfect for any special occasion.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category 
                  ? "bg-brown-300 text-white" 
                  : "border-brown-200 text-brown-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCakes.map((cake) => (
            <CakeCard
              key={cake.id}
              name={cake.name}
              description={cake.description}
              price={cake.price}
              image={cake.image}
              category={cake.category}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary">
            View All Cakes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
