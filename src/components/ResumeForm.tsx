
import { useState } from "react";
import { ResumeData } from "@/types/resume";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import LanguagesForm from "./forms/LanguagesForm";
import CertificationsForm from "./forms/CertificationsForm";
import { Card, CardContent } from "./ui/card";

interface ResumeFormProps {
  resumeData: ResumeData;
  onChange: (data: Partial<ResumeData>) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ResumeForm = ({ resumeData, onChange, activeSection, setActiveSection }: ResumeFormProps) => {
  const handleSectionChange = (value: string) => {
    setActiveSection(value);
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm shadow-sm animate-fade-in">
      <Tabs defaultValue={activeSection} value={activeSection} onValueChange={handleSectionChange}>
        <TabsList className="w-full justify-start px-1 overflow-x-auto flex-nowrap border-b rounded-none bg-transparent">
          <TabsTrigger value="personal" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Personal</TabsTrigger>
          <TabsTrigger value="experience" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Experience</TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Education</TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Skills</TabsTrigger>
          <TabsTrigger value="languages" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Languages</TabsTrigger>
          <TabsTrigger value="certifications" className="data-[state=active]:bg-apple-blue data-[state=active]:text-white">Certifications</TabsTrigger>
        </TabsList>
        
        <CardContent className="p-4 md:p-6">
          <TabsContent value="personal">
            <PersonalInfoForm 
              data={resumeData.personal} 
              onChange={(personal) => onChange({ personal })} 
            />
          </TabsContent>
          
          <TabsContent value="experience">
            <WorkExperienceForm 
              workExperience={resumeData.workExperience} 
              onChange={(workExperience) => onChange({ workExperience })} 
            />
          </TabsContent>
          
          <TabsContent value="education">
            <EducationForm 
              education={resumeData.education} 
              onChange={(education) => onChange({ education })} 
            />
          </TabsContent>
          
          <TabsContent value="skills">
            <SkillsForm 
              skills={resumeData.skills} 
              onChange={(skills) => onChange({ skills })} 
            />
          </TabsContent>
          
          <TabsContent value="languages">
            <LanguagesForm 
              languages={resumeData.languages} 
              onChange={(languages) => onChange({ languages })} 
            />
          </TabsContent>
          
          <TabsContent value="certifications">
            <CertificationsForm 
              certifications={resumeData.certifications} 
              onChange={(certifications) => onChange({ certifications })} 
            />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default ResumeForm;
