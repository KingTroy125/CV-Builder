
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

interface ResumePreviewProps {
  data: ResumeData;
  templateName: string;
  accentColor: string;
}

const ResumePreview = ({ data, templateName, accentColor }: ResumePreviewProps) => {
  const { toast } = useToast();
  const resumeRef = useRef<HTMLDivElement>(null);

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

  const handleExportPDF = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    if (printWindow && resumeRef.current) {
      // Set up the print window with necessary styles for better PDF output
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${data.personal.fullName} - Resume</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body { 
              font-family: 'Inter', system-ui, sans-serif;
              background: white;
              margin: 0;
              padding: 0;
            }
            .print-container {
              width: 100%;
              max-width: 8.5in;
              margin: 0 auto;
              padding: 0;
              background: white;
              box-shadow: none;
            }
            @media print {
              body { 
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .print-container {
                width: 100%;
                max-width: none;
                box-shadow: none;
              }
            }
            ${document.head.querySelector('style')?.innerHTML || ''}
          </style>
        </head>
        <body>
          <div class="print-container">
            ${resumeRef.current.innerHTML}
          </div>
          <script>
            // Automatically open print dialog
            window.onload = function() {
              window.print();
              // Keep the window open so users can save as PDF
            };
          </script>
        </body>
        </html>
      `);

      toast({
        title: "PDF Export Ready",
        description: "Save as PDF in the print dialog to download your resume",
      });
    }
  };

  return (
    <div className="resume-preview-container">
      <Card className="p-6 bg-white/50 backdrop-blur-sm animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-apple-dark">Preview</h2>
          <Button 
            onClick={handleExportPDF}
            className="bg-apple-blue hover:bg-apple-blue-hover text-white transition-all duration-300"
            style={{ backgroundColor: accentColor }}
          >
            <File className="h-4 w-4 mr-2" />
            Download PDF
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
