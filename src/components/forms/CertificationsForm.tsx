
import { useState } from "react";
import { Certification } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

interface CertificationsFormProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

const CertificationsForm = ({ certifications, onChange }: CertificationsFormProps) => {
  const handleAddCertification = () => {
    const newCertification: Certification = {
      id: `cert${Date.now()}`,
      name: "",
      organization: "",
      date: "",
      credentialId: "",
    };
    onChange([...certifications, newCertification]);
  };
  
  const handleRemoveCertification = (id: string) => {
    onChange(certifications.filter(cert => cert.id !== id));
  };
  
  const handleCertificationChange = (id: string, field: keyof Certification, value: string) => {
    const updatedCertifications = certifications.map(cert => {
      if (cert.id === id) {
        return { ...cert, [field]: value };
      }
      return cert;
    });
    onChange(updatedCertifications);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Certifications</h2>
        <Button onClick={handleAddCertification} size="sm">
          Add Certification
        </Button>
      </div>
      
      {certifications.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No certifications added yet.</p>
          <p className="text-sm mt-1">Click 'Add Certification' to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="p-3 border rounded-md space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="font-medium">{cert.name || "New Certification"}</div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleRemoveCertification(cert.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`certName-${cert.id}`}>Certification Name</Label>
                  <Input
                    id={`certName-${cert.id}`}
                    value={cert.name}
                    onChange={(e) => handleCertificationChange(cert.id, "name", e.target.value)}
                    placeholder="e.g. AWS Certified Solutions Architect"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`organization-${cert.id}`}>Issuing Organization</Label>
                  <Input
                    id={`organization-${cert.id}`}
                    value={cert.organization}
                    onChange={(e) => handleCertificationChange(cert.id, "organization", e.target.value)}
                    placeholder="e.g. Amazon Web Services"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`date-${cert.id}`}>Issue Date</Label>
                  <Input
                    id={`date-${cert.id}`}
                    type="month"
                    value={cert.date}
                    onChange={(e) => handleCertificationChange(cert.id, "date", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`credentialId-${cert.id}`}>Credential ID (Optional)</Label>
                  <Input
                    id={`credentialId-${cert.id}`}
                    value={cert.credentialId}
                    onChange={(e) => handleCertificationChange(cert.id, "credentialId", e.target.value)}
                    placeholder="e.g. ABC123XYZ"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificationsForm;
