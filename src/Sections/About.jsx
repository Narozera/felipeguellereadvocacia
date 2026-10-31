import { about } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function About() {
  return (
    <section className="w-full bg-white font-times px-6 py-24 sm:py-16 md:py-16" id="about">
      <motion.div
        className="container mx-auto grid grid-cols-[1.4fr_1fr] gap-16 text-navy lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:gap-10 md:gap-10 sm:gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div>
          <motion.p
            className="uppercase tracking-[0.2em] text-[14px] text-navy-500"
            variants={textVariant(0.2)}
          >
            {about.tag}
          </motion.p>
          <motion.h2
            className="font-bold text-[40px] mt-2 sm:text-[30px] md:text-[30px]"
            variants={textVariant(0.3)}
          >
            {about.name}
          </motion.h2>
          <motion.p
            className="text-[20px] text-navy-500 italic"
            variants={textVariant(0.3)}
          >
            {about.role}
          </motion.p>

          <div className="space-y-5 mt-8">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-[19px] leading-relaxed text-navy-700"
                variants={textVariant(0.4 + index * 0.1)}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.ul
            className="grid grid-cols-3 gap-4 mt-10 sm:grid-cols-1"
            variants={textVariant(0.7)}
          >
            {about.stats.map((stat) => (
              <li
                key={stat.id}
                className="bg-navy-50 rounded-[20px] p-5 border border-navy-200 text-center"
              >
                <p className="font-bold text-[32px] text-navy">{stat.value}</p>
                <p className="text-[16px] text-navy-500">{stat.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className="bg-gradient-to-br from-navy-800 to-navy-600 text-white rounded-[20px] p-8 space-y-8 self-start shadow-xl shadow-navy-300/40 sm:p-6 md:p-6"
          variants={textVariant(0.5)}
        >
          <div>
            <h3 className="font-bold text-[22px] mb-4">Formação acadêmica</h3>
            <ul className="space-y-4">
              {about.education.map((course) => (
                <li key={course.id}>
                  <p className="font-bold text-[18px]">{course.title}</p>
                  <p className="font-light text-[16px] text-navy-200">
                    {course.place} · {course.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[22px] mb-4">Competências</h3>
            <ul className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-white/10 border border-navy-300/50 rounded-full px-4 py-1 text-[16px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
