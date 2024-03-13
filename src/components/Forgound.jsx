import { useRef, useState } from "react";
import Cards from "./Cards";

const Forgound = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "hello how are you.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "hello how are you.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "hello how are you.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Forgound;
