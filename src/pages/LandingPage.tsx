
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const features = [
    {
      title: "Create in Minutes",
      description: "Build a professional resume in just a few minutes with our intuitive editor",
      icon: "/icons/clock.svg"
    },
    {
      title: "Professional Templates",
      description: "Choose from a variety of ATS-friendly templates designed by experts",
      icon: "/icons/template.svg"
    },
    {
      title: "Expert-Approved Content",
      description: "Use our AI-powered suggestions to improve your resume content",
      icon: "/icons/check.svg"
    }
  ];
  
  const templates = [
    {
      name: "Professional",
      description: "Clean and structured format for corporate environments",
      image: "/templates/professional.png"
    },
    {
      name: "Creative",
      description: "Modern design for creative industries",
      image: "/templates/creative.png"
    },
    {
      name: "Minimal",
      description: "Simple and elegant design for a polished look",
      image: "/templates/minimal.png"
    },
    {
      name: "Modern",
      description: "Contemporary style with unique layout elements",
      image: "/templates/modern.png"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      content: "The CV Builder helped me create a resume that got me interviews at top tech companies. The design really made my application stand out.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      content: "I love how easy it was to build a professional resume. The real-time preview feature was particularly helpful to see exactly how my resume would look.",
      rating: 5
    },
    {
      name: "Emma Taylor",
      title: "UX Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      content: "As a designer, I appreciate good UI. This CV builder has the cleanest interface I've used, and the templates are genuinely beautiful and professional.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I download my resume?",
      answer: "After creating your resume, click on the 'Download' button in the editor. You can choose to download as PDF, DOCX, or send directly to your email."
    },
    {
      question: "Can I create multiple resumes?",
      answer: "Yes! With an account, you can create and save multiple resumes for different job applications."
    },
    {
      question: "Is my information secure?",
      answer: "Absolutely. We use industry-standard encryption to protect your data. We never share your information with third parties."
    },
    {
      question: "Do I need technical skills to use this builder?",
      answer: "Not at all. Our builder is designed to be easy to use for everyone, regardless of technical background."
    },
    {
      question: "Can I customize the templates?",
      answer: "Yes, all templates are fully customizable. You can change colors, fonts, section layouts and more to match your personal style."
    }
  ];

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-apple-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-[#0071E3]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6H4V18H20V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1 className="text-xl font-medium">CV Builder</h1>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-[#0071E3] transition-colors">Features</a>
                <a href="#templates" className="text-gray-600 hover:text-[#0071E3] transition-colors">Templates</a>
                <a href="#testimonials" className="text-gray-600 hover:text-[#0071E3] transition-colors">Testimonials</a>
                <a href="#faq" className="text-gray-600 hover:text-[#0071E3] transition-colors">FAQ</a>
              </nav>
              <Button 
                variant="ghost" 
                className="text-[#1D1D1F] font-medium hidden md:flex"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
              <Button 
                className="bg-[#0071E3] hover:bg-[#0077ED] text-white"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f2f5] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
                Create a professional Resume with ease
              </h2>
              <p className="text-xl text-gray-600 text-center md:text-left">
                Build eye-catching resumes in minutes. Choose from professional templates and get hired faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg"
                  className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-8 py-6 rounded-full text-lg"
                  onClick={() => navigate("/build")}
                >
                  Build My Resume <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 rounded-full text-lg border-gray-300"
                  onClick={() => {
                    const section = document.getElementById('templates');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Templates
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute top-[-10%] right-[-5%] w-40 h-40 bg-[#E1F5FE] rounded-full opacity-60 filter blur-2xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-40 h-40 bg-[#E8F5E9] rounded-full opacity-60 filter blur-xl"></div>
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="/resume-preview.png" 
                    alt="Resume preview" 
                    className="w-full filter drop-shadow-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x800/e2e8f0/64748b?text=Resume+Preview";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Does It Work?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CV Builder combines beautiful design with powerful features to help you build a professional resume in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 text-[#0071E3]">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%230071E3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M12 6v6l4 2'%3E%3C/path%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Users Love Us, A Lot.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it — hear from people who've landed jobs using our resume builder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Craft a Polished Resume that <span className="text-[#0071E3]">Stands Out</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professionally designed templates to make your resume shine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[3/4] bg-white">
                  <img 
                    src={template.image} 
                    alt={`${template.name} template`} 
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/300x400/e2e8f0/64748b?text=${template.name}+Template`;
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{template.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{template.description}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 w-full"
                    onClick={() => navigate("/build")}
                  >
                    Use this template
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-8 py-6 rounded-full text-lg"
              onClick={() => navigate("/build")}
            >
              Build My Resume <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers to everything you need to know.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? 'max-h-96 p-4 pt-0' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0071E3] to-[#42a5f5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Succeed In Your Job Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Craft Your Professional Resume with Ease</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Choose from professional, ATS-friendly templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customize fonts, colors, and layouts to match your style</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Save multiple versions for different job applications</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Get Your Resume Noticed & Approved</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All templates are optimized for applicant tracking systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professional designs that highlight your strengths</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Export to PDF, Word, or share directly with employers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="mt-10 bg-white text-[#0071E3] hover:bg-gray-100 px-8 py-6 rounded-full text-lg"
            onClick={() => navigate("/build")}
          >
            Build My Resume Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f0f2f5] border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Stand Out With Your Resume</h2>
            <p className="text-gray-600">Start building your professional resume today.</p>
          </div>
          <Button 
            className="bg-[#0071E3] hover:bg-[#0077ED] text-white px-6 py-2 text-lg"
            onClick={() => navigate("/build")}
          >
            Get Started For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1F] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#templates" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Help</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} CV Builder. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
