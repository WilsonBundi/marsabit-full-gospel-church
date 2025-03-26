
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Heart, CreditCard, ArrowRight, Users2, ChurchIcon } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
            alt="Giving" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">Give</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Support the ministry and mission of Marsabit Full Gospel Church.
          </p>
        </div>
      </section>

      {/* Giving Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Ways to Give</h2>
            <p className="text-center text-lg mb-12">
              Your generous contributions help support our church ministries, community outreach, 
              and the spreading of the Gospel message in Marsabit and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">M-Pesa</h3>
                </div>
                <p className="mb-4">
                  Give easily and securely using M-Pesa, Kenya's mobile money transfer service.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <p className="font-semibold mb-2">M-Pesa Number:</p>
                  <p className="text-2xl font-bold text-primary">0726976413</p>
                </div>
                <p className="text-sm">
                  Steps to give via M-Pesa:
                </p>
                <ol className="text-sm mt-2 space-y-2">
                  <li>1. Go to M-Pesa on your phone</li>
                  <li>2. Select "Send Money"</li>
                  <li>3. Enter the number: 0714 978525</li>
                  <li>4. Enter the amount you wish to give</li>
                  <li>5. Enter your PIN and confirm</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">In-Person Giving</h3>
                </div>
                <p className="mb-4">
                  Give during our Sunday services or drop by the church office during the week.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Church Office Hours:</p>
                  <p>Monday to Friday: 8:00 AM to 5:00 PM</p>
                  <p>Saturday: 9:00 AM to 1:00 PM</p>
                </div>
                <p>
                  During Sunday services, offering baskets are passed during the designated 
                  giving time, or you can place your offering in the boxes located at the 
                  back. Pybill will also be projected on the screen.
                </p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Bank Transfer</h3>
              </div>
              <p className="mb-4">
                You can also contribute through a direct bank transfer to our church account.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="font-semibold">Bank Name:</p>
                  <p>Kenya Commercial Bank (KCB)</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="font-semibold">Account Name:</p>
                  <p>Marsabit Full Gospel Church</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="font-semibold">Account Number:</p>
                  <p>1234567890</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="font-semibold">Branch:</p>
                  <p>Marsabit Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Impact */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <h2 className="section-title">Your Giving Makes a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Supporting Ministries</h3>
              <p className="text-center">
                Your donations help fund our various ministries, including youth, children, music, 
                and outreach programs that reach people of all ages.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community Impact</h3>
              <p className="text-center">
                Your generosity enables us to serve the Marsabit community through food drives, 
                educational support, and assistance to those in need.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <ChurchIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Church Growth</h3>
              <p className="text-center">
                Contributions support church maintenance, facility improvements, and resources 
                needed to provide a welcoming environment for worship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Stewardship Promise</h2>
            <p className="text-center italic mb-6">
              "We commit to using all gifts with integrity, transparency, and for the purpose 
              of furthering God's kingdom. Every contribution is managed with prayer, wisdom, 
              and accountability."
            </p>
            <p className="text-center font-medium">
              — Pastor Haliso, Senior Pastor
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Giving?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We're happy to answer any questions you may have about donations, tithing, 
            or financial stewardship.
          </p>
          <button className="btn-secondary inline-flex items-center">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
