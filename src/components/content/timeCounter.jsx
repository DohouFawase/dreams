import { useState, useEffect } from "react";

export default function TimeCounter() {
  const targetDate = new Date("2025-02-21T00:00:00");
  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { 
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  });

  
  return (
    <div className=" h-[80vh] flex items-center justify-center bg-[#2959a4] text-white   shadow">
       <div className="flex  justify-center items-center text-center gap-12 px-4">
       <div className="font-bold  "> 
        <span className="text-white text-[6rem]">{timeLeft.days}</span>
          <p className="text-[3rem]">Jour</p>
         </div>
      <div className="font-bold ">
         <span className="text-white text-[6rem]">{timeLeft.hours} </span>
         <p className="text-[3rem]">Heurs</p>
       </div>
      <div className="font-bold ">
      <span className="text-white text-[6rem]">{timeLeft.minutes}  </span>
          {/* <p className="text-white text-[6rem]"> {timeLeft.minutes}</p> */}
          <p className="text-[3rem]">Minutes</p>
        
         </div>
      <div className="font-bold ">
      <span className="text-white text-[6rem]">{timeLeft.seconds} </span>

        {/* <p>{timeLeft.seconds} </p>  */}
        <p className="text-[3rem]"> Seconds</p>
     </div>

       </div>
    </div>
  );
}
