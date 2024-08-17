import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-28 ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Discover who we are, our mission, and what drives us forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At Techy Software, our mission is to create innovative and effective software solutions that help businesses
              succeed in the digital world. We are committed to excellence, customer satisfaction, and continuous improvement.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Innovation:</strong> We believe in pushing the boundaries of technology to create cutting-edge solutions.</li>
              <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in everything we do.</li>
              <li><strong>Customer Focus:</strong> Our clients are at the heart of our business, and their success is our priority.</li>
              <li><strong>Collaboration:</strong> We value teamwork and believe that the best solutions come from working together.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h3>
          <p className="text-gray-600">
            Founded in 2020, Techy Software started with a small team of passionate developers who shared a common vision: to 
            revolutionize the way businesses interact with technology. Over the years, we have grown into a full-fledged software 
            company, delivering top-notch products to clients worldwide. Our journey has been one of constant learning, growth, and 
            adaptation to the ever-changing landscape of technology.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600">
            Choosing Techy Software means partnering with a team that is dedicated to your success. Our expertise, commitment to quality, 
            and customer-centric approach make us the ideal choice for businesses looking to leverage technology for growth and efficiency. 
            We don't just build software; we build lasting relationships with our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
