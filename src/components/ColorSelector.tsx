
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

interface ColorSelectorProps {
  activeColor: string;
  setActiveColor: (color: string) => void;
}

const colorOptions = [
  {
    id: "blue",
    name: "Blue",
    value: "#0071E3",
    bgClass: "bg-apple-blue"
  },
  {
    id: "teal",
    name: "Teal",
    value: "#14B8A6",
    bgClass: "bg-teal-500"
  },
  {
    id: "orange",
    name: "Orange",
    value: "#F97316",
    bgClass: "bg-orange-500"
  },
  {
    id: "purple",
    name: "Purple",
    value: "#8B5CF6",
    bgClass: "bg-violet-500"
  },
  {
    id: "red",
    name: "Red",
    value: "#EF4444",
    bgClass: "bg-red-500"
  },
  {
    id: "green",
    name: "Green",
    value: "#22C55E",
    bgClass: "bg-green-500"
  }
];

const ColorSelector = ({ activeColor, setActiveColor }: ColorSelectorProps) => {
  return (
    <div className="animate-fade-in mt-6">
      <h3 className="text-base font-medium mb-3 text-apple-dark flex items-center gap-2">
        <Palette className="h-4 w-4" />
        Choose Accent Color
      </h3>
      <RadioGroup
        defaultValue={activeColor}
        value={activeColor}
        onValueChange={setActiveColor}
        className="flex flex-wrap gap-3"
      >
        {colorOptions.map((color) => (
          <div key={color.id} className="flex-1 min-w-[60px] max-w-[70px]">
            <RadioGroupItem
              value={color.id}
              id={`color-${color.id}`}
              className="peer sr-only"
            />
            <Label
              htmlFor={`color-${color.id}`}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border-2 border-muted p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-apple-blue [&:has([data-state=checked])]:border-apple-blue transition-all duration-300 hover:cursor-pointer",
                activeColor === color.id
                  ? "bg-accent/20 shadow-sm"
                  : "bg-transparent"
              )}
            >
              <div
                className={cn(
                  "w-full h-8 rounded-md mb-1 shadow-sm",
                  color.bgClass
                )}
              ></div>
              <span className="text-xs font-medium">{color.name}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorSelector;
