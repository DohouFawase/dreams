import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProjectLit = [
  {
    id: 1,
    tite: "Projet 1",
    desc: "Sélectionnez votre période, le prestataire qui réalise la mission et le client pour lequel vous travaillez : votre CRA est créé et prêt à être rempli.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 2,
    tite: "Projet 2",
    desc: "Sélectionnez votre période, le prestataire qui réalise la mission et le client pour lequel vous travaillez : votre CRA est créé et prêt à être rempli.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 3,
    tite: "Projet 3",
    desc: "Sélectionnez votre période, le prestataire qui réalise la mission et le client pour lequel vous travaillez : votre CRA est créé et prêt à être rempli.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 4,
    tite: "Projet 4",
    desc: "Sélectionnez votre période, le prestataire qui réalise la mission et le client pour lequel vous travaillez : votre CRA est créé et prêt à être rempli.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 5,
    tite: "Projet 5",
    desc: "Sélectionnez votre période, le prestataire qui réalise la mission et le client pour lequel vous travaillez : votre CRA est créé et prêt à être rempli.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
];

const seconProjet = [
  {
    id: 6,
    tite: "Projet 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  ,
  {
    id: 7,
    tite: "Projet 7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 8,
    tite: "Projet 8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 9,
    tite: "Projet 9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 10,
    tite: "Projet 10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },

  {
    id: 11,
    tite: "Projet 11",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quis.",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
];

export default function Scrollegrow() {
  const [currentImage, setCurrentImage] = useState(ProjectLit[0].img);
  const [data, setData] = useState([]);
  const [active, SetActive] = useState(false)

  function Drop() {
    SetActive(!active)
  }
  useEffect(() => {
    setData(ProjectLit);
  }, []);

  const handleChangeImage = (index) => {
    setCurrentImage(ProjectLit[index].img);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 lg:relative justify-between">
          <div className="lg:max-w-[55%]">
            <h1 className="responsive-text">
              Timizer, l’outil gratuit de gestion de compte rendu d’activité
              (CRA) en ligne
            </h1>
            <p className="text-lg font-poppins leading-relaxed mt-12">
              Timizer permet aux freelances de gérer facilement leurs comptes
              rendus d’activité (CRA), du démarrage de la mission à la signature
              par le client.
            </p>
          </div>
          <img src="/imgs/texture.jpg" alt="" className="w-[34rem]" />
        </div>
      </div>

      <div className="">
        <div className="mt-12">
          <p className="text-center uppercase text-primary font-medium font-poppins">
            Comment ça marche
          </p>
          <p className="text-center text-xl font-medium font-poppins mb-12">
            La gestion de votre CRA simplifée en 4 étapes
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 px-6 my-12">
          {/* Affichage de l'image sélectionnée */}
          <motion.div  className="w-full overflow-hidden h-[52.5rem] border rounded-md  ">
            <motion.img    initial={{x: "10vw"}} animate={{x:0}} transition={{ duration: 1 }} src={currentImage} alt="Current Project" className="w-full object-cover" />
          
          </motion.div>

          {/* Affichage des autres projets */}
          <div className="flex flex-col  gap-y-6 ">
            {data.map((projet, index) => (
              <motion.div
                key={projet.id}
                className="cursor-pointer mb-4 bg-orange-50 p-4 rounded-md"
                onClick={() => handleChangeImage(index)}
               
              >
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <h3 className="p-1 border border-white bg-black text-white w-6 h-6  flex justify-center items-center">
                      {projet.id}
                    </h3>
                    <h3>{projet.tite}</h3>
                  </div>
                  <p>{projet.desc}</p>
                  <progress value="70" max="100" className="h-1 w-full bg-green-500"></progress>

                </div>
              </motion.div>
            ))}
          </div>
        </div>




        <div className="grid grid-cols-2 gap-x-4 px-6">
        
          <div className="flex flex-col  gap-y-6">
            {data.map((projet, index) => (
              <motion.div
                key={projet.id}
                className="cursor-pointer mb-4 bg-orange-50 p-4"
                onClick={() => handleChangeImage(index)}
               
              >
                <div className="">
                  <div className="flex gap-2 items-center mb-2">
                    <h3 className="p-1 border border-white bg-black text-white w-6 h-6  flex justify-center items-center">
                      {projet.id}
                    </h3>
                    <h3>{projet.tite}</h3>
                  </div>
                  <p>{projet.desc}</p>
                  <progress value="70" max="100" className="h-1 w-full text-green-500 bg-green-500"></progress>

                </div>
              </motion.div>
            ))}
          </div>

            {/* Affichage de l'image sélectionnée */}
            <div className="w-full overflow-hidden h-[52.5rem] ">
            <img src={currentImage} alt="Current Project" className="w-full h-auto object-cover" />
          </div>

          {/* Affichage des autres projets */}
        </div>
      </div>

     
    </>
  );
}
