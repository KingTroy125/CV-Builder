
import { ResumeData } from "@/types/resume";
import { formatDate } from "@/lib/date-utils";

interface SidebarTemplateProps {
  data: ResumeData;
  accentColor: string;
}

const SidebarTemplate = ({ data, accentColor = "#0071E3" }: SidebarTemplateProps) => {
  return (
    <div className="w-full h-full p-6 text-[#333]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="flex flex-col md:flex-row h-full gap-6">
        {/* Sidebar */}
        <div 
          className="w-full md:w-1/3 p-5 text-white" 
          style={{ backgroundColor: accentColor }}
        >
          {data.personal.fullName && (
            <div className="mb-8 text-center">
              {/* Profile Photo */}
              <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-4xl">
                  {data.personal.fullName.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-sm space-y-2">
                {data.personal.email && (
                  <div className="flex items-center justify-center">
                    <span>{data.personal.email}</span>
                  </div>
                )}
                {data.personal.phone && (
                  <div className="flex items-center justify-center">
                    <span>{data.personal.phone}</span>
                  </div>
                )}
                {data.personal.location && (
                  <div className="flex items-center justify-center">
                    <span>{data.personal.location}</span>
                  </div>
                )}
                {data.personal.website && (
                  <div className="flex items-center justify-center">
                    <span>{data.personal.website}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">SKILLS</h3>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full bg-white" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">LANGUAGES</h3>
              <ul className="space-y-1 text-sm">
                {data.languages.map((language) => (
                  <li key={language.id} className="flex justify-between">
                    <span>{language.name}</span>
                    <span>{language.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">EDUCATION</h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-2">
                    <div className="text-sm font-bold">{edu.degree}</div>
                    <div className="text-sm">{edu.field}</div>
                    <div className="text-sm">{edu.institution}</div>
                    <div className="text-xs opacity-80">
                      {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">CERTIFICATIONS</h3>
              <div className="space-y-2">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="mb-2 text-sm">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-xs">{cert.organization}</div>
                    <div className="text-xs opacity-80">{formatDate(cert.date)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-5">
          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold mb-1 uppercase" style={{ color: accentColor }}>
              {data.personal.fullName}
            </h1>
            <h2 className="text-lg opacity-80">{data.personal.title}</h2>
          </div>

          {/* Summary */}
          {data.personal.summary && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 border-b pb-1" style={{ borderColor: accentColor }}>PROFILE</h3>
              <p className="text-sm leading-relaxed">{data.personal.summary}</p>
            </div>
          )}

          {/* Work Experience */}
          {data.workExperience && data.workExperience.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b pb-1" style={{ borderColor: accentColor }}>EXPERIENCE</h3>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="mb-3">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold">{exp.position}</h4>
                        <h5 className="text-sm font-medium">{exp.company}, {exp.location}</h5>
                      </div>
                      <div className="text-xs opacity-70">
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </div>
                    </div>
                    <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarTemplate;
