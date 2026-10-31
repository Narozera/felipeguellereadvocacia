import { career } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Career() {
  return (
    <section
      className="w-full bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 font-times px-6 py-24 sm:py-16 md:py-16"
      id="career"
    >
      <motion.div
        className="container mx-auto text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          className="uppercase tracking-[0.2em] text-[14px] text-navy-200"
          variants={textVariant(0.2)}
        >
          {career.tag}
        </motion.p>
        <motion.h2
          className="font-bold text-[36px] mt-2 sm:text-[28px] md:text-[28px]"
          variants={textVariant(0.3)}
        >
          {career.title}
        </motion.h2>

        <ol className="mt-10 border-l border-navy-400 ml-2">
          {career.items.map((job, index) => (
            <motion.li
              key={job.id}
              className="relative pl-8 pb-10 last:pb-0"
              variants={textVariant(0.3 + index * 0.1)}
            >
              <span
                className={`absolute -left-[7px] top-2 h-[13px] w-[13px] rounded-full ${
                  index === 0 ? "bg-white" : "bg-navy-300"
                }`}
              />
              <p className="font-light text-[16px] text-navy-200">
                {job.period}
              </p>
              <h3 className="font-bold text-[22px]">
                {job.role}{" "}
                <span className="font-normal text-navy-200">· {job.place}</span>
              </h3>
              <p className="text-[17px] leading-relaxed text-navy-100 mt-2 max-w-[900px]">
                {job.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
