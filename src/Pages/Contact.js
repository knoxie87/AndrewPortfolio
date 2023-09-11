import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-10 w-full flex-col sm:w-1/2">
                <h3 className="mt-10">Contact</h3>
                <p className="text-xl w-52">
                    17 Cavendish Crescent Awapuni
                    Palmerston North, 4412
                </p>
                <p className="text-xl flex flex-col gap-1">
                    <span>Email: andrew.knox87@gmail.com</span>
                    <span>Linkedin Profile: <a href="https://www.linkedin.com/in/andrew-knox-4053761a1/">https://www.linkedin.com/in/andrew-knox-4053761a1/</a></span>
                    <span>Linkedin Profile: <a href="https://github.com/knoxie87">Github</a></span>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.754883552116!2d175.58199361597062!3d-40.369959092335606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d404d4054fd915b%3A0x17ef2d17077b2f4f!2s17%20Cavendish%20Crescent%2C%20Awapuni%2C%20Palmerston%20North%204412!5e0!3m2!1sen!2snz!4v1671498574797!5m2!1sen!2snz" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact