import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, ExternalLink, Code2, Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xovenwkk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setFormStatus('error');
        setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };
  const projects = [
    {
      title: "E-commerce Website",
      description: "An E-commerce platform built with Go using the Gin framework and MVC architecture. Features include RESTful APIs, PostgreSQL integration, and Razorpay-based payment processing.",
      image: "https://qodemaker.com/wp-content/webp-express/webp-images/uploads/2022/10/eCommerce-Website-Components-photo.jpg.webp",
      demo: "https://demo.example.com/microservice",
      github: "https://github.com/Sherinas/MOUNT-GEAR",
      tech: ["Go", "GIN", "PostgreSQL", "Razorpay", "REST API"]
    },
    {
      title: "Enterprise Real-time Chat System",
      description: "A scalable enterprise-grade real-time chat application built with Go, tailored for internal company communication. Features include one-to-one and group chats, real-time notifications, admin-controlled user and permission management, and support for text, image, document, and voice messaging. The system uses Gin for routing, PostgreSQL for data storage, Redis Pub/Sub for message broadcasting, and AWS S3 for media storage.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      demo: "https://youtu.be/OZsarwb2uoo",
      github: "https://github.com/Sherinas/Chat-App",
      tech: ["Go", "GIN", "PostgreSQL", "Redis", "WebSocket", "AWS S3", "REST API"]
    },
    {
      title: "Data Pipeline",
      description: "ETL pipeline processing system built with Go and Apache Kafka.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      demo: "https://pipeline.example.com",
      github: "https://github.com/Sherinas/fastlogi",
      tech: ["Go", "Kafka", "PostgreSQL", "Docker"]
    }
  ];

  const skills = {
    languages: ["Go","C", "SQL"],
    frameworks: ["Gin", "Echo", "Fiber", "gRPC", "React"],
    databases: ["PostgreSQL", "MongoDB", "Redis",],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "Linux"],
    practices: ["Microservices", "CI/CD",  "Agile"]
  };

  const education = [
    {
      degree: "B.A. History",
      institution: "Madurai Kamaraj University, India",
      year: "2011-2014",
      
    },
    {
      degree: "Diploma in Computer Hardware & Networking",
      institution: "TCL-IT Govt.of India Enterprise under the Ministry of Communication and IT",
      year: "2007-2008",
     
    }
  ];

  const certifications = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      //year: "2023"
    },
    {
      name: "Microsoft Certified Technology Specialist (MCTS)",
      issuer: "Microsoft",
      //year: "2022"
    },
    {
      name: "Microsoft Certified Solutions Associate (MCSA)",
      issuer: "Microsoft",
     // year: "2021"
    },
    {
      name: "AWS Certified Developer - Associate (In Progress)",
      issuer: "Amazone",
     // year: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text animate-pulse">
              Sherinas M
            </span>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:rotate-90"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm Sherinas M
              <span className="block text-blue-500 animate-bounce">Golang Developer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Specialized in building high-performance microservices, distributed systems, and cloud-native applications using Go.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://turquoise-maryrose-38.tiiny.site"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                download
              >
                <Download className="w-5 h-5 animate-bounce" />
                Download Resume
              </a>
              <a 
                href="https://github.com/Sherinas"
                className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
          <div className="flex-1 relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.postimg.cc/XJxDDpzr/IMG-20241105-085644-894.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 animate-gradient"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            With over 7 years in the IT industry, I've journeyed through various roles—from computer hardware technician to system administrator—gaining hands-on experience in Linux environments and server support. These roles ignited my curiosity and laid the foundation for my transition into software development.​
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Initially, I viewed programming as an insurmountable challenge. However, my eagerness to learn propelled me to delve into coding, and I discovered a genuine passion for backend development. Over the past year, I've been learning and working with Golang, and it has resonated with me due to its efficiency and simplicity. I've since developed several applications using Go, continually honing my skills and embracing new technologies.​
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I'm deeply interested in cloud-native development, DevOps practices, and system design. My daily routine involves exploring these areas, experimenting with new tools, and building projects that enhance my understanding. I believe in the power of continuous learning and strive to stay updated with the latest advancements in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm hover:scale-110 transition-transform duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-cyan-500/5 animate-gradient"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 hover:border-blue-600 transition-colors duration-300">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-blue-500">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Certifications</h3>
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 hover:border-green-600 transition-colors duration-300">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <p className="text-green-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm hover:scale-110 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 animate-gradient"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-500 animate-bounce" />
                  <a href="mailto:sherinascdlm.com">sherinascdlm@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-blue-500 animate-bounce" />
                  <a href="tel:91 9747676776"> 91 9747676776</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-500 animate-bounce" />
                  <span>Trivandrum ,Kerala ,India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-blue-500 animate-bounce" />
                  <a href="https://www.linkedin.com/in/sherinas-muhammad-hussain-ba884a85" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/Sherinas-muhammad-hussain
                  </a>
                </div>
              </div>
            </div>

{/* Contact Form */}
<form
              onSubmit={handleSubmit}
              className="space-y-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 focus:outline-none dark:text-white transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 focus:outline-none dark:text-white transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 focus:outline-none dark:text-white transition-all duration-300"
                ></textarea>
              </div>
              {formStatus === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center ${
                  formStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Sherinas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;