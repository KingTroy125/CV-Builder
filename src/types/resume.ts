
export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
}

export const defaultResumeData: ResumeData = {
  personal: {
    fullName: "John Appleseed",
    title: "Senior Product Designer",
    email: "john.appleseed@example.com",
    phone: "(555) 123-4567",
    location: "Cupertino, CA",
    website: "johnappleseed.com",
    summary: "Product designer with over 8 years of experience creating user-centered digital experiences for technology companies. Specialized in design systems, accessibility, and collaborative workflows."
  },
  workExperience: [
    {
      id: "work1",
      company: "Apple Inc.",
      position: "Senior Product Designer",
      location: "Cupertino, CA",
      startDate: "2020-03",
      endDate: "",
      current: true,
      description: "Lead product designer for consumer applications. Collaborate with engineering and product teams to develop new features. Established design system components and guidelines for multiple platforms."
    },
    {
      id: "work2",
      company: "Adobe",
      position: "Product Designer",
      location: "San Francisco, CA",
      startDate: "2017-06",
      endDate: "2020-02",
      current: false,
      description: "Designed user interfaces for creative professional tools. Conducted user research and usability testing. Created prototypes and specifications for new features."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "California Institute of Technology",
      degree: "Master of Design",
      field: "Interaction Design",
      location: "Pasadena, CA",
      startDate: "2015-09",
      endDate: "2017-05",
      description: "Focus on interaction design, user research, and visual communication."
    },
    {
      id: "edu2",
      institution: "Stanford University",
      degree: "Bachelor of Arts",
      field: "Graphic Design",
      location: "Stanford, CA",
      startDate: "2011-09",
      endDate: "2015-05",
      description: "Minor in Computer Science. Dean's List all semesters."
    }
  ],
  skills: [
    { id: "skill1", name: "UI/UX Design", level: 5 },
    { id: "skill2", name: "Figma", level: 5 },
    { id: "skill3", name: "Sketch", level: 4 },
    { id: "skill4", name: "Design Systems", level: 5 },
    { id: "skill5", name: "User Research", level: 4 },
    { id: "skill6", name: "Prototyping", level: 4 },
    { id: "skill7", name: "HTML/CSS", level: 3 },
    { id: "skill8", name: "JavaScript", level: 3 }
  ],
  languages: [
    { id: "lang1", name: "English", proficiency: "Native" },
    { id: "lang2", name: "Spanish", proficiency: "Intermediate" },
    { id: "lang3", name: "French", proficiency: "Basic" }
  ],
  certifications: [
    {
      id: "cert1",
      name: "Certified Professional UX Designer",
      organization: "Nielsen Norman Group",
      date: "2019-06",
      credentialId: "UX-2019-06542"
    },
    {
      id: "cert2",
      name: "Accessibility in Design",
      organization: "International Association of Accessibility Professionals",
      date: "2021-03",
      credentialId: "IAAP-AC-2021453"
    }
  ]
};
