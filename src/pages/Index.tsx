import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";
import ColorSelector from "@/components/ColorSelector";
import { ResumeData, defaultResumeData } from "@/types/resume";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Save, Trash2 } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [activeTemplate, setActiveTemplate] = useState<string>("professional");
  const [activeSection, setActiveSection] = useState<string>("personal");
  const [accentColor, setAccentColor] = useState<string>("blue");
  const isMobile = useIsMobile();

  // Color mapping
  const colorMap: Record<string, string> = {
    blue: "#0071E3",
    teal: "#14B8A6",
    orange: "#F97316",
    purple: "#8B5CF6",
    red: "#EF4444",
    green: "#22C55E"
  };

  // Load data from localStorage on first render
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    const savedTemplate = localStorage.getItem("activeTemplate");
    const savedColor = localStorage.getItem("accentColor");
    
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
    
    if (savedTemplate) {
      setActiveTemplate(savedTemplate);
    }
    
    if (savedColor) {
      setAccentColor(savedColor);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  // Save active template to localStorage
  useEffect(() => {
    localStorage.setItem("activeTemplate", activeTemplate);
  }, [activeTemplate]);
  
  // Save accent color to localStorage
  useEffect(() => {
    localStorage.setItem("accentColor", accentColor);
  }, [accentColor]);

  const handleDataChange = (newData: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      setResumeData(defaultResumeData);
      toast({
        title: "Data cleared",
        description: "All resume data has been reset",
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    toast({
      title: "Resume saved",
      description: "Your resume data has been saved to your browser",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F7] to-[#E8E8EB] text-[#1D1D1F]">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-medium bg-gradient-to-r from-apple-blue to-blue-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">CV Builder</h1>
          </Link>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-[#1D1D1F] hover:bg-apple-blue hover:text-white transition-all" 
              onClick={handleSave}
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-destructive hover:bg-destructive hover:text-white transition-all" 
              onClick={handleReset}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </header>

      {/* Template and Color Selector */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 md:px-8">
          <TemplateSelector 
            activeTemplate={activeTemplate} 
            setActiveTemplate={setActiveTemplate} 
          />
          
          {/* Show color selector for all templates */}
          <ColorSelector 
            activeColor={accentColor} 
            setActiveColor={setAccentColor} 
          />
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 pb-16">
        {/* Form Panel */}
        <div className="w-full lg:w-5/12 order-2 lg:order-1">
          <ResumeForm 
            resumeData={resumeData} 
            onChange={handleDataChange} 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        
        {/* Preview Panel */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2 sticky top-32 self-start">
          <ResumePreview 
            data={resumeData} 
            templateName={activeTemplate}
            accentColor={colorMap[accentColor]}
          />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-[#86868B] border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} CV Builder</p>
      </footer>
    </div>
  );
};

export default Index;
