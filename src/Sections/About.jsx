import { about } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function About() {
  return (
    <section className="section bg-white" id="about">
      <div className="section-grid text-navy">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p className="eyebrow text-navy-500" variants={textVariant(0.2)}>
            {about.tag}
          </motion.p>
          <motion.h2 className="section-title" variants={textVariant(0.3)}>
            {about.name}
          </motion.h2>
          <motion.p
            className="text-[20px] text-navy-500 italic mt-2"
            variants={textVariant(0.3)}
          >
            {about.role}
          </motion.p>

          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="lead text-navy-700"
              variants={textVariant(0.4 + index * 0.1)}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.ul
            className="grid grid-cols-3 gap-6 mt-12 sm:grid-cols-1"
            variants={textVariant(0.7)}
          >
            {about.stats.map((stat) => (
              <li
                key={stat.id}
                className="card-inner bg-navy-50 border border-navy-200 text-center"
              >
                <p className="font-bold text-[32px] text-navy">{stat.value}</p>
                <p className="text-[16px] text-navy-500">{stat.label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative isolate flex flex-col justify-end min-h-[560px] rounded-[20px] overflow-hidden shadow-xl shadow-navy-300/40"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.img
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_20%]"
            src="/images/justica.jpg"
            alt="Estátua da Justiça segurando a balança"
            width="800"
            height="1000"
            loading="lazy"
            variants={textVariant(0.4)}
          />
          <motion.aside
            className="card-inner m-6 bg-navy-800/90 backdrop-blur text-white"
            variants={textVariant(0.5)}
          >
            <h3 className="font-bold text-[22px]">Formação acadêmica</h3>
            <ul className="space-y-3 mt-6">
              {about.education.map((course) => (
                <li key={course.id}>
                  <p className="font-bold text-[18px]">{course.title}</p>
                  <p className="font-light text-[16px] text-navy-200">
                    {course.place} · {course.period}
                  </p>
                </li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
