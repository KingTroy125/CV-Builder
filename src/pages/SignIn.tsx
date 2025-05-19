
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock authentication - in a real app, you would connect to a backend
    if (email && password) {
      toast({
        title: "Sign in successful",
        description: "Welcome back to CV Builder!",
      });
      navigate("/build");
    } else {
      toast({
        title: "Sign in failed",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
    }
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
          <h1 className="text-2xl font-medium mb-6 text-center">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-sm text-[#0071E3] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="w-full bg-[#0071E3] hover:bg-[#0077ED]">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a 
                href="#" 
                className="text-[#0071E3] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
              >
                Sign up
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

export default SignIn;
