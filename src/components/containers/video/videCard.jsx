export default function VideoComponnets ({video,title}) {

    return (
        <>
            <div className="">
                <video src={video}></video>
                <p>{title}</p>
            </div>
        
        </>
    )

}