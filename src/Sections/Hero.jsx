import { hero } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#00293F] lg:px-[0px] px-[150px] py-10 h-[500px] md:h-[470px] font-roboto"
    >
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1
            className="text-[white] font-black text-[32px] text-center w-[320px] lg:text-[26px]"
            variants={textVariant(0.6)}
          >
            {hero[0]}
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex justify-center sm:hidden md:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.img
            className="absolute top-[150px] h-[500px] z-10"
            src="/img-hero.svg"
            variants={textVariant(0.3)}
          />
          <motion.img
            className="mt-30"
            src="balao-hero.svg"
            variants={textVariant(0.3)}
          />
        </motion.div>

        <motion.div
          className="flex justify-end sm:justify-center md:justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <ul className="text-[white] text-[18px] list-disc sm:text-center sm:pr-[5px] sm:list-none md:pr-[5px] md:list-none md:text-center lg:text-[16px] lg:pr-[5px] pr-[30px]">
            <motion.li
              className="w-[180px] sm:w-[280px] md:w-[300px] my-[10px]"
              variants={textVariant(0.7)}
            >
              {hero[1]}
            </motion.li>
            <motion.li
              className="w-[180px] sm:w-[280px] md:w-[300px]"
              variants={textVariant(1)}
            >
              {hero[2]}
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
