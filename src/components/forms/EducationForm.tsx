
import { useState } from "react";
import { Education } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Trash2 } from "lucide-react";

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

const EducationForm = ({ education, onChange }: EducationFormProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    education.length > 0 ? [education[0].id] : []
  );
  
  const handleAddEducation = () => {
    const newId = `edu${Date.now()}`;
    const newEducation: Education = {
      id: newId,
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    
    const updatedEducation = [...education, newEducation];
    onChange(updatedEducation);
    setExpandedItems([...expandedItems, newId]);
  };
  
  const handleRemoveEducation = (id: string) => {
    const updatedEducation = education.filter(item => item.id !== id);
    onChange(updatedEducation);
    setExpandedItems(expandedItems.filter(item => item !== id));
  };
  
  const handleEducationChange = (id: string, field: keyof Education, value: string) => {
    const updatedEducation = education.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onChange(updatedEducation);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Education</h2>
        <Button onClick={handleAddEducation} size="sm">
          Add Education
        </Button>
      </div>
      
      {education.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No education added yet.</p>
          <p className="text-sm mt-1">Click 'Add Education' to get started.</p>
        </div>
      ) : (
        <Accordion 
          type="multiple" 
          value={expandedItems} 
          onValueChange={setExpandedItems}
          className="space-y-2"
        >
          {education.map((edu) => (
            <AccordionItem 
              key={edu.id} 
              value={edu.id}
              className="border rounded-md px-3"
            >
              <div className="flex items-center">
                <AccordionTrigger className="flex-1 hover:no-underline">
                  <div className="text-left">
                    <p className="font-medium">
                      {edu.institution || "New Education"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree ? `${edu.degree} in ${edu.field}` : "Degree"}
                    </p>
                  </div>
                </AccordionTrigger>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveEducation(edu.id);
                  }}
                  className="mr-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <AccordionContent className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                    <Input
                      id={`institution-${edu.id}`}
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                      placeholder="School or university name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`location-${edu.id}`}>Location</Label>
                    <Input
                      id={`location-${edu.id}`}
                      value={edu.location}
                      onChange={(e) => handleEducationChange(edu.id, "location", e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                      placeholder="Bachelor's, Master's, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                    <Input
                      id={`field-${edu.id}`}
                      value={edu.field}
                      onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                      placeholder="Computer Science, Design, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${edu.id}`}>Start Date</Label>
                    <Input
                      id={`startDate-${edu.id}`}
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${edu.id}`}>End Date</Label>
                    <Input
                      id={`endDate-${edu.id}`}
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mt-4">
                  <Label htmlFor={`description-${edu.id}`}>Description (Optional)</Label>
                  <Textarea
                    id={`description-${edu.id}`}
                    value={edu.description}
                    onChange={(e) => handleEducationChange(edu.id, "description", e.target.value)}
                    placeholder="Additional details about your education"
                    className="h-24 resize-none"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default EducationForm;
