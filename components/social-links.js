import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import Behance from "./icons/behance";
import Twitter from "./icons/twitter";
import Github from "./icons/github";

function SocialLink(props) {
  const { twitter, instagram, linkedin, behance, github } = props;
  return (
    <div className="grid w-20 grid-cols-5 gap-11 mt-2.5">
      <a href={twitter} target="_blank" rel="noreferrer">
        <Twitter />
      </a>
      <a href={instagram} target="_blank" rel="noreferrer">
        <Instagram />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <LinkedIn />
      </a>
      <a href={behance} target="_blank" rel="noreferrer">
        <Behance />
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        <Github />
      </a>
    </div>
  );
}

export default SocialLink;
