import {
  siteMetadata,
  aboutSection,
  experiences,
  education,
  Experience,
  Education,
} from "../constants";
import Image from "next/image";
import Head from "next/head";
import {
  IoCodeWorkingSharp,
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoBriefcaseOutline,
  IoSchoolOutline,
} from "react-icons/io5";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;

  // Company brand colors and logos
  const companyStyles: Record<
    string,
    { bg: string; logoText: string; accentColor: string }
  > = {
    LinkedIn: {
      bg: "bg-gradient-to-br from-[#0A66C2] to-[#004182]",
      logoText: "in",
      accentColor: "from-blue-500 to-blue-600",
    },
    "Amazon Web Services (AWS)": {
      bg: "bg-gradient-to-br from-[#FF9900] to-[#EC7211]",
      logoText: "AWS",
      accentColor: "from-orange-500 to-orange-600",
    },
    "Consortium Networks": {
      bg: "bg-gradient-to-br from-purple-600 to-purple-800",
      logoText: "CN",
      accentColor: "from-purple-500 to-purple-600",
    },
    "McKesson Pharmaceuticals": {
      bg: "bg-gradient-to-br from-[#00A3E0] to-[#0077C8]",
      logoText: "MP",
      accentColor: "from-cyan-500 to-cyan-600",
    },
    "Opeff Technologies": {
      bg: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      logoText: "OT",
      accentColor: "from-indigo-500 to-indigo-600",
    },
  };

  const companyStyle = companyStyles[experience.company] || {
    bg: "bg-gradient-to-br from-gray-600 to-gray-800",
    logoText: experience.company.substring(0, 2).toUpperCase(),
    accentColor: "from-blue-500 to-blue-600",
  };

  return (
    <div className="mb-20 relative timeline-item group">
      {/* Timeline marker with glow effect */}
      <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
        <div className="relative">
          <div
            className={`w-6 h-6 bg-gradient-to-br ${companyStyle.accentColor} rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
          ></div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${companyStyle.accentColor} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity`}
          ></div>
        </div>
      </div>

      {/* Card */}
      <div
        className={`ml-20 lg:ml-0 lg:grid lg:grid-cols-2 gap-12 items-center ${isLeft ? "" : "lg:flex-row-reverse"}`}
      >
        {/* Content side */}
        <div className={isLeft ? "lg:pr-16" : "lg:order-2 lg:pl-16"}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group-hover:bg-white">
            {/* Company header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <IoBriefcaseOutline className="text-blue-600" size="1.75rem" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {experience.company}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {experience.location}
                </p>
                <p className="text-sm font-semibold text-blue-600">
                  {experience.overallDuration}
                </p>
              </div>
            </div>

            {/* Roles */}
            <div className="space-y-6">
              {experience.roles.map((role, roleIndex) => (
                <div key={roleIndex}>
                  <div className="mb-4 pb-3 border-b border-gray-100">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      {role.title}
                    </h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {role.startDate} - {role.endDate} · {role.duration}
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    {role.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 items-start">
                        <span className="text-blue-500 text-lg flex-shrink-0 leading-none">
                          →
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo side - opposite of content */}
        <div
          className={`hidden lg:flex ${isLeft ? "lg:order-2 lg:pl-16" : "lg:pr-16"} justify-center items-center`}
        >
          <div className="relative">
            {/* Blended background glow */}
            <div
              className={`absolute inset-0 ${companyStyle.bg} rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity scale-150`}
            ></div>

            {/* Logo container */}
            <div
              className={`relative ${companyStyle.bg} w-48 h-48 rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-3xl`}
            >
              <span className="text-white font-bold text-5xl tracking-wider">
                {companyStyle.logoText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EducationCardProps {
  education: Education;
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="mb-20 relative timeline-item group">
      {/* Timeline marker with glow effect */}
      <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
        </div>
      </div>

      {/* Card - with logo on right */}
      <div className="ml-20 lg:ml-0 lg:grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group-hover:bg-white">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl">
                <IoSchoolOutline className="text-emerald-600" size="1.75rem" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {education.institution}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {education.degree} - {education.field}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {education.location}
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  {education.startYear} - {education.endYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* School logo side */}
        <div className="hidden lg:flex lg:pl-16 justify-center items-center">
          <div className="relative">
            {/* Blended background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>

            {/* Logo container - Stony Brook Red */}
            <div className="relative bg-gradient-to-br from-[#990000] to-[#660000] w-48 h-48 rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-3xl">
              <span className="text-white font-bold text-4xl tracking-wider text-center px-4">
                SBU
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={siteMetadata.seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main className="font-sans antialiased text-gray-900 leading-normal bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
              {/* Left content */}
              <div className="order-2 lg:order-1">
                <div className="mb-6 inline-block">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    Available for opportunities
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
                  {siteMetadata.author}
                </h1>

                <div className="flex items-center gap-3 text-xl font-semibold text-blue-600 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IoCodeWorkingSharp size="1.5rem" />
                  </div>
                  {siteMetadata.jobTitle}
                </div>

                <div className="flex items-center gap-3 text-gray-600 mb-8">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <IoLocationSharp size="1.25rem" />
                  </div>
                  {siteMetadata.geoLocation}
                </div>

                <div className="max-w-2xl text-gray-600 text-lg leading-relaxed mb-10 space-y-4">
                  {aboutSection.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href={`mailto:${siteMetadata.contactMe}?subject=[christianarty.com]`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Get In Touch
                  </a>
                  <a
                    href={siteMetadata.blogLink}
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Read My Blog
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href={siteMetadata.socialMedia.linkedin}
                    className="p-3 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Christian Arty's LinkedIn"
                  >
                    <IoLogoLinkedin size="1.75rem" />
                  </a>
                  <a
                    href={siteMetadata.socialMedia.github}
                    className="p-3 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Christian Arty's Github"
                  >
                    <IoLogoGithub size="1.75rem" />
                  </a>
                  <a
                    href={siteMetadata.socialMedia.twitter}
                    className="p-3 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-400 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Christian Arty's Twitter"
                  >
                    <IoLogoTwitter size="1.75rem" />
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-2xl opacity-20 transform scale-105"></div>

                  <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem]">
                    <Image
                      alt="Profile image of Christian Arty"
                      src="/images/pictureOfMe.jpg"
                      fill
                      className="rounded-3xl shadow-2xl object-cover ring-4 ring-white/50"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                My Journey
              </h2>
              <p className="text-gray-500 text-lg">
                Scroll through time to see my professional experience
              </p>
            </div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical timeline line with gradient */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-emerald-300 rounded-full hidden lg:block"></div>
              <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-emerald-300 rounded-full lg:hidden"></div>

              {/* Experience Cards */}
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}

              {/* Education Cards */}
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href={siteMetadata.socialMedia.linkedin}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin size="1.5rem" />
              </a>
              <a
                href={siteMetadata.socialMedia.github}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <IoLogoGithub size="1.5rem" />
              </a>
              <a
                href={siteMetadata.socialMedia.twitter}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <IoLogoTwitter size="1.5rem" />
              </a>
            </div>
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} {siteMetadata.author}. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
