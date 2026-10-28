import { about } from "../Constants";
import { motion } from "framer-motion";
import { textVariant, container, item } from "../utils/motion";
import { useState, useRef } from "react";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const modal = useRef();

  return (
    <section className="w-full bg-[#00293F] font-roboto" id="about">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-wrap items-center justify-center pb-10">

          
        
            
            {/* <motion.img
              className="sm:rounded-full md:rounded-full lg:rounded-full"
              src="/guellas.jpg"
              alt="Felipe Guellere"
              variants={textVariant(1)}
            /> */}
     
    <div >
            <ul className="text-[white] text-[20px] list-disc py-10 max-w-[465px] sm:w-[315px] sm:text-[18px] sm:list-none sm:text-center md:list-none md:text-[18px] md:w-[380px] md:text-center lg:w-[370px]">
              <motion.li className="mb-5" variants={textVariant(0.6)}>
                {about[0]}
              </motion.li>
              <motion.li variants={textVariant(0.8)}>{about[1]}</motion.li>
            </ul>
            <motion.button
              className="w-[465px] bg-[white] h-[50px] text-[20px] font-bold 
            
            rounded-[20px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] sm:w-[315px] md:w-[375px] lg:w-[370px] lg:mb-10 ease-linear transition-all duration-150"
              onClick={() => setShowModal(true)}
              variants={textVariant(0.8)}
            >
              {about[2]}
            </motion.button>
          </div>
        </div>
        {showModal ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold">{about[2]}</h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex flex-wrap"
                    variants={item}
                  >
                    <div className="p-3 mx-auto">
                      <p className="text-center">{about[3]}</p>
                    </div>
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </motion.div>
    </section>
  );
}
