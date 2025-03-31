
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Our bakery" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-pink-100 h-32 w-32 rounded-full -z-10"></div>
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-brown-300 font-medium">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brown-400">Passion for Baking Since 2010</h3>
            
            <div className="w-20 h-1 bg-accent"></div>
            
            <p className="text-brown-300">
              Sweet Delights was born from a simple passion for creating delicious, 
              high-quality cakes that bring joy to people's special moments. What started 
              as weekend baking in a small kitchen has grown into a beloved local bakery.
            </p>
            
            <p className="text-brown-300">
              We believe in using only the finest ingredients - fresh fruits, premium chocolate, 
              real butter, and organic flour. Every cake is handcrafted with attention to detail 
              and decorated with artistic flair.
            </p>
            
            <Button className="btn-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
