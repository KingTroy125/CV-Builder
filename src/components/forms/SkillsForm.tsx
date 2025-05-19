
import { useState } from "react";
import { Skill } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Trash2 } from "lucide-react";

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

const SkillsForm = ({ skills, onChange }: SkillsFormProps) => {
  const handleAddSkill = () => {
    const newSkill: Skill = {
      id: `skill${Date.now()}`,
      name: "",
      level: 3,
    };
    onChange([...skills, newSkill]);
  };
  
  const handleRemoveSkill = (id: string) => {
    onChange(skills.filter(skill => skill.id !== id));
  };
  
  const handleSkillChange = (id: string, field: keyof Skill, value: string | number) => {
    const updatedSkills = skills.map(skill => {
      if (skill.id === id) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    onChange(updatedSkills);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Skills</h2>
        <Button onClick={handleAddSkill} size="sm">
          Add Skill
        </Button>
      </div>
      
      {skills.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No skills added yet.</p>
          <p className="text-sm mt-1">Click 'Add Skill' to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="flex items-center space-x-4 p-3 border rounded-md"
            >
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 space-y-1">
                  <Label htmlFor={`skill-${skill.id}`}>Skill Name</Label>
                  <Input
                    id={`skill-${skill.id}`}
                    value={skill.name}
                    onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                    placeholder="e.g. Figma, JavaScript, Project Management"
                  />
                </div>
                
                <div className="md:col-span-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <Label htmlFor={`level-${skill.id}`}>Proficiency Level</Label>
                    <span className="text-sm text-muted-foreground">
                      {skill.level === 1 && "Beginner"}
                      {skill.level === 2 && "Basic"}
                      {skill.level === 3 && "Intermediate"}
                      {skill.level === 4 && "Advanced"}
                      {skill.level === 5 && "Expert"}
                    </span>
                  </div>
                  <Slider
                    id={`level-${skill.id}`}
                    min={1}
                    max={5}
                    step={1}
                    value={[skill.level]}
                    onValueChange={(value) => handleSkillChange(skill.id, "level", value[0])}
                    className="py-2"
                  />
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => handleRemoveSkill(skill.id)}
                className="shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsForm;
