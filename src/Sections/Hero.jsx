import { hero } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Hero() {
  return (
    <section id="hero" className="section relative isolate overflow-hidden bg-navy-900">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/images/hero-biblioteca.jpg"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1100"
        fetchpriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-800/60" />
      <div className="hidden sm:block md:block absolute inset-0 -z-10 bg-navy-900/60" />

      <motion.div
        className="section-grid items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-white">
          <motion.p className="eyebrow text-navy-200" variants={textVariant(0.2)}>
            {hero.tag}
          </motion.p>
          <motion.h1
            className="font-bold text-[48px] leading-[1.1] mt-2 lg:text-[40px] md:text-[32px] sm:text-[28px]"
            variants={textVariant(0.4)}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="lead text-white/85 max-w-[620px]"
            variants={textVariant(0.6)}
          >
            {hero.text}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-6 mt-12"
            variants={textVariant(0.8)}
          >
            <a
              href={hero.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="btn bg-white text-navy hover:bg-navy-200"
            >
              {hero.button}
            </a>
            <a
              href={hero.secondaryHref}
              className="btn font-normal border border-white/40 text-white hover:bg-white/10"
            >
              {hero.secondary}
            </a>
          </motion.div>
        </div>

        <ul className="space-y-6">
          {hero.highlights.map((item, index) => (
            <motion.li
              key={item.id}
              className="card-inner bg-white/10 backdrop-blur border border-white/15 text-white shadow-lg shadow-navy-900/40"
              variants={textVariant(0.6 + index * 0.2)}
            >
              <h2 className="font-bold text-[22px]">{item.title}</h2>
              <p className="text-white/80 text-[17px] mt-2">{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
