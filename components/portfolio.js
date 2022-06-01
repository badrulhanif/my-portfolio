import Image from "next/image";
import profileImage from "../public/Images/Mrpachio.png";
import SocialLink from "./social-links";
import BusinessAndPortfolio from "./business-and-portfolio";
import Mail from "../components/icons/mail";
import Plus from "./icons/plus";

function Portfolio() {
  const socialLinks = [
    {
      twitter: "https://twitter.com/0xpachio",
      instagram: "https://www.instagram.com/_badrulhanif/",
      linkedin: "https://www.linkedin.com/in/badrul-hanif-b01471196/",
      behance: "https://www.behance.net/badrulhanif",
      github: "https://github.com/badrulhanif",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-3 bg-cover bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex bg-black/[0.6] rounded-2xl shadow-lg p-10 text-white">
        <div className="flex flex-col md:flex-row max-w-3xl md:divide-x-4 divide-white/[0.3] divide-dotted">
          <div className="w-full pr-0 md:pr-8 md:w-1/2">
            <div className="flex justify-center md:justify-start">
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
            <h3 className="flex justify-center md:justify-start pb-5 text-lg font-medium text-slate-300/[0.5]">
              AKA 0xpachio
            </h3>
            <div className="flex items-center gap-2 pb-5 text-white/[0.7]">
              <Plus /> Manager of Fancy Fox Club
            </div>
            <p className="flex justify-center md:justify-start text-center md:text-left text-white/[0.7]">
              Self-taught developer and UI/UX designer with over two years
              experience in blockchain includes crypto and NFTs. Using Figma,
              React and Next for my works.
            </p>
          </div>
          <div className="w-full pl-0 mt-5 md:mt-0 md:pl-8 md:w-1/2">
            <h3 className="flex justify-center md:justify-start text-white/[0.7]">
              Social Links
            </h3>
            {socialLinks.map((socialLinks) => {
              return (
                <div className="flex ml-3.5 md:ml-0" key="">
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
      <div className="absolute inset-x-0 bottom-0 h-20 flex items-center gap-1 justify-center text-white/[0.8]">
        <Mail />
        hanifbaharuddin+works@gmail.com
      </div>
    </div>
  );
}
export default Portfolio;
