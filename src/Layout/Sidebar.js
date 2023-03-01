import { AiOutlineClose } from "react-icons/ai"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Sidebar = ({ displaySideBar }) => {
    if (displaySideBar) {
        return (
            <div className="flex sm:static overflow-hidden h-full sm:overflow-auto top-20 right-0 fixed flex-shrink-0 sm:h-80 justify-between flex-col bg-slate-800">
                <div
                    className="flex left-20 gap-5 mt-10 w-48  items-center flex-col">
                    <div><Link to="/"><Button style={{color:"white", textTransform:'none'}} title="test">Home</Button></Link></div>
                    <div><Link to="/previousEmployment"><Button style={{color:"white", textTransform:'none'}} title="test">Experience</Button></Link></div>
                    <div><Link to="/contact"><Button style={{color:"white", textTransform:'none'}} title="test">Contact</Button></Link></div>
                </div>
            </div>
        )
    }
}

export default Sidebar;