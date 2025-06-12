import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-fuchsia-100 via-cyan-100 to-blue-200 text-black">
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-fuchsia-700 tracking-tight">
            Welcome to the Errteknalozy Dashboard
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            At <span className="font-semibold text-blue-600">Errteknalozy</span>, we innovate at the intersection of technology and excellence.
            Discover insights, manage your workflow, and stay ahead — all in one place.
          </p>
        </header>

        {/* Company Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">About Errteknalozy</h2>
          <p className="text-base text-gray-800 max-w-3xl mb-4">
            Errteknalozy is a pioneering technology solutions provider dedicated to delivering top-notch, innovative products and services to businesses and individuals worldwide.
            Established with the mission to empower organizations through technology, we seamlessly blend creativity, technical expertise, and strategic thinking to solve modern challenges.
          </p>
          <ul className="list-disc ml-6 mb-4 text-base text-gray-700 space-y-1">
            <li>
              <span className="font-semibold text-blue-700">Custom Application Development:</span> We specialize in building scalable, robust, and user-centric mobile and web applications tailored to your business goals.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Website Design & Development:</span> From intuitive landing pages to complex e-commerce solutions, our design and development teams craft beautiful, high-performance websites.
            </li>
            <li>
              <span className="font-semibold text-blue-700">UI/UX Consulting:</span> We believe exceptional user experiences drive business success. Our UI/UX experts turn ideas into elegant, engaging, and accessible designs.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Cloud Solutions:</span> Errteknalozy supports your digital transformation journey with secure, scalable cloud integrations and migration services.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Automation & AI:</span> We harness the power of automation and artificial intelligence to streamline operations and unlock new opportunities.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Maintenance & Support:</span> Our commitment to your success extends beyond launch, offering ongoing support, monitoring, and updates.
            </li>
          </ul>
          <p className="text-base text-gray-800 max-w-3xl mb-4">
            Whether you're a startup aiming for rapid growth or an enterprise seeking digital transformation, Errteknalozy is your trusted partner in the technology landscape.
          </p>
        </section>

        {/* Our Qualities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Our Qualities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Innovation & Creativity</h4>
              <p className="text-gray-700">
                Our team thrives on brainstorming fresh solutions and leveraging emerging technologies. We foster a culture of continuous learning and innovation, ensuring every project we undertake stands out in originality and impact.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Client-Centric Approach</h4>
              <p className="text-gray-700">
                We put our clients at the heart of everything we do, listening carefully to their needs and collaborating closely to ensure every solution aligns perfectly with their vision and objectives.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Quality & Reliability</h4>
              <p className="text-gray-700">
                Quality is our hallmark. We adhere to best practices, rigorous testing, and thorough documentation to deliver solutions that are robust, secure, and reliable.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Agile Methodology</h4>
              <p className="text-gray-700">
                We embrace agile principles, enabling us to adapt quickly to changing requirements, deliver incremental value, and foster transparency throughout the project lifecycle.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Security & Compliance</h4>
              <p className="text-gray-700">
                Data security and regulatory compliance are built into every solution, giving you peace of mind in today’s dynamic digital environment.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-fuchsia-700">Transparent Communication</h4>
              <p className="text-gray-700">
                We maintain open lines of communication, providing you with regular updates and clear documentation at every stage of your project.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Our Services</h2>
          <div className="space-y-6">
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Mobile Application Development</h4>
              <p className="text-gray-800">
                We design and develop custom mobile applications for Android and iOS that are user-friendly, secure, and scalable. From concept to deployment, our process ensures your app meets industry standards and customer expectations.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>Native and cross-platform development</li>
                <li>Performance optimization</li>
                <li>App Store deployment and maintenance</li>
                <li>UI/UX focused design</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Website Design & Development</h4>
              <p className="text-gray-800">
                Our web development team builds modern, responsive, and SEO-optimized websites that help grow your online presence. We utilize the latest frameworks and technologies to ensure speed, security, and scalability.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>Custom website design</li>
                <li>E-commerce platforms</li>
                <li>Content Management Systems (CMS)</li>
                <li>Progressive Web Apps (PWAs)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Enterprise Software Solutions</h4>
              <p className="text-gray-800">
                We streamline business processes with custom enterprise software, tailored to integrate with your existing systems and workflows. Our solutions improve productivity, reduce costs, and drive business growth.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>ERP & CRM systems</li>
                <li>Business intelligence dashboards</li>
                <li>Automated workflow solutions</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Cloud Services</h4>
              <p className="text-gray-800">
                Accelerate your journey to the cloud with Errteknalozy. We offer cloud migration, deployment, and management services, leveraging platforms like AWS, Azure, and Google Cloud.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>Cloud infrastructure setup</li>
                <li>Data migration & backup</li>
                <li>DevOps & CI/CD pipelines</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Digital Marketing & SEO</h4>
              <p className="text-gray-800">
                Our digital marketing team helps you reach and engage your target audience through SEO, SEM, content marketing, and social media campaigns.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>Search engine optimization</li>
                <li>Pay-per-click advertising</li>
                <li>Social media management</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Technical Support & Maintenance</h4>
              <p className="text-gray-800">
                Our commitment to your success continues after launch. We provide proactive monitoring, updates, and support to keep your systems running smoothly.
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm mt-2">
                <li>24/7 technical support</li>
                <li>Regular updates & upgrades</li>
                <li>Bug fixes & troubleshooting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard Widgets */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Your Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Widget */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">📊</span>
              <h3 className="font-semibold text-lg mb-1">Key Metrics</h3>
              <p className="text-gray-600 text-sm">
                View real-time analytics and performance stats to keep track of your growth and progress. Understand your usage patterns and make informed decisions with our intuitive metrics dashboard.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Customizable analytics</li>
                <li>Visual reports</li>
                <li>Export options</li>
              </ul>
            </div>
            {/* Calendar Widget */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">📅</span>
              <h3 className="font-semibold text-lg mb-1">Integrated Calendar</h3>
              <p className="text-gray-600 text-sm">
                Manage your schedule, set reminders, and never miss an important event or deadline. Sync with your favorite calendar apps for seamless integration.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Event scheduling and reminders</li>
                <li>Daily, weekly, monthly views</li>
                <li>Team event sharing</li>
              </ul>
            </div>
            {/* Tasks Widget */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">📋</span>
              <h3 className="font-semibold text-lg mb-1">Task Management</h3>
              <p className="text-gray-600 text-sm">
                Organize your tasks, set priorities, and collaborate with your team for seamless project execution. Stay productive and keep your projects on track.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Team task assignments</li>
                <li>Priority tags & deadlines</li>
                <li>Progress tracking</li>
              </ul>
            </div>
            {/* Additional Widgets */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🛠️</span>
              <h3 className="font-semibold text-lg mb-1">Project Tools</h3>
              <p className="text-gray-600 text-sm">
                Access a suite of integrated tools to facilitate development, testing, and deployment of your projects.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Code repositories</li>
                <li>Continuous integration</li>
                <li>Deployment pipelines</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🤝</span>
              <h3 className="font-semibold text-lg mb-1">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Work together seamlessly with real-time messaging, file sharing, and collaborative editing capabilities.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Team chat & notifications</li>
                <li>Document collaboration</li>
                <li>Access controls</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <span className="text-3xl mb-2">🔒</span>
              <h3 className="font-semibold text-lg mb-1">Security Center</h3>
              <p className="text-gray-600 text-sm">
                Monitor the security and compliance status of your applications with our advanced security dashboard.
              </p>
              <ul className="list-disc ml-4 mt-2 text-gray-700 text-xs">
                <li>Vulnerability alerts</li>
                <li>Compliance checks</li>
                <li>Audit logs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Errteknalozy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Why Choose Errteknalozy?</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-800">
            <li>
              <span className="font-semibold text-blue-700">Proven Track Record:</span> Trusted by businesses worldwide, Errteknalozy has successfully delivered hundreds of projects across industries including healthcare, finance, retail, and education.
            </li>
            <li>
              <span className="font-semibold text-blue-700">End-to-End Solutions:</span> From ideation to maintenance, we handle every aspect of your digital journey.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Expert Team:</span> Our team comprises experienced developers, designers, strategists, and support professionals who are passionate about delivering excellence.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Cutting-Edge Technology:</span> We stay ahead of the curve by constantly exploring and adopting the latest technologies and frameworks.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Client Satisfaction:</span> Our high client retention rate speaks volumes about our dedication to quality and customer service.
            </li>
          </ul>
        </section>

        {/* Our Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Our Process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-800">
            <li>
              <span className="font-semibold text-blue-700">Discovery & Consultation:</span> We begin by understanding your requirements, goals, and challenges.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Planning & Strategy:</span> Our team crafts a clear roadmap, outlining project milestones and deliverables.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Design & Prototyping:</span> We bring ideas to life with wireframes, mockups, and interactive prototypes for your feedback.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Development:</span> Using agile methodologies, we develop and test your solution iteratively to ensure quality at every stage.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Deployment & Launch:</span> Our team manages the deployment process, ensuring a smooth transition from development to production.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Support & Growth:</span> We provide ongoing support, monitoring, and optimization to help you scale and succeed.
            </li>
          </ol>
        </section>

        {/* Testimonials */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">
                “Errteknalozy transformed our digital strategy. Their team delivered our app on time, and the results have exceeded our expectations.”
              </p>
              <span className="block text-right mt-4 text-blue-800 font-semibold">
                — CEO, FinTech Solutions Ltd.
              </span>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">
                “From website development to ongoing support, Errteknalozy has been a reliable partner. Their expertise is unmatched.”
              </p>
              <span className="block text-right mt-4 text-blue-800 font-semibold">
                — Marketing Director, HealthCare Innovations
              </span>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">
                “Their attention to detail and proactive communication made our project a breeze. Highly recommend!”
              </p>
              <span className="block text-right mt-4 text-blue-800 font-semibold">
                — Founder, EduStart
              </span>
            </div>
            <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow">
              <p className="italic text-gray-800">
                “Errteknalozy’s automation solutions have saved us countless hours and improved our bottom line.”
              </p>
              <span className="block text-right mt-4 text-blue-800 font-semibold">
                — Operations Manager, RetailPro
              </span>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-cyan-800">Join the Errteknalozy Family</h2>
          <p className="text-base text-gray-800 mb-2">
            Are you ready to transform your business with technology? Errteknalozy welcomes new clients, partners, and talented professionals. Let’s create the future together!
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Contact us for a free consultation</li>
            <li>Explore partnership opportunities</li>
            <li>View our open positions and join our team</li>
          </ul>
        </section>
        {/* End of Main Content */}
      </main>
    </div>
  );
};

export default page;