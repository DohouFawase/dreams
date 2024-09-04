import  { useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from 'framer-motion';
export default function Sponsoring() {
  const container = useRef(null);
  return (
    <div ref={container}>
      <div className="px-16">
        <div className="flex justify-center items-center flex-col gap-y-5 mt-12">
          <p className="text-blue-400 font-bold text-xl">Voulez-vous nous Sponsorisé</p>
          <p className="font-bold text-3xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae dolor ea?</p>

   
        </div>

        <div className=" my-6 ">
          <motion.div className="flex flex-col gap-7 overflow-hidden">
            <motion.div
              initial={{ opacity:0, x:-100}}
              animate={{ opacity: 1, x:0 }}
              transition={{ duration: 0.5 }}
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
             initial={{ opacity:0, x:100}}
             animate={{ opacity: 1, x:0 }}
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
             initial={{ opacity:0, y:-100}}
             animate={{ opacity: 1, y:0 }}
             transition={{ duration: 1.5 }}
             
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
               initial={{ opacity:0, y:100}}
               animate={{ opacity: 1, y:0 }}
               transition={{ duration: 2, ease:[0.19,1,0.22,1]}}
               whileHover={{}}
              
             className="flex  gap-12 items-center bg-white rounded-lg p-6 shadow hover:shadow-md hover:translate-y-2 transition-shadow "
           >
            <p>Être exposant en Réservant un stand A partir de 9m2 à plus</p>
           </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
