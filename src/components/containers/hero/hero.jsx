import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="relative h-full w-full">
      <video src="/vid/in.mp4" autoPlay loop  playsinline  className=" relative video w-full bg-cover "></video>
        <div className="absolute top-[0rem] left-[0px]  right-[0px] h-full bg-black/65 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center ">
              <div className="space-y-3 text-center">
                <p className="uppercase text-blue-300"> "Nous avons un rêve" – L’innovation au service de l’avenir</p>
                <h4 className=" font-bold text-white text-3xl leading-loose ">Salon International de l'Innovation   Africaine "WeHAD"</h4>
                <p className="text-white uppercase">19 - 21 Décembre 2024 | Palais des Congrès de Cotonou, Bénin</p>
              </div>
              <div className=" flex gap-4 mt-6">
                <NavLink
                  className={
                    "bg-blue-500 hover:bg-blue-400 transition-colors duration-200  delay-100 p-2 px-4 rounded-md text-lg text-white"
                  }
                >
                  {" "}
                  Inscrivez-vous maintenant{" "}
                </NavLink>
                <NavLink
                  className={
                    "bg-blue-500 hover:bg-blue-400 transition-colors duration-200  delay-100 p-2 px-4 rounded-md text-lg text-white"
                  }
                >
                  {" "}
                  Devenez sponsor{" "}
                </NavLink>
                <NavLink
                  className={
                    "bg-blue-500 hover:bg-blue-400 transition-colors duration-200  delay-100 p-2 px-4 rounded-md text-lg text-white"
                  }
                >
                  {" "}
                  Découvrez le programme{" "}
                </NavLink>
              </div>
            </div>
        </div>
        
      </div>
    </>
  );
}
