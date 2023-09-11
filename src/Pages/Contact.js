import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-10 flex-col w-5/6 sm:w-1/2">
                <h3 className="mt-10">Contact</h3>
                <p className="text-xl w-52">
                    17 Cavendish Crescent Awapuni
                    Palmerston North, 4412
                </p>
                <p className="text-xl flex flex-col gap-1">
                    <span>Email: andrew.knox87@gmail.com</span>
                    <span>Linkedin Profile: <a href="https://www.linkedin.com/in/andrew-knox-4053761a1/">https://www.linkedin.com/in/andrew-knox-4053761a1/</a></span>
                    <span>Github Profile: <a href="https://github.com/knoxie87">https://github.com/knoxie87</a></span>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68789.56374216106!2d175.57241278474922!3d-40.362352713666546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d41ad9fbda34483%3A0x500ef6143a29915!2sPalmerston%20North!5e0!3m2!1sen!2snz!4v1677631749431!5m2!1sen!2snz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact