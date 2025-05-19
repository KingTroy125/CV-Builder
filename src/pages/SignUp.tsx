
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="text-[#1D1D1F]"
              onClick={() => navigate("/")}
            >
              CV Builder
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h1 className="text-2xl font-medium mb-6 text-center">Create an Account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long and include a number and a special character.
              </p>
            </div>
            
            <div className="flex items-start space-x-2 mt-4">
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
                <a href="#" className="text-[#0071E3] hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-[#0071E3] hover:underline">Privacy Policy</a>.
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#0071E3] hover:bg-[#0077ED]"
            >
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a 
                href="#" 
                className="text-[#0071E3] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signin");
                }}
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} CV Builder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
