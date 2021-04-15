import { siteMetadata } from "../constants";
import Image from "next/image";
import Head from "next/head";
import {
  IoCodeWorkingSharp,
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
function Home() {
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
      <Image
        alt="Background of code"
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        className="filter blur-sm"
      />
      <article className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-gray-300">
        <div className="max-w-5xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div className="w-full lg:max-w-prose rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <img
                src={require("../../public/images/pictureOfMe.png")}
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center object-cover object-right-top"
              />
              <div className="flex justify-between items-end md:w-full md:mx-0 w-11/12 mx-auto">
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                  {siteMetadata.author}
                </h1>
                <a
                  href="https://blog.christianarty.com"
                  className="bg-black hover:bg-gray-700 mt-8 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
                >
                  My Blog!
                </a>
              </div>
              <div className="mx-auto lg:mx-0 w-11/12 pt-3 border-b-2 border-blue-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <IoCodeWorkingSharp
                  size="1.5rem"
                  className="h-8 fill-current text-blue-700 mr-4"
                />
                {siteMetadata.jobTitle}
              </p>
              <p className="pt-2 text-gray-700 text-sm lg:text-sm flex items-center justify-center lg:justify-start">
                <IoLocationSharp
                  size="1.5rem"
                  className="h-8 fill-current text-blue-700 mr-4"
                />
                {siteMetadata.geoLocation}
              </p>
              <p className="lg:prose-md prose-sm pt-8 ">
                I am an experienced leader who develops innovative and reliable
                software to aid and solve problems at small startups or at
                multinational Fortune 500 companies. I am specialized toward
                modern front end web technologies, such as &nbsp;
                <strong>ReactJS</strong>, and optimizing/improving the delivery
                of front end assets so the customer has the{" "}
                <strong>fastest user experience possible.</strong> Additionally,
                with my communication skills, I am able to effectively
                coordinate and discuss the technological aspects of a problem
                amongst a team and present them toward stakeholders to identify
                solutions that fit the business requirement. <br />
                <p>
                  If you want deliver an experience that both the customer will
                  love and the developers would enjoy working with,{" "}
                  <strong>let's connect and chat.</strong>
                </p>
              </p>

              <div className="pt-12 pb-8">
                <a
                  href={`mailto:${siteMetadata.contactMe}?subject=[christianarty.com]`}
                  className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full cursor-pointer "
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-evenly lg:justify-start lg:space-x-24">
                <a href={siteMetadata.socialMedia.linkedin} className="link ">
                  <IoLogoLinkedin
                    className="fill-current hover:text-blue-600"
                    size="1.5rem"
                  />
                </a>
                <a className="link" href={siteMetadata.socialMedia.github}>
                  <IoLogoGithub
                    className="fill-current hover:text-blue-600"
                    size="1.5rem"
                  />
                </a>
                <a className="link" href={siteMetadata.socialMedia.twitter}>
                  <IoLogoTwitter
                    className="fill-current hover:text-blue-600"
                    size="1.5rem"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12  z-10 -ml-2.5 ">
            <img
              src={require("../../public/images/pictureOfMe.png")}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default Home;
