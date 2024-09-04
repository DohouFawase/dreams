import React, { useState } from "react";
import { motion } from "framer-motion";
import OpenCards from "./one";
const eventData = {
  events: [
    // ... les données JSON ici ...
    {
      day: "Jour 0",
      date: "Mercredi 18 Décembre 2024",
      activities: [
        {
          time: "Matin",
          events: [
            "Caravane d'ouverture à travers la ville de Cotonou.",
            "Animation de rue et distribution de flyers pour sensibiliser le public.",
          ],
        },
        {
          time: "Après-midi",
          events: [
            "Accueil des participants et enregistrement.",
            "Soirée de bienvenue et réseautage informel.",
          ],
        },
      ],
    },
    {
      day: "Jour 1",
      date: "Jeudi 19 Décembre 2024",
      activities: [
        {
          time: "Matin",
          events: [
            "Cérémonie d'ouverture officielle avec discours des organisateurs et partenaires.",
            "Conférence inaugurale sur le thème 'Cybersécurité 4.0 : Protéger l'Avenir avec l'IA'.",
          ],
        },
        {
          time: "Après-midi",
          events: [
            "Panels de discussion sur les défis actuels de la cybersécurité.",
            "Sessions de questions-réponses avec les experts.",
          ],
        },
      ],
    },
    {
      day: "Jour 2",
      date: "Vendredi 20 Décembre 2024",
      activities: [
        {
          time: "Matin",
          events: [
            "Ateliers pratiques sur les technologies de cybersécurité basées sur l'IA.",
            "Sessions de pitchs : Présentation de startups innovantes.",
          ],
        },
        {
          time: "Après-midi",
          events: [
            "Tables rondes sur les stratégies et politiques de cybersécurité.",
            "Rencontres B2B pour faciliter le réseautage entre entreprises et investisseurs.",
          ],
        },
      ],
    },
    {
      day: "Jour 3",
      date: "Samedi 21 Décembre 2024",
      activities: [
        {
          time: "Matin",
          events: [
            "Exposition des innovations technologiques par les partenaires et exposants.",
            "Rencontres B2B et sessions de mentorat.",
          ],
        },
        {
          time: "Après-midi",
          events: [
            "Clôture du salon avec remise des prix de l'innovation durable et de l'impact social.",
            "Discours de clôture et remerciements aux participants et partenaires.",
          ],
        },
        {
          time: "Soirée",
          events: ["Dîner de l’innovation."],
        },
      ],
    },
  ],
};

console.log(eventData);
export default function Shedule() {
  return (
    <>
      <div className="">
        {/* <OpenCards /> */}

        <div className="grid md:grid-cols-3 gap-6 px-24 ">
          {eventData.events.map((event, index) => (
            <motion.div key={index} className=" rounded-md shadow-md p-4">
              <div className="relative">
                {/* <img src="imgs/pin.png" alt="" className='w-16 h-16 absolute left-16 bottom-5' /> */}
                <div className="bg-blue-500 p-4 text-center text-white rounded-3">
                  <p className="text-xl font-bold">{event.day}</p>
                  <p className="text-lg">{event.date}</p>
                </div>
              </div>
              {event.activities.map((activity, idx) => (
                <div key={idx} className="mt-4">
                  <h3 className="text-lg font-semibold">{activity.time}</h3>
                  <ul className=" pl-5">
                    {activity.events.map((eventDetail, eidx) => (
                      <li key={eidx}>{eventDetail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="px-24">
          <div className="">
            <div className="space-y-24">
              <div className="grid grid-cols-2 gap-x-12 items-center">
                <div className="">
                  <img src="imgs/sh4.jpg" alt="" className="w-[550px]  h-[400px] object-cover" />
                </div>
                <div className="">
                  <p>Jour 1</p>
                  <p>Mercredi 18 Décembre 2024</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Caravane d'ouverture à travers la ville de Cotonou.</li>
                      <li>Animation de rue et distribution de flyers pour sensibiliser le public.</li>
                    </ul>
                  </div>

                 <div className="mt-4">
                    <h3 className="text-lg font-semibold">Après-midi</h3>
                    <ul className=" pl-5">
                      <li>Accueil des participants et enregistrement..</li>
                      <li>Soirée de bienvenue et réseautage informel.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-12 items-center">
                
                <div className="">
                  <p>Jour 1</p>
                  <p>Jeudi 19 Décembre 2024</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Cérémonie d'ouverture officielle avec discours des organisateurs et partenaires.</li>
                      <li>Conférence inaugurale sur le thème .</li>
                      <li>'Cybersécurité 4.0 : Protéger l'Avenir avec l'IA'.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Après-midi</h3>
                    <ul className=" pl-5">
                      <li>Panels de discussion sur les défis actuels de la cybersécurité.</li>
                      <li>Sessions de questions-réponses avec les experts.</li>
                    </ul>
                  </div>
                </div>

                <div className="">
                  <img src="imgs/sh3.jpg" alt="" className="w-[550px]  h-[400px] object-cover" />
                </div>
              </div>


              <div className="grid grid-cols-2 gap-x-12 items-center">
                <div className="">
                  <img src="imgs/sh6.jpg" alt="" className="w-[550px]  h-[400px] object-cover" />
                </div>
                <div className="">
                  <p>Jour 1</p>
                  <p>Mercredi 18 Décembre 2024</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Caravane d'ouverture à travers la ville de Cotonou.</li>
                      <li>Animation de rue et distribution de flyers pour sensibiliser le public.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Caravane d'ouverture à travers la ville de Cotonou.</li>
                      <li>Animation de rue et distribution de flyers pour sensibiliser le public.</li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-x-12">
                <div className="">
                  <img src="imgs/sh3.jpg" alt="" className="w-[550px]  h-[300px] object-cover" />
                </div>
                <div className="">
                  <p>Jour 1</p>
                  <p>Mercredi 18 Décembre 2024</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Caravane d'ouverture à travers la ville de Cotonou.</li>
                      <li>Animation de rue et distribution de flyers pour sensibiliser le public.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Matin</h3>
                    <ul className=" pl-5">
                      <li>Caravane d'ouverture à travers la ville de Cotonou.</li>
                      <li>Animation de rue et distribution de flyers pour sensibiliser le public.</li>
                    </ul>
                  </div>
                </div>
              </div>


             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
