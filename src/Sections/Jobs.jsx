import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Components/Modal";
import { jobs, labor, titleJobs } from "../Constants";
import { textVariant } from "../utils/motion";

export default function Jobs() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section bg-gradient-to-b from-navy-100 to-navy-50" id="jobs">
      <motion.article
        className="card container mx-auto bg-white text-navy shadow-xl shadow-navy-300/30 border border-navy-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          className="flex items-center gap-6 sm:flex-col md:flex-col sm:items-start md:items-start"
          variants={textVariant(0.2)}
        >
          <img
            className="h-[80px] w-[80px]"
            src={labor.img}
            alt={labor.alt}
            width="80"
            height="80"
          />
          <div>
            <p className="eyebrow text-navy-500">{labor.tag}</p>
            <h2 className="section-title">{labor.title}</h2>
          </div>
        </motion.div>

        <motion.p className="lead text-navy-600 max-w-[900px]" variants={textVariant(0.3)}>
          {labor.text}
        </motion.p>

        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-1 md:grid-cols-1">
          {labor.audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              className={`card-inner text-white ${
                index === 0
                  ? "bg-navy-800"
                  : "bg-gradient-to-br from-navy-700 to-navy-500"
              }`}
              variants={textVariant(0.4 + index * 0.15)}
            >
              <img
                className="h-[50px] w-[50px]"
                src={audience.icon}
                alt={audience.alt}
                width="50"
                height="50"
              />
              <h3 className="font-bold text-[24px] mt-6">{audience.title}</h3>
              <p className="text-[17px] leading-relaxed text-navy-100 mt-2">
                {audience.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.ul
          className="card-inner grid grid-cols-2 gap-x-6 gap-y-3 mt-6 bg-navy-50 sm:grid-cols-1 md:grid-cols-1"
          variants={textVariant(0.6)}
        >
          {labor.services.map((service) => (
            <li key={service} className="flex gap-3 text-[18px] text-navy-700">
              <span className="font-bold text-navy-500">✓</span>
              <span>{service}</span>
            </li>
          ))}
        </motion.ul>
      </motion.article>

      <motion.div
        className="container mx-auto mt-24 sm:mt-16 md:mt-16 text-navy"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center" variants={textVariant(0.2)}>
          <p className="eyebrow text-navy-500">{titleJobs.tag}</p>
          <h2 className="section-title">{titleJobs.title}</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 mt-12 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {jobs.map((area, index) => (
            <motion.article
              key={area.id}
              className="card-inner flex flex-col text-center bg-white border border-navy-200 shadow-lg shadow-navy-300/20 hover:border-navy-400 ease-linear transition-all duration-150"
              variants={textVariant(0.3 + index * 0.1)}
            >
              <img
                className="mx-auto h-[70px] w-[70px]"
                src={area.img}
                alt={area.alt}
                width="70"
                height="70"
              />
              <h3 className="font-bold text-[22px] mt-6">{area.title}</h3>
              <p className="text-[17px] leading-relaxed text-navy-600 flex-1 mt-2">
                {area.text}
              </p>
              <button
                className="btn text-[16px] py-2 mt-6 bg-navy text-white hover:bg-navy-600"
                onClick={() => setSelected(area)}
              >
                Saiba Mais
              </button>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {selected && <Modal area={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
