import { hero } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Hero() {
  return (
    <section id="hero" className="bg-navy font-times px-6 py-24 sm:py-14 md:py-14">
      <motion.div
        className="container mx-auto grid grid-cols-[1.4fr_1fr] gap-16 items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:gap-10 md:gap-10 lg:gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-white">
          <motion.p
            className="uppercase tracking-[0.2em] text-[14px] text-white/70 mb-5"
            variants={textVariant(0.2)}
          >
            {hero.tag}
          </motion.p>
          <motion.h1
            className="font-bold text-[48px] leading-[1.1] lg:text-[40px] md:text-[32px] sm:text-[28px]"
            variants={textVariant(0.4)}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="text-[20px] leading-relaxed text-white/85 mt-6 max-w-[620px] sm:text-[18px] md:text-[18px]"
            variants={textVariant(0.6)}
          >
            {hero.text}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            variants={textVariant(0.8)}
          >
            <a
              href={hero.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-navy font-bold text-[18px] px-8 py-3 rounded-full hover:bg-[#c9d6df] ease-linear transition-all duration-150"
            >
              {hero.button}
            </a>
            <a
              href={hero.secondaryHref}
              className="border border-white/40 text-white text-[18px] px-8 py-3 rounded-full hover:bg-white/10 ease-linear transition-all duration-150"
            >
              {hero.secondary}
            </a>
          </motion.div>
        </div>

        <ul className="space-y-4">
          {hero.highlights.map((item, index) => (
            <motion.li
              key={item.id}
              className="bg-navy-light border border-white/10 rounded-[20px] p-6 text-white shadow-lg shadow-black/30"
              variants={textVariant(0.6 + index * 0.2)}
            >
              <h2 className="font-bold text-[22px]">{item.title}</h2>
              <p className="text-white/80 text-[17px] mt-1">{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
