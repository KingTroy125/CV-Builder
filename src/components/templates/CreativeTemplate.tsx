
import { ResumeData } from "@/types/resume";
import { formatDate } from "@/lib/date-utils";

interface CreativeTemplateProps {
  data: ResumeData;
  accentColor?: string;
}

const CreativeTemplate = ({ data, accentColor = "#0071E3" }: CreativeTemplateProps) => {
  return (
    <div className="max-w-4xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/3 text-white p-6 md:p-8" style={{ background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}dd)` }}>
          <div className="mb-8 text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">
                {data.personal.fullName.split(' ').map(name => name[0]).join('')}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">{data.personal.fullName}</h1>
            <p className="text-md opacity-90 font-medium">{data.personal.title}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 flex items-center">
              <svg className="w-4 h-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              {data.personal.email && (
                <li className="flex items-center group">
                  <svg className="w-4 h-4 mr-2 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">{data.personal.email}</span>
                </li>
              )}
              {data.personal.phone && (
                <li className="flex items-center group">
                  <svg className="w-4 h-4 mr-2 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">{data.personal.phone}</span>
                </li>
              )}
              {data.personal.location && (
                <li className="flex items-center group">
                  <svg className="w-4 h-4 mr-2 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">{data.personal.location}</span>
                </li>
              )}
              {data.personal.website && (
                <li className="flex items-center group">
                  <svg className="w-4 h-4 mr-2 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">{data.personal.website}</span>
                </li>
              )}
            </ul>
          </div>
          
          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="space-y-1 hover-scale">
                    <div className="text-sm font-medium flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-xs opacity-70">{skill.level}/5</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Languages */}
          {data.languages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 flex items-center">
                <svg className="w-4 h-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                Languages
              </h2>
              <ul className="space-y-3">
                {data.languages.map((language) => (
                  <li key={language.id} className="text-sm hover-scale">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{language.name}</span>
                      <span className="opacity-80 text-xs">{language.proficiency}</span>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/70 rounded-full" 
                        style={{ 
                          width: language.proficiency === 'Native' ? '100%' : 
                                language.proficiency === 'Fluent' ? '90%' : 
                                language.proficiency === 'Advanced' ? '75%' : 
                                language.proficiency === 'Intermediate' ? '50%' : 
                                language.proficiency === 'Basic' ? '25%' : '10%' 
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Main Content */}
        <div className="md:w-2/3 p-6 md:p-8">
          {/* Summary */}
          {data.personal.summary && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 border-b pb-1 flex items-center" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Profile
              </h2>
              <p className="text-sm text-[#494949] leading-relaxed">{data.personal.summary}</p>
            </section>
          )}
          
          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 border-b pb-1 flex items-center" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Experience
              </h2>
              <div className="space-y-6">
                {data.workExperience.map((work) => (
                  <div key={work.id} className="relative pl-6 pb-2 border-l-2 hover-scale" style={{ borderColor: `${accentColor}30` }}>
                    <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1" style={{ backgroundColor: accentColor }}></div>
                    <div className="mb-1">
                      <h3 className="text-base font-bold text-apple-dark">{work.position}</h3>
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-sm font-medium" style={{ color: accentColor }}>{work.company}</p>
                        <span className="text-xs text-apple-gray">
                          {formatDate(work.startDate)} - {work.current ? "Present" : formatDate(work.endDate)}
                        </span>
                      </div>
                      <div className="text-xs text-apple-gray mb-2">{work.location}</div>
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
              <h2 className="text-xl font-semibold mb-4 border-b pb-1 flex items-center" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
                Education
              </h2>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 pb-2 border-l-2 hover-scale" style={{ borderColor: `${accentColor}30` }}>
                    <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1" style={{ backgroundColor: accentColor }}></div>
                    <div className="mb-1">
                      <h3 className="text-base font-bold text-apple-dark">{edu.degree} in {edu.field}</h3>
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-sm font-medium" style={{ color: accentColor }}>{edu.institution}</p>
                        <span className="text-xs text-apple-gray">
                          {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </span>
                      </div>
                      <div className="text-xs text-apple-gray mb-2">{edu.location}</div>
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
              <h2 className="text-xl font-semibold mb-3 border-b pb-1 flex items-center" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Certifications
              </h2>
              <ul className="space-y-3">
                {data.certifications.map((cert) => (
                  <li key={cert.id} className="text-sm hover-scale">
                    <div className="font-medium text-apple-dark">{cert.name}</div>
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
    </div>
  );
};

export default CreativeTemplate;
