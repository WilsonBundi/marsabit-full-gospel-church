
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
            alt="Church" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our history, mission, and the people who make our church a community.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our History</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Marsabit Full Gospel Churches of Kenya was founded with a vision to bring the 
                message of hope and salvation to the people of Marsabit. What began as a small 
                gathering of believers has grown into a vibrant community of faith.
              </p>
              <p className="text-lg mb-4">
                Over the years, we have established multiple church locations throughout the 
                region, reaching diverse communities and serving the spiritual needs of people 
                from all walks of life.
              </p>
              <p className="text-lg mb-4">
                Through dedication to prayer, worship, and community service, we continue to grow 
                and impact the lives of those in our congregation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg mb-4">
                To share the love of Christ through worship, fellowship, and service, building a 
                community of believers dedicated to glorifying God and spreading His message.
              </p>
              <p className="text-lg">
                We strive to be a beacon of hope in Marsabit, meeting spiritual and physical 
                needs through our various ministries and outreach programs.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-lg mb-4">
                To be a transformative presence in our community, leading people to a deeper 
                relationship with God and equipping them to live out their faith in their daily lives.
              </p>
              <p className="text-lg">
                We envision a church that embraces all people, empowers believers to discover 
                their gifts, and impacts society through acts of love and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Leadership</h2>
          
          {/* Senior Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Senior Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                    alt="Pastor Haliso" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Pastor Haliso</h4>
                  <p className="text-primary font-medium mb-4">Senior Pastor</p>
                  <p className="text-muted-foreground">
                    Pastor Haliso has led our congregation for over 15 years, bringing wisdom, 
                    compassion, and spiritual guidance to our church family.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                    alt="Reverend Nthurima Fabian" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Rev. Nthurima Fabian</h4>
                  <p className="text-primary font-medium mb-4">Associate Pastor</p>
                  <p className="text-muted-foreground">
                    Reverend Fabian oversees our spiritual development programs and provides 
                    pastoral care to our members, helping them grow in their faith journey.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                    alt="Chairperson Mr. Mwirigi" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Chairperson Mr. Mwirigi</h4>
                  <p className="text-primary font-medium mb-4">Church Chairman</p>
                  <p className="text-muted-foreground">
                    As church chairman, Mr. Mwirigi leads our administrative efforts, working 
                    with the leadership team to ensure effective church operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ministry Leaders */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Ministry Leaders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold mb-1">Joy</h4>
                <p className="text-primary font-medium mb-2">Prayer Docket Leader</p>
                <p className="text-muted-foreground">
                  Coordinates our prayer ministry and leads intercessory prayer sessions. She is also a worship minister. She is so zealous for Christ Jesus.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold mb-1">Erick Gatobu</h4>
                <p className="text-primary font-medium mb-2">Choir Leader</p>
                <p className="text-muted-foreground">
                  Directs our church choir and oversees music selection for services. He is also an elder in church.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold mb-1">Judy Mwangi</h4>
                <p className="text-primary font-medium mb-2">Praise & Worship Leader</p>
                <p className="text-muted-foreground">
                  Leads the praise and worship team.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold mb-1">Maina Stephen</h4>
                <p className="text-primary font-medium mb-2">Youth Ministry Leader</p>
                <p className="text-muted-foreground">
                  Guides our youth program, organizing activities and spiritual growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <h2 className="section-title">Our Beliefs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">The Bible</h3>
                <p>
                  We believe the Bible is the inspired, infallible Word of God and our guide for 
                  faith and practice.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">God</h3>
                <p>
                  We believe in one God, eternally existing in three persons: Father, Son, and 
                  Holy Spirit.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Jesus Christ</h3>
                <p>
                  We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, 
                  miracles, atoning death, and bodily resurrection.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Salvation</h3>
                <p>
                  We believe salvation is a gift from God received through faith in Jesus Christ, 
                  whose blood was shed for the forgiveness of sins.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Holy Spirit</h3>
                <p>
                  We believe in the present ministry of the Holy Spirit, who indwells Christians 
                  and empowers them to live godly lives.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">The Church</h3>
                <p>
                  We believe the church is the body of Christ, composed of all believers, with the 
                  mission to worship God and share His message with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
