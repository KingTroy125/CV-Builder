
import { ResumeData } from "@/types/resume";
import { formatDate } from "@/lib/date-utils";

interface ModernTemplateProps {
  data: ResumeData;
  accentColor?: string;
}

const ModernTemplate = ({ data, accentColor = "#0071E3" }: ModernTemplateProps) => {
  return (
    <div className="max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="bg-[#F5F5F7] p-6 md:p-10 border-l-8" style={{ borderColor: accentColor }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.personal.fullName}</h1>
        <p className="text-lg font-medium" style={{ color: accentColor }}>{data.personal.title}</p>
        
        {/* Summary */}
        {data.personal.summary && (
          <div className="mt-4 border-t pt-4 border-gray-200">
            <p className="text-sm text-[#494949] leading-relaxed">{data.personal.summary}</p>
          </div>
        )}
      </header>
      
      <div className="flex flex-col md:flex-row">
        {/* Main Content */}
        <div className="md:w-8/12 p-6 md:p-8">
          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {data.workExperience.map((work) => (
                  <div key={work.id} className="mb-4 relative border-b pb-4 last:border-0">
                    <div className="mb-2">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <h3 className="text-base font-bold text-[#1D1D1F]">{work.position}</h3>
                        <span className="text-xs bg-[#F5F5F7] text-[#86868B] px-2 py-1 rounded md:ml-2 inline-block md:inline">
                          {formatDate(work.startDate)} - {work.current ? "Present" : formatDate(work.endDate)}
                        </span>
                      </div>
                      <div className="text-sm font-medium" style={{ color: accentColor }}>{work.company}</div>
                      <div className="text-xs text-[#86868B] mb-2">{work.location}</div>
                    </div>
                    <p className="text-sm text-[#494949]">{work.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Education */}
          {data.education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                EDUCATION
              </h2>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-4 relative border-b pb-4 last:border-0">
                    <div className="mb-2">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <h3 className="text-base font-bold text-[#1D1D1F]">{edu.degree} in {edu.field}</h3>
                        <span className="text-xs bg-[#F5F5F7] text-[#86868B] px-2 py-1 rounded md:ml-2 inline-block md:inline">
                          {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </span>
                      </div>
                      <div className="text-sm font-medium" style={{ color: accentColor }}>{edu.institution}</div>
                      <div className="text-xs text-[#86868B] mb-2">{edu.location}</div>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-[#494949]">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                  </svg>
                </div>
                CERTIFICATIONS
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="border-b pb-3 last:border-0">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm" style={{ color: accentColor }}>{cert.organization}</div>
                    <div className="text-xs text-[#86868B]">
                      {formatDate(cert.date)}
                      {cert.credentialId && ` • ID: ${cert.credentialId}`}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="md:w-4/12 bg-[#F5F5F7] p-6 md:p-8">
          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              CONTACT
            </h2>
            <ul className="space-y-2 text-sm">
              {data.personal.email && (
                <li className="flex items-start">
                  <span className="w-16 text-xs text-[#86868B] uppercase">Email:</span>
                  <span className="flex-1">{data.personal.email}</span>
                </li>
              )}
              {data.personal.phone && (
                <li className="flex items-start">
                  <span className="w-16 text-xs text-[#86868B] uppercase">Phone:</span>
                  <span className="flex-1">{data.personal.phone}</span>
                </li>
              )}
              {data.personal.location && (
                <li className="flex items-start">
                  <span className="w-16 text-xs text-[#86868B] uppercase">Location:</span>
                  <span className="flex-1">{data.personal.location}</span>
                </li>
              )}
              {data.personal.website && (
                <li className="flex items-start">
                  <span className="w-16 text-xs text-[#86868B] uppercase">Website:</span>
                  <span className="flex-1">{data.personal.website}</span>
                </li>
              )}
            </ul>
          </section>
          
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                SKILLS
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-xs text-[#86868B]">
                        {skill.level === 1 && "Beginner"}
                        {skill.level === 2 && "Basic"}
                        {skill.level === 3 && "Intermediate"}
                        {skill.level === 4 && "Advanced"}
                        {skill.level === 5 && "Expert"}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${(skill.level / 5) * 100}%`,
                          backgroundColor: accentColor 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Languages */}
          {data.languages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l-.24 2.4a1 1 0 11-1.94-.48l.24-2.4a1 1 0 01.12-.48H5a1 1 0 110-2h3V3a1 1 0 011-1zm2 5a1 1 0 11-2 0 1 1 0 012 0zM7 8a1 1 0 00-.748 1.68l3 3a1 1 0 001.496 0l3-3A1 1 0 0013 8H7z" clipRule="evenodd"></path>
                  </svg>
                </div>
                LANGUAGES
              </h2>
              <ul className="space-y-2">
                {data.languages.map((language) => (
                  <li key={language.id} className="flex justify-between items-center">
                    <span className="font-medium text-sm">{language.name}</span>
                    <span className="text-xs bg-white px-2 py-1 rounded text-[#86868B]" style={{ borderLeft: `3px solid ${accentColor}` }}>
                      {language.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
