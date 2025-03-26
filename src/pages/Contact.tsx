
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                <p className="mb-8">
                  Whether you have questions about our church, need prayer, or want to learn 
                  more about our ministries, we're here to help. Reach out using any of the 
                  methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location</h3>
                      <p>Marsabit Full Gospel Church</p>
                      <p><span>Nyayo Road,</span> Marsabit Town</p>
                      <p>Marsabit County, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4 mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Office</h3>
                        <p>+254 726976413 (Rev. Nthurima)</p>
                        <p>+254 725561396 (Erick Gatobu)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4 mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Rev. Nthurima</h3>
                        <p className="font-medium">+254 726 976413</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>


                    <h3 className="font-bold text-lg mb-1">Email</h3>


<h3 className="font-bold text-lg mb-1">Facebook</h3>
<a 
  href="https://facebook.com/groups/1150567325424410/" 
  className="text-blue-600 hover:underline" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Join our Facebook Group
</a>


                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      
                      <p>fabiannthurimanthurima@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Service Times</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    <p>Sunday Service: <span className="font-medium">7:00 AM - 1:00 PM</span></p>
                    <p>Monday Prayers: <span className="font-medium">4:00 PM - 7:00 PM</span></p>
                    <p>Tuesday P&W: <span className="font-medium">4:00 PM - 7:00 PM</span></p>
                    <p>Wednesday Men: <span className="font-medium">5:30 PM - 7:00 PM</span></p>
                    <p>Thursday Home: <span className="font-medium">5:30 PM - 7:00 PM</span></p>
                    <p>Friday Prayers: <span className="font-medium">4:00 PM - 7:00 PM</span></p>
                    <p>Saturday Youth: <span className="font-medium">2:00 PM - 5:00 PM</span></p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block font-medium mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-medium mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Ministry Information">Ministry Information</option>
                      <option value="Visitation Request">Visitation Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-medium mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Google Map will be displayed here</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
