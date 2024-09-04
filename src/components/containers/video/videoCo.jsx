import { useScroll } from "framer-motion";
import VideoComponnets from "./videCard"


export default function VideOComponents() {
    useScroll({
      
    })
  return (
    <>
      <div className="px-12">
        <div className=" flex justify-center py-12">
          <p className="max-w-[40rem] text-center">
            <span className="font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
            </span>{" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            neque tempore voluptates, labore reprehenderit enim officia laborum
            eveniet iure deserunt.
          </p>
        </div>

        <div className="">
        <video src="/vid/in.mp4" autoPlay loop className="relative w-full"></video>
            <p className="text-center py-12 font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam debitis at.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <VideoComponnets video={"/vid/in.mp4"} title={"Lorem ipsum dolor sit amet consectetur adipisicing"} />
        <VideoComponnets video={"/vid/in.mp4"} title={"Lorem ipsum dolor sit amet consectetur adipisicing"} />
        </div>
      </div>
    </>
  );
}
