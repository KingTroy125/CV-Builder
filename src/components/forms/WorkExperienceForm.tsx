
import { useState } from "react";
import { WorkExperience } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Trash2 } from "lucide-react";

interface WorkExperienceFormProps {
  workExperience: WorkExperience[];
  onChange: (workExperience: WorkExperience[]) => void;
}

const WorkExperienceForm = ({ workExperience, onChange }: WorkExperienceFormProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    workExperience.length > 0 ? [workExperience[0].id] : []
  );
  
  const handleAddExperience = () => {
    const newId = `work${Date.now()}`;
    const newExperience: WorkExperience = {
      id: newId,
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    
    const updatedExperience = [...workExperience, newExperience];
    onChange(updatedExperience);
    setExpandedItems([...expandedItems, newId]);
  };
  
  const handleRemoveExperience = (id: string) => {
    const updatedExperience = workExperience.filter(item => item.id !== id);
    onChange(updatedExperience);
    setExpandedItems(expandedItems.filter(item => item !== id));
  };
  
  const handleExperienceChange = (id: string, field: keyof WorkExperience, value: string | boolean) => {
    const updatedExperience = workExperience.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onChange(updatedExperience);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Work Experience</h2>
        <Button onClick={handleAddExperience} size="sm">
          Add Experience
        </Button>
      </div>
      
      {workExperience.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No work experience added yet.</p>
          <p className="text-sm mt-1">Click 'Add Experience' to get started.</p>
        </div>
      ) : (
        <Accordion 
          type="multiple" 
          value={expandedItems} 
          onValueChange={setExpandedItems}
          className="space-y-2"
        >
          {workExperience.map((experience) => (
            <AccordionItem 
              key={experience.id} 
              value={experience.id}
              className="border rounded-md px-3"
            >
              <div className="flex items-center">
                <AccordionTrigger className="flex-1 hover:no-underline">
                  <div className="text-left">
                    <p className="font-medium">
                      {experience.company || "New Experience"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.position || "Position"}
                    </p>
                  </div>
                </AccordionTrigger>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveExperience(experience.id);
                  }}
                  className="mr-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <AccordionContent className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${experience.id}`}>Company</Label>
                    <Input
                      id={`company-${experience.id}`}
                      value={experience.company}
                      onChange={(e) => handleExperienceChange(experience.id, "company", e.target.value)}
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`position-${experience.id}`}>Position</Label>
                    <Input
                      id={`position-${experience.id}`}
                      value={experience.position}
                      onChange={(e) => handleExperienceChange(experience.id, "position", e.target.value)}
                      placeholder="Job title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`location-${experience.id}`}>Location</Label>
                    <Input
                      id={`location-${experience.id}`}
                      value={experience.location}
                      onChange={(e) => handleExperienceChange(experience.id, "location", e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${experience.id}`}>Start Date</Label>
                    <Input
                      id={`startDate-${experience.id}`}
                      type="month"
                      value={experience.startDate}
                      onChange={(e) => handleExperienceChange(experience.id, "startDate", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 flex items-end">
                    <div className="flex items-center space-x-2 h-10">
                      <Checkbox
                        id={`current-${experience.id}`}
                        checked={experience.current}
                        onCheckedChange={(checked) => {
                          handleExperienceChange(experience.id, "current", !!checked);
                          if (checked) {
                            handleExperienceChange(experience.id, "endDate", "");
                          }
                        }}
                      />
                      <Label htmlFor={`current-${experience.id}`}>Current Position</Label>
                    </div>
                  </div>
                  
                  {!experience.current && (
                    <div className="space-y-2">
                      <Label htmlFor={`endDate-${experience.id}`}>End Date</Label>
                      <Input
                        id={`endDate-${experience.id}`}
                        type="month"
                        value={experience.endDate}
                        onChange={(e) => handleExperienceChange(experience.id, "endDate", e.target.value)}
                        disabled={experience.current}
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mt-4">
                  <Label htmlFor={`description-${experience.id}`}>Description</Label>
                  <Textarea
                    id={`description-${experience.id}`}
                    value={experience.description}
                    onChange={(e) => handleExperienceChange(experience.id, "description", e.target.value)}
                    placeholder="Describe your responsibilities and achievements"
                    className="h-32 resize-none"
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

export default WorkExperienceForm;
