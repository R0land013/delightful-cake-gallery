
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-brown-300 font-medium">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brown-400">Visit Our Bakery</h3>
          <p className="text-brown-300">
            Have questions or want to place a custom order? 
            Contact us or visit our store to taste our delicious cakes in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-brown-400 mb-6">Send Us a Message</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-brown-300">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Jane Smith" className="border-brown-100 focus-visible:ring-brown-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brown-300">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="jane@example.com" className="border-brown-100 focus-visible:ring-brown-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-brown-300">
                  Subject
                </label>
                <Input id="subject" placeholder="Order Inquiry" className="border-brown-100 focus-visible:ring-brown-300" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-brown-300">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your cake needs..." 
                  className="h-32 resize-none border-brown-100 focus-visible:ring-brown-300"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Store Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-brown-400">Store Information</h4>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brown-300" />
                </div>
                <div>
                  <h5 className="font-medium text-brown-400">Our Location</h5>
                  <p className="text-brown-300">123 Bakery Street, Sweet Town, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brown-300" />
                </div>
                <div>
                  <h5 className="font-medium text-brown-400">Phone Number</h5>
                  <p className="text-brown-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brown-300" />
                </div>
                <div>
                  <h5 className="font-medium text-brown-400">Email Address</h5>
                  <p className="text-brown-300">info@sweetdelights.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brown-300" />
                </div>
                <div>
                  <h5 className="font-medium text-brown-400">Opening Hours</h5>
                  <p className="text-brown-300">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="text-brown-300">Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFrZXJ5JTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                alt="Our bakery storefront" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
