import { career } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Career() {
  return (
    <section className="w-full bg-navy font-times px-6 pb-24" id="career">
      <motion.div
        className="container mx-auto bg-navy-light rounded-[20px] p-12 text-white sm:p-6 md:p-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          className="uppercase tracking-[0.2em] text-[14px] text-white/70"
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

        <ol className="mt-10 border-l border-white/25 ml-2">
          {career.items.map((job, index) => (
            <motion.li
              key={job.id}
              className="relative pl-8 pb-10 last:pb-0"
              variants={textVariant(0.3 + index * 0.1)}
            >
              <span className="absolute -left-[7px] top-2 h-[13px] w-[13px] rounded-full bg-white" />
              <p className="font-light text-[16px] text-white/70">
                {job.period}
              </p>
              <h3 className="font-bold text-[22px]">
                {job.role}{" "}
                <span className="font-normal text-white/80">· {job.place}</span>
              </h3>
              <p className="text-[17px] leading-relaxed text-white/85 mt-2 max-w-[900px]">
                {job.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
