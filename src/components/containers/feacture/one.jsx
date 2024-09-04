import React, { useState } from "react";
import { motion } from "framer-motion";
// import city1 from "../assets/city1.png";
// import city2 from "../assets/city2.png";
// import city3 from "../assets/city3.png";
// import planet1 from "../assets/planet1.png";
// import planet2 from "../assets/planet2.png";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "600px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = ["imgs/sh1.jpg", "imgs/sh2.jpg", "imgs/sh4.jpg", "imgs/sh3.jpg", "imgs/sh1.jpg"];
  


  const cardDescriptions = [
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
  ];
  return (
    <section className="w-full ">
      
      <div className=" flex flex-col md:flex-row justify-center items-center gap-2">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center  ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
              borderBottomLeftRadius:12,
              borderBottomRightRadius:12,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer bg-opacity-80 min-h-[100px] ">
                <h2 className="text-xl font-semibold text-white ">
                  Card {index + 1}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 ">
                    {cardDescriptions[index]}{" "}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
