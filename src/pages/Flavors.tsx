import { CakeSlice, Cherry, Candy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FlavorCard from "@/components/FlavorCard";
import { Helmet } from "react-helmet-async";

const Flavors = () => {
  return (
    <>
      <Helmet>
        <title>Our Delicious Cake Flavors | Sweet Delights Bakery</title>
        <meta name="description" content="Discover our wide range of handcrafted cake flavors including chocolate, vanilla, strawberry, and specialty flavors made with premium ingredients." />
        <link rel="canonical" href="https://sweetdelights.com/flavors" />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-cream-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brown-400 leading-tight">
                Our Delicious <span className="text-pink-300">Flavors</span>
              </h1>
              <p className="mt-6 text-lg text-brown-300">
                Discover our wide range of handcrafted cake flavors, made with premium ingredients and passion for baking.
              </p>
            </div>
          </div>
        </section>
        
        {/* Flavor Categories */}
        <section aria-labelledby="flavor-categories" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="flavor-categories" className="font-playfair text-3xl font-bold text-brown-400">Flavor Categories</h2>
              <p className="mt-3 text-brown-300">Browse our extensive selection of flavor categories</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cream-100 p-8 rounded-xl text-center">
                <div className="mx-auto bg-pink-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <CakeSlice className="h-8 w-8 text-brown-300" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-brown-400 mb-2">Classic Flavors</h3>
                <p className="text-brown-300">Traditional favorites that never go out of style</p>
              </div>
              
              <div className="bg-cream-100 p-8 rounded-xl text-center">
                <div className="mx-auto bg-pink-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Cherry className="h-8 w-8 text-brown-300" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-brown-400 mb-2">Fruit Flavors</h3>
                <p className="text-brown-300">Fresh and tangy flavors from seasonal fruits</p>
              </div>
              
              <div className="bg-cream-100 p-8 rounded-xl text-center">
                <div className="mx-auto bg-pink-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Candy className="h-8 w-8 text-brown-300" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-brown-400 mb-2">Premium Flavors</h3>
                <p className="text-brown-300">Luxurious and special occasion indulgences</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Flavors */}
        <section aria-labelledby="all-flavors" className="py-16 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="all-flavors" className="font-playfair text-3xl font-bold text-brown-400">All Flavors</h2>
              <p className="mt-3 text-brown-300">Explore our complete collection of delightful cake flavors</p>
            </div>
            
            <div className="mb-12">
              <h3 className="font-playfair text-2xl font-bold text-brown-400 mb-6">Classic Flavors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FlavorCard 
                  name="Vanilla Bean"
                  description="Rich Madagascar vanilla beans infused into our moist cake base for a classic and timeless flavor."
                  image="/vanilla-cake.jpg"
                  tags={["bestseller", "wedding"]}
                />
                <FlavorCard 
                  name="Chocolate Decadence"
                  description="Premium dark chocolate cake with layers of chocolate ganache and chocolate buttercream."
                  image="/chocolate-cake.jpg"
                  tags={["popular", "birthday"]}
                />
                <FlavorCard 
                  name="Red Velvet"
                  description="Smooth and velvety red cake with a hint of cocoa, paired with our signature cream cheese frosting."
                  image="/red-velvet.jpg"
                  tags={["classic", "anniversary"]}
                />
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="font-playfair text-2xl font-bold text-brown-400 mb-6">Fruit Flavors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FlavorCard 
                  name="Lemon Zest"
                  description="Tangy lemon-infused cake with lemon curd filling and light lemon buttercream."
                  image="/lemon-cake.jpg"
                  tags={["summer", "refreshing"]}
                />
                <FlavorCard 
                  name="Strawberry Fields"
                  description="Fresh strawberry cake with strawberry compote filling and strawberry cream frosting."
                  image="/strawberry-cake.jpg"
                  tags={["spring", "fruity"]}
                />
                <FlavorCard 
                  name="Blueberry Bliss"
                  description="Blueberry-infused cake with blueberry compote and cream cheese frosting."
                  image="/blueberry-cake.jpg"
                  tags={["seasonal", "berry"]}
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-2xl font-bold text-brown-400 mb-6">Premium Flavors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FlavorCard 
                  name="Salted Caramel"
                  description="Buttery caramel-infused cake with salted caramel drizzle and caramel buttercream."
                  image="/caramel-cake.jpg"
                  tags={["premium", "gourmet"]}
                />
                <FlavorCard 
                  name="Cookies & Cream"
                  description="Vanilla cake with crushed chocolate cookies throughout, filled and frosted with cookies and cream frosting."
                  image="/cookies-cream-cake.jpg"
                  tags={["kids favorite", "celebration"]}
                />
                <FlavorCard 
                  name="Champagne & Raspberry"
                  description="Light champagne cake with raspberry filling and champagne buttercream. Perfect for special celebrations."
                  image="/champagne-cake.jpg"
                  tags={["luxury", "special occasion"]}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Custom Flavors CTA */}
        <section aria-labelledby="custom-flavors" className="py-16 bg-pink-100">
          <div className="container mx-auto px-4 text-center">
            <h2 id="custom-flavors" className="font-playfair text-3xl font-bold text-brown-400 mb-4">Can't Find Your Favorite?</h2>
            <p className="text-brown-300 max-w-2xl mx-auto mb-8">
              We love a challenge! Our pastry chefs can create custom flavors for your special occasions.
              Just let us know what you're dreaming of!
            </p>
            <Button className="bg-brown-300 hover:bg-brown-400 text-white">
              Request Custom Flavor
            </Button>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Flavors;
