import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Components/Modal";
import { jobs, labor, titleJobs } from "../Constants";
import { textVariant } from "../utils/motion";

export default function Jobs() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="w-full bg-gradient-to-b from-navy-100 to-navy-50 font-times px-6 py-24 sm:py-16 md:py-16"
      id="jobs"
    >
      <motion.div
        className="container mx-auto bg-white rounded-[20px] p-12 text-navy shadow-xl shadow-navy-300/30 border border-navy-200 sm:p-6 md:p-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          className="flex items-center gap-6 sm:flex-col md:flex-col sm:items-start md:items-start"
          variants={textVariant(0.2)}
        >
          <img className="h-[80px] w-[80px]" src={labor.img} alt={labor.alt} />
          <div>
            <p className="uppercase tracking-[0.2em] text-[14px] text-navy-500">
              {labor.tag}
            </p>
            <h2 className="font-bold text-[40px] sm:text-[30px] md:text-[30px]">
              {labor.title}
            </h2>
          </div>
        </motion.div>

        <motion.p
          className="text-[19px] leading-relaxed text-navy-600 mt-6 max-w-[900px]"
          variants={textVariant(0.3)}
        >
          {labor.text}
        </motion.p>

        <div className="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-1 md:grid-cols-1">
          {labor.audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              className={`rounded-[20px] p-8 text-white sm:p-6 md:p-6 ${
                index === 0
                  ? "bg-navy-800"
                  : "bg-gradient-to-br from-navy-700 to-navy-500"
              }`}
              variants={textVariant(0.4 + index * 0.15)}
            >
              <img
                className="h-[50px] w-[50px] mb-4"
                src={audience.icon}
                alt={audience.alt}
              />
              <h3 className="font-bold text-[24px] mb-2">{audience.title}</h3>
              <p className="text-[17px] leading-relaxed text-navy-100">
                {audience.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.ul
          className="grid grid-cols-2 gap-x-10 gap-y-3 mt-10 bg-navy-50 rounded-[20px] p-8 sm:grid-cols-1 md:grid-cols-1 sm:p-6 md:p-6"
          variants={textVariant(0.6)}
        >
          {labor.services.map((service) => (
            <li key={service} className="flex gap-3 text-[18px] text-navy-700">
              <span className="font-bold text-navy-500">✓</span>
              <span>{service}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="container mx-auto mt-20 text-navy"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center" variants={textVariant(0.2)}>
          <p className="uppercase tracking-[0.2em] text-[14px] text-navy-500">
            {titleJobs.tag}
          </p>
          <h2 className="font-bold text-[36px] mt-2 sm:text-[28px] md:text-[28px]">
            {titleJobs.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 mt-12 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {jobs.map((area, index) => (
            <motion.div
              key={area.id}
              className="flex flex-col text-center bg-white rounded-[20px] p-6 border border-navy-200 shadow-lg shadow-navy-300/20 hover:border-navy-400 ease-linear transition-all duration-150"
              variants={textVariant(0.3 + index * 0.1)}
            >
              <img
                className="mx-auto h-[70px] w-[70px]"
                src={area.img}
                alt={area.alt}
              />
              <h3 className="font-bold text-[22px] my-4">{area.title}</h3>
              <p className="text-[17px] leading-relaxed text-navy-600 flex-1">
                {area.text}
              </p>
              <button
                className="mt-6 rounded-full bg-navy text-white font-bold py-2 hover:bg-navy-600 ease-linear transition-all duration-150"
                onClick={() => setSelected(area)}
              >
                Saiba Mais
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selected && <Modal area={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
