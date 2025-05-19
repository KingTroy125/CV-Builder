
import { useState } from "react";
import { Language } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";

interface LanguagesFormProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

const proficiencyLevels = [
  { value: "Basic", label: "Basic" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
  { value: "Fluent", label: "Fluent" },
  { value: "Native", label: "Native" },
];

const LanguagesForm = ({ languages, onChange }: LanguagesFormProps) => {
  const handleAddLanguage = () => {
    const newLanguage: Language = {
      id: `lang${Date.now()}`,
      name: "",
      proficiency: "Intermediate",
    };
    onChange([...languages, newLanguage]);
  };
  
  const handleRemoveLanguage = (id: string) => {
    onChange(languages.filter(language => language.id !== id));
  };
  
  const handleLanguageChange = (id: string, field: keyof Language, value: string) => {
    const updatedLanguages = languages.map(language => {
      if (language.id === id) {
        return { ...language, [field]: value };
      }
      return language;
    });
    onChange(updatedLanguages);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Languages</h2>
        <Button onClick={handleAddLanguage} size="sm">
          Add Language
        </Button>
      </div>
      
      {languages.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No languages added yet.</p>
          <p className="text-sm mt-1">Click 'Add Language' to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {languages.map((language) => (
            <div 
              key={language.id} 
              className="flex items-center space-x-4 p-3 border rounded-md"
            >
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor={`language-${language.id}`}>Language</Label>
                  <Input
                    id={`language-${language.id}`}
                    value={language.name}
                    onChange={(e) => handleLanguageChange(language.id, "name", e.target.value)}
                    placeholder="e.g. English, Spanish, French"
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor={`proficiency-${language.id}`}>Proficiency Level</Label>
                  <Select
                    value={language.proficiency}
                    onValueChange={(value) => handleLanguageChange(language.id, "proficiency", value)}
                  >
                    <SelectTrigger id={`proficiency-${language.id}`}>
                      <SelectValue placeholder="Select proficiency level" />
                    </SelectTrigger>
                    <SelectContent>
                      {proficiencyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => handleRemoveLanguage(language.id)}
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

export default LanguagesForm;
