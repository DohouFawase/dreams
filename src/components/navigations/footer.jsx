import {
  useAnimationFrame,
  useMotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Fonction pour envelopper la valeur
  const wrap = (value, min, max) => {
    return ((value - min) % (max - min)) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(v, 0, -100)}%`); // Ajustez le wrap pour le défilement

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="overflow-hidden no-wrapp"
      >
        <motion.div className="flex justify-between space-x-5" style={{ x }}>
          <motion.img src="icons/logoipsum-317.svg" alt="" />
          <motion.img src="icons/logoipsum-325.svg" alt="" />
          <motion.img src="icons/logoipsum-327.svg" alt="" />
          <motion.img src="icons/logoipsum-329.svg" alt="" />
          <motion.img src="icons/logoipsum-330.svg" alt="" />
          <motion.img src="icons/logoipsum-331.svg" alt="" />
          <motion.img src="icons/logoipsum-332.svg" alt="" />

          <motion.img src="icons/logoipsum-317.svg" alt="" />
          <motion.img src="icons/logoipsum-325.svg" alt="" />
          <motion.img src="icons/logoipsum-327.svg" alt="" />
          <motion.img src="icons/logoipsum-329.svg" alt="" />
          <motion.img src="icons/logoipsum-330.svg" alt="" />
          <motion.img src="icons/logoipsum-331.svg" alt="" />
          <motion.img src="icons/logoipsum-332.svg" alt="" />

          <motion.img src="icons/logoipsum-317.svg" alt="" />
          <motion.img src="icons/logoipsum-325.svg" alt="" />
          <motion.img src="icons/logoipsum-327.svg" alt="" />
          <motion.img src="icons/logoipsum-329.svg" alt="" />
          <motion.img src="icons/logoipsum-330.svg" alt="" />
          <motion.img src="icons/logoipsum-331.svg" alt="" />
          <motion.img src="icons/logoipsum-332.svg" alt="" />
        </motion.div>
      </motion.div>

      <div className="pb-12 flex justify-center items-center w-1full mx-auto">
        <div className="pt-24 px-12 grid grid-cols-4 gap-12 mx-auto">
          <div className="">
            <div className="w-[224px]">
              <img src="/imgs/logo.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="">
            <div className="space-y-2 py-4">
              <p className="font-bold text-xl">Lieu de l'évenements</p>
              <div className="">Palais des Congrés , Cotonou</div>
            </div>
            <div className="space-y-2 ">
              <p className="font-bold text-xl">Contacts</p>
              <div className="space-y-2">
                <div className="text-md font-medium">
                  <p>00000000000000</p>
                </div>
                <div className="text-md font-medium">
                  <p>Zogbadjè dèrrière l'école de base Sèdonou</p>
                </div>
                <div className="text-md font-medium">
                  <a href="mailto:hkim.benin@gmail.com">hkim.benin@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 py-4">
            <p className="font-bold text-xl">Liens utilles</p>
            <div className="flex flex-col space-y-2 text-md font-medium ">
              <NavLink>Programme</NavLink>

              <NavLink>Devenez Sponsor</NavLink>

              <NavLink>Presentation</NavLink>

              <NavLink>Blogs</NavLink>

              <NavLink>Galerie</NavLink>
            </div>
          </div>

          <div className="">
            <div className="space-y-2 py-4">
              <p className="font-bold text-xl">Suivez-Nous</p>
              <div className="flex gap-5">
                <div className="bg-blue-400 rounded-full p-1">
                  <a href="">
                    <TiSocialFacebook size={35} color="blue" />
                  </a>
                </div>

                <div className="bg-blue-400 rounded-full p-1">
                  <a href="">
                    <CiLinkedin size={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
