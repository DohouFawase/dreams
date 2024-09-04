import { useEffect, useRef } from "react";
import Feacture from "../components/containers/feacture/feacture";
import Programe from "../components/containers/feacture/programe";
import Hero from "../components/containers/hero/hero";
import TimeCounter from "../components/content/timeCounter";
import { motion, useScroll, useTransform } from "framer-motion";
// TimeCounter
export default function HomePage() {
  const targetRef = useRef(null);

  return (
    <>
      <div className="overflow-hidden">
        <div className="">
          <Hero />
        </div>

        <div className="">
          <Feacture />
        </div>
        <div className="">
          <TimeCounter />
        </div>
        <div className="">
          <Programe />
        </div>
      </div>
    </>
  );
}
