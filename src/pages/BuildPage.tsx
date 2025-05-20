import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  Download,
  FileText,
  Layout,
  Plus,
  Settings,
  Share2,
  Sparkles,
  ChevronRight,
  Trash2,
  Image as ImageIcon,
  Menu,
  Eye,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2pdf from "html2pdf.js";

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean and contemporary design",
    preview: "/templates/modern.png",
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    description: "Stand out with style",
    preview: "/templates/creative.png",
  },
  {
    id: "executive",
    name: "Executive Elite",
    description: "Professional and polished",
    preview: "/templates/executive.png",
  },
];

const sections = [
  { id: "template", label: "Template", icon: Layout },
  { id: "content", label: "Content", icon: FileText },
  { id: "customize", label: "Customize", icon: Settings },
  { id: "download", label: "Download", icon: Download },
];

export default function BuildPage() {
  const [activeSection, setActiveSection] = useState("template");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
        filename: 'my_resume.pdf',
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

  const PreviewButton = () => (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-white border-none shadow-lg md:hidden z-50"
      onClick={() => setShowPreview(true)}
    >
      <Eye className="h-6 w-6" />
    </Button>
  );

  const MobilePreview = () => (
    <Sheet open={showPreview} onOpenChange={setShowPreview}>
      <SheetContent side="bottom" className="h-[80vh] p-0 rounded-t-3xl">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-xl font-medium">CV Preview</SheetTitle>
          <SheetDescription>See how your CV looks</SheetDescription>
        </SheetHeader>
        <div className="p-6 pt-2">
          <div 
            ref={resumeRef}
            className="aspect-[1/1.4] rounded-xl border bg-background/50 backdrop-blur-sm shadow-inner p-4 mb-6"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-sm"></div>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={handleExportPDF}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Download className="w-4 h-4 mr-2" />
              Export as PDF
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 md:top-6 md:inset-x-4 h-16 bg-background/80 backdrop-blur-lg border-b md:border dark:border-slate-700/70 md:max-w-screen-xl mx-auto md:rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <h1 className="text-xl font-medium">CV Builder</h1>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleExportPDF}
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Download className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Export as PDF</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 md:pt-28 pb-20">
        <div className="container max-w-[1400px] relative px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Steps */}
            <div className="flex justify-start md:justify-center mb-6 md:mb-12 overflow-auto pb-4 md:pb-0 px-2 md:px-0">
              <div className="flex items-center gap-2 md:gap-4 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = section.id === activeSection;
                  return (
                    <div key={section.id} className="flex items-center">
                      <motion.button
                        whileHover={{ y: -2 }}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                          isActive
                            ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg"
                            : "hover:bg-primary/10 text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium text-sm md:text-base">{section.label}</span>
                      </motion.button>
                      {index < sections.length - 1 && (
                        <ChevronRight className="w-4 h-4 mx-1 md:mx-2 text-muted-foreground shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Left Sidebar */}
              <div className="col-span-12 md:col-span-3 space-y-4 md:space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
                    <CardHeader className="p-4 md:p-6">
                      <CardTitle className="text-gradient">
                        Choose Template
                      </CardTitle>
                      <CardDescription>
                        Select a design that matches your style
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                        {templates.map((template) => (
                          <motion.div
                            key={template.id}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedTemplate(template.id)}
                            className={`relative rounded-xl border-2 cursor-pointer overflow-hidden group ${
                              selectedTemplate === template.id
                                ? "border-primary shadow-lg ring-2 ring-primary/20"
                                : "border-transparent hover:border-primary/50"
                            }`}
                          >
                            <div className="aspect-[3/4] rounded-lg overflow-hidden">
                              <img
                                src={template.preview}
                                alt={template.name}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://placehold.co/300x400/e2e8f0/64748b?text=${template.name}`;
                                }}
                              />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
                              <h3 className="font-medium text-white text-sm md:text-base">
                                {template.name}
                              </h3>
                              <p className="text-xs md:text-sm text-white/80">
                                {template.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-gradient">AI Assistant</CardTitle>
                      <CardDescription>
                        Get help with your CV content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                        >
                          <Sparkles className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                          Improve Writing
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                        >
                          <Layout className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                          Optimize Layout
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                        >
                          <FileText className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                          ATS Check
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Main Editor */}
              <div className="col-span-12 md:col-span-6 space-y-4 md:space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
                    <CardHeader className="flex flex-row items-start md:items-center justify-between p-4 md:p-6">
                      <div>
                        <CardTitle className="text-gradient">
                          Personal Details
                        </CardTitle>
                        <CardDescription>
                          Add your basic information
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20 mt-1 md:mt-0">
                        Required
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors group">
                            <ImageIcon className="w-8 h-8 text-primary/40 group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Profile Photo</h4>
                            <p className="text-sm text-muted-foreground">
                              Add a professional photo (optional)
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              className="bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              className="bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          <Input
                            id="title"
                            placeholder="Senior Software Engineer"
                            className="bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              className="bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="summary">Professional Summary</Label>
                          <Textarea
                            id="summary"
                            placeholder="Write a compelling summary of your professional background..."
                            className="min-h-[120px] bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all border-primary/20 resize-none"
                          />
                          <div className="flex justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                            >
                              <Sparkles className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                              AI Suggestions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
                    <CardHeader className="p-4 md:p-6">
                      <CardTitle className="text-gradient">Experience</CardTitle>
                      <CardDescription>
                        Add your work history and achievements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <Button
                        className="w-full bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                        variant="outline"
                      >
                        <Plus className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                        Add Experience
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Sidebar - Preview (Desktop Only) */}
              <div className="hidden md:block md:col-span-3 space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border shadow-lg sticky top-28">
                    <CardHeader>
                      <CardTitle className="text-gradient">Preview</CardTitle>
                      <CardDescription>
                        See how your CV looks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-[1/1.4] rounded-xl border bg-background/50 backdrop-blur-sm shadow-inner p-4 mb-6">
                        <div className="w-full h-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 transition-colors group"
                        >
                          <Share2 className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Preview Button & Sheet */}
      <PreviewButton />
      <MobilePreview />
    </div>
  );
} 