import Image from "next/image";
import profileImage from "../public/Images/badrulhanif.png";
import SocialLink from "./social-links";
import BusinessAndPortfolio from "./business-and-portfolio";
import Mail from "../components/icons/mail";
import Plus from "./icons/plus";

function Portfolio() {
  const socialLinks = [
    {
      twitter: "https://twitter.com/badrulhanif_",
      instagram: "https://www.instagram.com/bbadrulhanif/",
      linkedin: "https://www.linkedin.com/in/badrul-hanif-b01471196/",
      behance: "https://www.behance.net/badrulhanif",
      github: "https://github.com/badrulhanif",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-3 bg-cover md:flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex bg-black/[0.6] rounded-2xl shadow-lg p-10 text-white">
        <div className="flex flex-col md:flex-row max-w-3xl md:divide-x-4 divide-white/[0.3] divide-dotted">
          <div className="w-full pr-0 md:pr-8 md:w-1/2">
            <div className="box-border flex justify-center md:justify-start">
              <Image
                src={profileImage}
                alt="Profile Image"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h1 className="flex justify-center pt-2 font-sans text-4xl font-semibold md:justify-start">
              Badrul Hanif
            </h1>
            <div className="flex items-center gap-2 pt-5 text-white/[0.7]">
              <Plus /> Full Stack Designer
            </div>
            <div className="flex items-center gap-2 pb-5 text-white/[0.7]">
              <Plus /> Based in Shah Alam, Selangor
            </div>
            <p className="flex justify-center font-bold text-center text-white md:justify-start md:text-left">
              Working Experience:
            </p>
            <ul>
            <li className="flex justify-center md:justify-start text-center md:text-left text-white/[0.7]">
              Graphic Designer, PentasIO (Freelance) - Produced social media posters and website banner.
            </li>
            </ul>
          </div>
          <div className="w-full pl-0 mt-5 md:mt-0 md:pl-8 md:w-1/2">
            <h3 className="flex justify-center md:justify-start text-white/[0.7]">
              Social Links
            </h3>
            {socialLinks.map((socialLinks) => {
              return (
                <div className="flex ml-12 md:ml-0" key="">
                  <SocialLink
                    twitter={socialLinks.twitter}
                    instagram={socialLinks.instagram}
                    linkedin={socialLinks.linkedin}
                    behance={socialLinks.behance}
                    github={socialLinks.github}
                  ></SocialLink>
                </div>
              );
            })}
            <h3 className="flex justify-center md:justify-start mt-5 text-white/[0.7]">
              Business and Products
            </h3>
            <div>
              <BusinessAndPortfolio />
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:absolute bottom-0 h-20 gap-1 flex items-center justify-center text-white/[0.8]">
        <Mail />
        hanifbaharuddin+works@gmail.com
      </div>
    </div>
  );
}
export default Portfolio;
