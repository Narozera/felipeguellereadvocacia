import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "../utils/motion";

export default function Modal({ area, onClose }) {
  useEffect(() => {
    const handleKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 font-times"
        variants={container}
        initial="hidden"
        animate="visible"
        onClick={onClose}
      >
        <div
          className="w-full max-w-3xl my-6 rounded-[20px] bg-navy-light text-white shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <motion.div
            className="flex items-center justify-center gap-4 p-6 border-b border-white/20"
            variants={item}
          >
            <img className="h-[50px] w-[50px]" src={area.img} alt={area.alt} />
            <h3 className="text-[28px] font-bold sm:text-[22px] md:text-[22px]">
              {area.title}
            </h3>
          </motion.div>

          <motion.ul className="p-6 space-y-6" variants={item}>
            {area.items.map((entry) => (
              <li key={entry.id} className="flex gap-5 items-start">
                <img
                  className="h-[40px] w-[40px] shrink-0 mt-1"
                  src={entry.icon}
                  alt={entry.alt}
                />
                <div>
                  {entry.title && (
                    <h4 className="font-bold text-[19px] mb-1">{entry.title}</h4>
                  )}
                  <p className="text-[17px] text-white/85 leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>

          <div className="p-6 border-t border-white/20">
            <button
              className="w-full rounded-full bg-white text-navy font-bold uppercase py-3 hover:bg-[#c9d6df] ease-linear transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </motion.div>
      <div className="fixed inset-0 z-40 bg-black/60" />
    </>
  );
}
