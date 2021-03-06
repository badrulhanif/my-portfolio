import { useState } from "react";

function BusinessItems(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { key, title, ans } = props;

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex p-1.5 pl-5 outline outline-2 outline-white/[0.3] hover:outline-pink-400/[0.8] hover:text-pink-400 cursor-pointer rounded-full"
      >
        {title}
      </div>
      {isOpen && <div className="pl-5 mb-1 text-sm">{ans}</div>}
    </>
  );
}

export default BusinessItems;
