
import { useEffect, useRef } from "react";
import {motion,useScroll,useMotionValueEvent} from "framer-motion"


export default function Feacture() {
  // const { scrollY } = useScroll()


  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
 
  return (
    <motion.div  className="px-16 my-24">
     <div className="flex items-center gap-12 ">
      <div className="w-1/2">
        <img src="/imgs/sale.jpg" alt="" className=" h-[440px] w-full object-cover" />
      </div>
      <div className=" flex flex-col space-y-3 w-1/2">
        <p>Apropos de WeHad</p>
        <div className="font-bold text-3xl">
        <p>Bienvenue au plus grande salon d'innovation 2024</p>
       
        {/* <p></p> */}
        </div>
        <p>WeHAD est le Salon International de l'Innovation Africaine, organisé par H-KIM. Cet événement réunit des acteurs majeurs de l'innovation—entreprises, startups, chercheurs, et investisseurs—pour partager des idées et promouvoir une culture d'innovation.</p>
        <p>Chaque édition du salon se concentre sur des thèmes spécifiques, avec pour objectif d'inspirer de nouvelles innovations et de célébrer les avancées de l'année précédente, tout en visant à renforcer le rôle du Bénin et de l'Afrique dans le domaine de la technologie.</p>
      </div>
     </div>
    </motion.div>
  )
}
