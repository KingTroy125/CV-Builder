
import { ResumeData } from "@/types/resume";
import { formatDate } from "@/lib/date-utils";

interface ProfessionalTemplateProps {
  data: ResumeData;
  accentColor?: string;
}

const ProfessionalTemplate = ({ data, accentColor = "#0071E3" }: ProfessionalTemplateProps) => {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto font-sans text-apple-dark">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-apple-dark">{data.personal.fullName}</h1>
        <p className="text-lg font-medium mb-3" style={{ color: accentColor }}>{data.personal.title}</p>
        
        <div className="text-sm text-apple-gray flex flex-wrap gap-3 md:gap-5">
          {data.personal.email && (
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>{data.personal.email}</span>
            </div>
          )}
          {data.personal.phone && (
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>{data.personal.phone}</span>
            </div>
          )}
          {data.personal.location && (
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>{data.personal.location}</span>
            </div>
          )}
          {data.personal.website && (
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
              </svg>
              <span>{data.personal.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.personal.summary && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Summary</h2>
          <p className="text-sm text-[#494949] leading-relaxed">{data.personal.summary}</p>
        </section>
      )}
      
      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Work Experience</h2>
          <div className="space-y-5">
            {data.workExperience.map((work) => (
              <div key={work.id} className="mb-4 transition duration-300 hover:translate-x-1">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium text-apple-dark">{work.position}</h3>
                    <p className="text-sm" style={{ color: accentColor }}>{work.company}</p>
                  </div>
                  <div className="text-xs text-apple-gray md:text-right mt-1 md:mt-0">
                    <div>{work.location}</div>
                    <div>{formatDate(work.startDate)} - {work.current ? "Present" : formatDate(work.endDate)}</div>
                  </div>
                </div>
                <p className="text-xs text-[#494949] mt-2 leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Education</h2>
          <div className="space-y-5">
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 transition duration-300 hover:translate-x-1">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium text-apple-dark">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm" style={{ color: accentColor }}>{edu.institution}</p>
                  </div>
                  <div className="text-xs text-apple-gray md:text-right mt-1 md:mt-0">
                    <div>{edu.location}</div>
                    <div>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</div>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-xs text-[#494949] mt-2 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.skills.map((skill) => (
              <div key={skill.id} className="flex items-center">
                <span className="text-sm text-[#494949] mr-2">{skill.name}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Languages */}
        {data.languages.length > 0 && (
          <section className="flex-1 mb-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Languages</h2>
            <ul className="space-y-2">
              {data.languages.map((language) => (
                <li key={language.id} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-[#494949]">{language.name}</span>
                    <span className="text-apple-gray">{language.proficiency}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: language.proficiency === 'Native' ? '100%' : 
                               language.proficiency === 'Fluent' ? '90%' : 
                               language.proficiency === 'Advanced' ? '75%' : 
                               language.proficiency === 'Intermediate' ? '50%' : 
                               language.proficiency === 'Basic' ? '25%' : '10%',
                        backgroundColor: `${accentColor}70`
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="flex-1 mb-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-1 text-apple-dark" style={{ borderColor: `${accentColor}30` }}>Certifications</h2>
            <ul className="space-y-3">
              {data.certifications.map((cert) => (
                <li key={cert.id} className="text-sm transition duration-300 hover:translate-x-1">
                  <div className="font-medium text-[#494949]">{cert.name}</div>
                  <div className="text-xs" style={{ color: accentColor }}>{cert.organization}</div>
                  <div className="text-xs text-apple-gray">
                    {formatDate(cert.date)}
                    {cert.credentialId && ` • ID: ${cert.credentialId}`}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
