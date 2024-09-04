import Card from "../card"

export default function SLide () {
     const images = [

     ]
   return (
    <>
    <div className="">
        {[...images].map((item,index) => {
           <Card />  
        })}
    </div>
    </>
   )
}