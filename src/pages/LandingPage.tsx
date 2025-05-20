import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  FileText,
  Layout,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";
import { NavigationSheet } from "@/components/NavigationSheet";
import { Footer } from "@/components/Footer";

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-white border border-blue-100 shadow-lg hover:shadow-blue-100/50"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-600/80">{description}</p>
    </motion.div>
  );
}

function PriceCard({
  title,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  badge,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  badge?: string;
  highlighted?: boolean;
}) {
  return (
    <motion.div
      className={`p-8 rounded-xl bg-card border ${
        highlighted ? "border-primary shadow-lg ring-1 ring-primary/20" : ""
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {badge && (
        <Badge className="mb-4 bg-primary/10 text-primary">{badge}</Badge>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={buttonVariant}>
        {buttonText}
      </Button>
    </motion.div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
}) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-card border shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-lg mb-4">{quote}</blockquote>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-muted-foreground">{role}</div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-6 inset-x-4 h-16 bg-white/80 backdrop-blur-lg border border-blue-100 dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button 
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-200/50" 
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-28">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge 
                  variant="secondary" 
                  className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200"
                >
                  ✨ Your Professional Journey Starts Here
                </Badge>
                <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Create Stunning CVs That Land Dream Jobs
                </h1>
                <p className="text-xl text-blue-600/80 mb-8">
                  Build professional CVs in minutes with our AI-powered builder.
                  Stand out from the crowd with beautiful templates and expert-crafted content suggestions.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-200/50" 
                    asChild
                  >
                    <Link to="/signup">Get Started Free</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    View Templates
                  </Button>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <motion.div 
                  className="flex flex-col items-center p-6 rounded-xl bg-white border border-blue-100 shadow-lg hover:shadow-blue-100/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">50K+</h3>
                  <p className="text-blue-600/80">CVs Created</p>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center p-6 rounded-xl bg-white border border-blue-100 shadow-lg hover:shadow-blue-100/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">95%</h3>
                  <p className="text-blue-600/80">Success Rate</p>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center p-6 rounded-xl bg-white border border-blue-100 shadow-lg hover:shadow-blue-100/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">24/7</h3>
                  <p className="text-blue-600/80">Support</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Everything You Need to Create a Winning CV
              </h2>
              <p className="text-xl text-blue-600/80">
                Our platform provides all the tools and features you need to create a professional CV that gets you noticed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Writing"
                description="Get intelligent suggestions for your content and skills"
              />
              <FeatureCard
                icon={<Layout className="w-6 h-6" />}
                title="Beautiful Templates"
                description="Choose from our collection of professionally designed templates"
              />
              <FeatureCard
                icon={<FileText className="w-6 h-6" />}
                title="ATS-Friendly"
                description="Ensure your CV passes Applicant Tracking Systems"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PriceCard
                title="Free"
                price="$0"
                features={[
                  "1 CV Template",
                  "Basic Export Options",
                  "7-Day History",
                  "Email Support"
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PriceCard
                title="Pro"
                price="$12"
                badge="Most Popular"
                features={[
                  "All Free Features",
                  "30+ Premium Templates",
                  "AI Content Suggestions",
                  "Unlimited History",
                  "Priority Support"
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                highlighted
              />
              <PriceCard
                title="Enterprise"
                price="Custom"
                features={[
                  "All Pro Features",
                  "Custom Branding",
                  "Team Management",
                  "API Access",
                  "Dedicated Support"
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of satisfied professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The AI suggestions saved me hours of writing. Got interviews at top tech companies!"
                author="Sarah Chen"
                role="Software Engineer"
                rating={5}
              />
              <TestimonialCard
                quote="Clean, professional templates that helped me stand out. Landed my dream job!"
                author="Michael Rodriguez"
                role="Marketing Manager"
                rating={5}
              />
              <TestimonialCard
                quote="The ATS optimization feature is a game-changer. No more rejected applications!"
                author="Emma Thompson"
                role="Product Manager"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our CV Builder
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the AI content suggestion work?</AccordionTrigger>
                <AccordionContent>
                  Our AI analyzes your experience and job requirements to suggest impactful bullet points,
                  skills, and achievements. It helps you highlight your strengths and use industry-specific
                  keywords that catch recruiters' attention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I export my CV in different formats?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can export your CV in PDF, Word, and plain text formats. All our exports are
                  ATS-friendly and maintain perfect formatting across different devices and platforms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use industry-standard encryption to protect your personal information.
                  Your data is stored securely and never shared with third parties without your explicit consent.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
