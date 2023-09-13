import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-10 flex-col w-5/6 sm:w-1/2">
                <h3 className="mt-10">Contact</h3>
                <p className="text-xl flex flex-col gap-2">
                    <span>Email: andrew.knox87@gmail.com</span>
                    <span><a className="flex gap-2" href="https://www.linkedin.com/in/andrew-knox-4053761a1/">Linkedin Profile <FaLinkedin className=" text-4xl"/></a></span>
                    <span><a className="flex gap-2" href="https://github.com/knoxie87">Github Profile <FaGithub className=" text-4xl" /> </a></span>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68789.56374216106!2d175.57241278474922!3d-40.362352713666546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d41ad9fbda34483%3A0x500ef6143a29915!2sPalmerston%20North!5e0!3m2!1sen!2snz!4v1677631749431!5m2!1sen!2snz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact