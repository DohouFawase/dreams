import VideoHero from "../components/containers/hero/videoHero"
import VideOComponents from "../components/containers/video/videoCo"
import { motion, useScroll } from "framer-motion"
export default function Video () {
    const {scrolleY:completScrollY} = useScroll
    return (
        <>
        <motion.div className="" style={{scaleY:completScrollY}}>
            <VideoHero />
             <VideOComponents/>
            
        </motion.div>
        
        
        </>
    )
}