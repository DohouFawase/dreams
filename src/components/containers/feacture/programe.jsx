import  { useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from 'framer-motion';
export default function Programe() {
  const container = useRef(null);
  return (
    <div ref={container}>
      <div className="px-16">
        <div className="flex justify-center items-center flex-col gap-y-5 mt-12">
          <p className="text-blue-400 font-bold text-xl">PROGRAMME</p>
          <p className="font-bold text-3xl ">LES PRGRAMME DE WEHAD</p>
        </div>

        <div className=" my-6 ">
          <motion.div className="flex flex-col gap-7 overflow-hidden">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex  gap-12 items-center bg-white rounded-lg p-6 shadow hover:shadow-md hover:translate-y-2 transition-shadow "
            >
              <div className="">
                <p className="">Jour 0 </p>
                <p className="text-sm text-neutral-600 gap-3  ">
                  {" "}
                  <span className="font-bold text-3xl">18</span> Décembre 2024
                </p>
              </div>

              <div className="">
                <div className="">
                  <p>Matin:</p>
                  <p>
                    Caravane d'ouverture à travers la ville de Cotonou.
                    Animation de rue et distribution de flyers pour sensibiliser
                    le public.
                  </p>
                </div>
                <div className="">
                  <p>Aprés-midi:</p>
                  <p>
                    {" "}
                    Panels de discussion sur les défis actuels de la
                    cybersécurité.
                  </p>
                  <p>Sessions de questions-réponses avec les experts.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
             
              className="flex  gap-12 items-center bg-white rounded-lg p-6 shadow hover:shadow-md hover:translate-y-2 transition-shadow "
            >
              <div className="">
                <p className="">Jour 0 </p>
                <p className="text-sm text-neutral-600 gap-3  ">
                  {" "}
                  <span className="font-bold text-3xl">18</span> Décembre 2024
                </p>
              </div>

              <div className="">
                <div className="">
                  <p>Matin:</p>
                  <p>
                    Caravane d'ouverture à travers la ville de Cotonou.
                    Animation de rue et distribution de flyers pour sensibiliser
                    le public.
                  </p>
                </div>
                <div className="">
                  <p>Aprés-midi:</p>
                  <p>
                    {" "}
                    Panels de discussion sur les défis actuels de la
                    cybersécurité.
                  </p>
                  <p>Sessions de questions-réponses avec les experts.</p>
                </div>
              </div>
            </motion.div>


            <motion.div
             
             className="flex  gap-12 items-center bg-white rounded-lg p-6 shadow hover:shadow-md hover:translate-y-2 transition-shadow "
           >
             <div className="">
               <p className="">Jour 0 </p>
               <p className="text-sm text-neutral-600 gap-3  ">
                 {" "}
                 <span className="font-bold text-3xl">18</span> Décembre 2024
               </p>
             </div>

             <div className="">
               <div className="">
                 <p>Matin:</p>
                 <p>
                   Caravane d'ouverture à travers la ville de Cotonou.
                   Animation de rue et distribution de flyers pour sensibiliser
                   le public.
                 </p>
               </div>
               <div className="">
                 <p>Aprés-midi:</p>
                 <p>
                   {" "}
                   Panels de discussion sur les défis actuels de la
                   cybersécurité.
                 </p>
                 <p>Sessions de questions-réponses avec les experts.</p>
               </div>
             </div>
           </motion.div>



           <motion.div
             
             className="flex  gap-12 items-center bg-white rounded-lg p-6 shadow hover:shadow-md hover:translate-y-2 transition-shadow "
           >
             <div className="">
               <p className="">Jour 0 </p>
               <p className="text-sm text-neutral-600 gap-3  ">
                 {" "}
                 <span className="font-bold text-3xl">18</span> Décembre 2024
               </p>
             </div>

             <div className="">
               <div className="">
                 <p>Matin:</p>
                 <p>
                   Caravane d'ouverture à travers la ville de Cotonou.
                   Animation de rue et distribution de flyers pour sensibiliser
                   le public.
                 </p>
               </div>
               <div className="">
                 <p>Aprés-midi:</p>
                 <p>
                   {" "}
                   Panels de discussion sur les défis actuels de la
                   cybersécurité.
                 </p>
                 <p>Sessions de questions-réponses avec les experts.</p>
               </div>
             </div>
           </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
