import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import BuildLift from "../assets/PreviousEmploymentImages/buildLift.png"
import GlassBox from "../assets/PreviousEmploymentImages/Glassbox.png"
import FingerMark from "../assets/PreviousEmploymentImages/fingermark.jpg"
const ImageCarousel = () => {
    const [files, setFiles] = useState([BuildLift,GlassBox,FingerMark]);
    let [imageIndex, setIndex] = useState(0);

    const handleChange = (event, value) => {
        value--;
        console.log(value)
        setIndex(value);
      };

    return (
        <div>
            <img className="h-40 w-full" style={{ filter: "contrast(40%) brightness(120%) grayscale(130%)" }} src={files[imageIndex]}></img>
            <div>
                <Pagination className="flex justify-center justify-items-center" count={3} init page={imageIndex + 1} onChange={handleChange}></Pagination>
            </div>
        </div>
    )
}

export default ImageCarousel