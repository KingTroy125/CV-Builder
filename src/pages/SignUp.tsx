import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !password) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Terms not accepted",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    
    // This is a mock registration - in a real app, you would connect to a backend
    toast({
      title: "Account created!",
      description: "Welcome to CV Builder. You can now create your resume.",
    });
    navigate("/build");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-lg border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-28 min-h-screen">
        <div className="container relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg border p-8">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-center">
                  Create an Account
                </h1>
                <p className="text-muted-foreground text-center mb-8">
                  Join thousands of professionals building their dream careers
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50 backdrop-blur-sm"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Must be at least 8 characters long and include a number and a special character.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Checkbox 
                      id="terms" 
                      checked={acceptTerms}
                      onCheckedChange={() => setAcceptTerms(!acceptTerms)}
                    />
                    <Label 
                      htmlFor="terms" 
                      className="text-sm font-normal leading-relaxed"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:text-primary/80 underline-offset-4 hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-primary hover:text-primary/80 underline-offset-4 hover:underline">Privacy Policy</a>.
                    </Label>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      Create Account
                    </Button>
                  </motion.div>
                </form>
                
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary/80 underline-offset-4 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/signin");
                      }}
                    >
                      Sign in
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
