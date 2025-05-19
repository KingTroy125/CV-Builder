
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TemplateSelectorProps {
  activeTemplate: string;
  setActiveTemplate: (template: string) => void;
}

const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "Clean and structured for corporate environments",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold design for creative fields",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant with subtle details",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Contemporary look with unique layout",
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description: "Clean sidebar design with customizable color",
  },
];

const TemplateSelector = ({ activeTemplate, setActiveTemplate }: TemplateSelectorProps) => {
  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-lg font-medium mb-4 text-apple-dark">Choose Template</h2>
      <RadioGroup
        defaultValue={activeTemplate}
        value={activeTemplate}
        onValueChange={setActiveTemplate}
        className="flex flex-wrap gap-4"
      >
        {templates.map((template) => (
          <div key={template.id} className="flex-1 min-w-[140px]">
            <RadioGroupItem
              value={template.id}
              id={template.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={template.id}
              className={cn(
                "flex flex-col items-center justify-center rounded-xl border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-apple-blue [&:has([data-state=checked])]:border-apple-blue transition-all duration-300 hover-scale cursor-pointer",
                activeTemplate === template.id
                  ? "bg-accent/50 shadow-md"
                  : "bg-transparent"
              )}
            >
              <div
                className={cn(
                  "mb-3 w-full h-28 bg-white rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300",
                  template.id === "professional" && "bg-[#f8f9fa]",
                  template.id === "creative" && "bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]",
                  template.id === "minimal" && "bg-white",
                  template.id === "modern" && "bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]",
                  template.id === "sidebar" && "flex flex-row"
                )}
              >
                <div className="text-xs text-gray-500">
                  {template.id === "professional" && (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-2 bg-apple-blue mb-1.5 rounded-sm"></div>
                      <div className="w-14 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                      <div className="w-10 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                      <div className="w-12 h-1 bg-gray-300 rounded-sm"></div>
                    </div>
                  )}
                  {template.id === "creative" && (
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-16 bg-apple-blue rounded-sm"></div>
                      <div className="flex flex-col">
                        <div className="w-12 h-2 bg-apple-blue mb-1.5 rounded-sm"></div>
                        <div className="w-10 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-8 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-10 h-1 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                  {template.id === "minimal" && (
                    <div className="flex flex-col items-start">
                      <div className="w-14 h-1.5 bg-apple-blue mb-2 rounded-sm"></div>
                      <div className="w-12 h-0.5 bg-gray-300 mb-2 rounded-sm"></div>
                      <div className="w-10 h-0.5 bg-gray-300 mb-2 rounded-sm"></div>
                      <div className="w-12 h-0.5 bg-gray-300 rounded-sm"></div>
                    </div>
                  )}
                  {template.id === "modern" && (
                    <div className="flex">
                      <div className="w-6 h-16 bg-apple-blue mr-2 rounded-sm"></div>
                      <div className="flex flex-col items-start">
                        <div className="w-12 h-1.5 bg-apple-blue mb-1.5 rounded-sm"></div>
                        <div className="w-10 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-8 h-0.5 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-10 h-0.5 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                  {template.id === "sidebar" && (
                    <div className="flex h-full w-full">
                      <div className="w-8 h-16 bg-apple-blue"></div>
                      <div className="flex flex-col items-start ml-2">
                        <div className="w-12 h-2 bg-apple-blue mb-1.5 rounded-sm"></div>
                        <div className="w-10 h-1 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-8 h-0.5 bg-gray-300 mb-1 rounded-sm"></div>
                        <div className="w-10 h-0.5 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="font-medium text-apple-dark">{template.name}</div>
              <p className="text-xs text-apple-gray text-center mt-1">
                {template.description}
              </p>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default TemplateSelector;
