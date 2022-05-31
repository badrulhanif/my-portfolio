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
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="bg-black/[0.6] rounded-2xl shadow-lg p-10 text-white">
        <div className="flex max-w-3xl divide-x-4 divide-white/[0.3] divide-dotted">
          <div className="w-full pr-8 md:w-1/2">
            <Image
              src={profileImage}
              alt="Profile Image"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h1 className="pt-2 font-sans text-4xl font-semibold">
              Badrul Hanif
            </h1>
            <h3 className="pb-3 text-lg font-medium text-slate-300/[0.5]">
              AKA 0xpachio
            </h3>
            <div className="flex items-center gap-2 pb-3 text-white/[0.7]">
              <Plus /> Manager of Fancy Fox Club
            </div>
            <p className="text-white/[0.7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              massa a nunc venenatis auctor.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi ut massa a nunc venenatis
              auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi ut massa a nunc venenatis auctor.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi ut massa a nunc venenatis
              auctor.
            </p>
          </div>
          {/* <div className="divide-x">f</div> */}
          <div className="w-full pl-8 md:w-1/2">
            <h3 className="text-white/[0.7]">Social Links</h3>
            {socialLinks.map((socialLinks) => {
              return (
                <SocialLink
                  key=""
                  twitter={socialLinks.twitter}
                  instagram={socialLinks.instagram}
                  linkedin={socialLinks.linkedin}
                  behance={socialLinks.behance}
                  github={socialLinks.github}
                />
              );
            })}
            <h3 className="mt-5 text-white/[0.7]">Business and Products</h3>
            <BusinessAndPortfolio />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 flex items-center gap-1 justify-center text-white/[0.8]">
        <Mail />
        hanifbaharuddin@gmail.com
      </div>
    </div>
  );
}
export default Portfolio;
