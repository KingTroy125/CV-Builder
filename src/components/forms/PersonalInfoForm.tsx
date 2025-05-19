
import { PersonalInfo } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const PersonalInfoForm = ({ data, onChange }: PersonalInfoFormProps) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
            id="fullName" 
            value={data.fullName} 
            onChange={(e) => handleChange("fullName", e.target.value)} 
            placeholder="John Appleseed"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input 
            id="title" 
            value={data.title} 
            onChange={(e) => handleChange("title", e.target.value)} 
            placeholder="Product Designer"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            value={data.email} 
            onChange={(e) => handleChange("email", e.target.value)} 
            placeholder="john@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone" 
            value={data.phone} 
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(555) 123-4567" 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            value={data.location} 
            onChange={(e) => handleChange("location", e.target.value)} 
            placeholder="Cupertino, CA"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="website">Website (optional)</Label>
          <Input 
            id="website" 
            value={data.website} 
            onChange={(e) => handleChange("website", e.target.value)} 
            placeholder="yourwebsite.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea 
          id="summary" 
          value={data.summary} 
          onChange={(e) => handleChange("summary", e.target.value)} 
          placeholder="Write a short professional summary about yourself"
          className="h-32 resize-none"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
