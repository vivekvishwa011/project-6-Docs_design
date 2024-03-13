import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.5 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }  py-4 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
