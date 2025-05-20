import { ResumeData } from "@/types/resume";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import SidebarTemplate from "./templates/SidebarTemplate";
import { Button } from "./ui/button";
import { File } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import html2pdf from 'html2pdf.js';

interface ResumePreviewProps {
  data: ResumeData;
  templateName: string;
  accentColor: string;
}

const ResumePreview = ({ data, templateName, accentColor }: ResumePreviewProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const renderTemplate = () => {
    switch (templateName) {
      case "professional":
        return <ProfessionalTemplate data={data} accentColor={accentColor} />;
      case "creative":
        return <CreativeTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "sidebar":
        return <SidebarTemplate data={data} accentColor={accentColor} />;
      default:
        return <ProfessionalTemplate data={data} accentColor={accentColor} />;
    }
  };

  const handleExportPDF = async () => {
    if (!resumeRef.current) return;

    // Show loading toast
    toast({
      title: "Preparing PDF",
      description: "Please wait while we generate your resume...",
    });

    try {
      const element = resumeRef.current;
      const opt = {
        margin: [10, 10],
        filename: `${data.personal.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait'
        }
      };

      // Generate PDF
      await html2pdf().set(opt).from(element).save();

      // Show success toast
      toast({
        title: "PDF Generated Successfully",
        description: "Your resume has been downloaded",
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Error Generating PDF",
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="resume-preview-container">
      <Card className="p-6 bg-white/50 backdrop-blur-sm animate-fade-in">
        <div className="flex justify-end items-center mb-4">
          <Button 
            onClick={handleExportPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-blue-200/50"
            style={{ backgroundColor: accentColor }}
          >
            <File className="h-4 w-4 mr-2" />
            Export as PDF
          </Button>
        </div>
        <CardContent className="p-0">
          <div 
            ref={resumeRef}
            className="resume-preview bg-white rounded-lg shadow-apple border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-apple-hover transform scale-[0.98] hover:scale-[0.99]"
            style={{ 
              boxShadow: "0 0 20px rgba(0,0,0,0.05), 0 10px 20px -10px rgba(0,0,0,0.1)",
              transformOrigin: "center top"
            }}
          >
            {renderTemplate()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumePreview;
