
import { ResumeData } from "@/types/resume";
import { formatDate } from "@/lib/date-utils";

interface MinimalTemplateProps {
  data: ResumeData;
  accentColor?: string;
}

const MinimalTemplate = ({ data, accentColor = "#0071E3" }: MinimalTemplateProps) => {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-light mb-2 text-apple-dark tracking-tight">{data.personal.fullName}</h1>
        <p className="text-md mb-4 font-medium" style={{ color: accentColor }}>{data.personal.title}</p>
        
        <div className="text-xs text-apple-gray flex flex-wrap justify-center gap-x-5 gap-y-1">
          {data.personal.email && (
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-apple-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {data.personal.email}
            </span>
          )}
          {data.personal.phone && (
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-apple-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {data.personal.phone}
            </span>
          )}
          {data.personal.location && (
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-apple-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {data.personal.location}
            </span>
          )}
          {data.personal.website && (
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-apple-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
              </svg>
              {data.personal.website}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.personal.summary && (
        <section className="mb-10 mx-auto max-w-2xl text-center">
          <p className="text-sm text-[#494949] leading-relaxed italic">{data.personal.summary}</p>
        </section>
      )}
      
      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section className="mb-10">
          <h2 
            className="text-base uppercase tracking-widest text-center font-normal mb-6 after:content-[''] after:block after:w-16 after:h-0.5 after:mx-auto after:mt-2" 
            style={{ color: accentColor }}
          >
            <span className="relative">Experience</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 mt-2" style={{ backgroundColor: accentColor }}></div>
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((work) => (
              <div key={work.id} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium text-apple-dark">{work.position}</h3>
                    <p className="text-sm" style={{ color: accentColor }}>{work.company} • {work.location}</p>
                  </div>
                  <div className="text-xs text-apple-gray mt-1 md:mt-0 md:text-right">
                    {formatDate(work.startDate)} - {work.current ? "Present" : formatDate(work.endDate)}
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
        <section className="mb-10">
          <h2 
            className="text-base uppercase tracking-widest text-center font-normal mb-6 after:content-[''] after:block after:w-16 after:h-0.5 after:mx-auto after:mt-2" 
            style={{ color: accentColor }}
          >
            <span className="relative">Education</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 mt-2" style={{ backgroundColor: accentColor }}></div>
          </h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium text-apple-dark">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm" style={{ color: accentColor }}>{edu.institution} • {edu.location}</p>
                  </div>
                  <div className="text-xs text-apple-gray mt-1 md:mt-0 md:text-right">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h2 
              className="text-base uppercase tracking-widest text-center font-normal mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:mx-auto after:mt-2" 
              style={{ color: accentColor }}
            >
              <span className="relative">Skills</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 mt-2" style={{ backgroundColor: accentColor }}></div>
            </h2>
            <div className="text-sm text-center">
              {data.skills.map((skill, index) => (
                <span key={skill.id} className="inline-block text-[#494949]">
                  {skill.name}
                  {index < data.skills.length - 1 ? <span style={{ color: accentColor }}> • </span> : ""}
                </span>
              ))}
            </div>
          </section>
        )}
        
        {/* Languages */}
        {data.languages.length > 0 && (
          <section>
            <h2 
              className="text-base uppercase tracking-widest text-center font-normal mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:mx-auto after:mt-2" 
              style={{ color: accentColor }}
            >
              <span className="relative">Languages</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 mt-2" style={{ backgroundColor: accentColor }}></div>
            </h2>
            <ul className="text-sm text-center">
              {data.languages.map((language, index) => (
                <span key={language.id} className="inline-block">
                  <span className="text-[#494949]">{language.name}</span>
                  <span className="text-apple-gray"> ({language.proficiency})</span>
                  {index < data.languages.length - 1 ? <span style={{ color: accentColor }}> • </span> : ""}
                </span>
              ))}
            </ul>
          </section>
        )}
        
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section>
            <h2 
              className="text-base uppercase tracking-widest text-center font-normal mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:mx-auto after:mt-2" 
              style={{ color: accentColor }}
            >
              <span className="relative">Certifications</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 mt-2" style={{ backgroundColor: accentColor }}></div>
            </h2>
            <ul className="text-center">
              {data.certifications.map((cert, index) => (
                <span key={cert.id} className="inline-block text-sm text-[#494949]">
                  {cert.name}
                  {index < data.certifications.length - 1 ? <span style={{ color: accentColor }}> • </span> : ""}
                </span>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
