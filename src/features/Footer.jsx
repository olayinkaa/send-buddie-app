import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section id="footer" className="relative px-10 lg:px-0">
            <div className="container mx-auto border-t-2 border-zinc-400 py-10">
                <div className="flex flex-col items-center space-y-10">
                    <div className="flex justify-between gap-16 text-xl dark:text-light-heading">
                        <Link to="/home">Home</Link>
                        <Link to="/faq">FAQs</Link>
                        <Link to="/privacy">Policy</Link>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                    <p className="w-4/5 text-center text-lg dark:text-light-heading">
                        SendBuddie was conceived out of an urgent desire to change the money transfer industry. We
                        conceived and developed it as an entirely new approach to remittances. Traditional means of
                        money transfer are time-consuming, expensive and cumbersome; definitely not suitable for this
                        generation, and we are determined to change that.{" "}
                    </p>
                    <div className="flex gap-10 dark:text-light-heading">
                        <a href="#0">
                            <FaFacebookF className="text-2xl" />
                        </a>{" "}
                        <a href="#0">
                            <FaTwitter className="text-2xl" />
                        </a>{" "}
                        <a href="#0">
                            <FaInstagram className="text-2xl" />
                        </a>{" "}
                        <a href="#0">
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
