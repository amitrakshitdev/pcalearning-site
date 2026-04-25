import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaLocationDot,
    FaMobileScreen,
    FaRegEnvelope,
    FaWhatsapp,
} from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 text-sm">
                    <div>
                        <h3 className="font-bold text-xl leading-tight uppercase">
                            Pakrashi Computer
                            <br />
                            Academy
                        </h3>
                        <p className="mt-1 font-bold">Konnagar, West Bengal</p>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <Link
                            href={siteConfig.socialLinks.facebook}
                            target="_blank"
                            className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <FaFacebookF size={18} />
                        </Link>
                        <Link
                            href={siteConfig.socialLinks.instagram}
                            target="_blank"
                            className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link
                            href={siteConfig.socialLinks.linkedin}
                            target="_blank"
                            className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <FaLinkedin size={18} />
                        </Link>
                        {/* <Link
                            href="#"
                            className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <FaYoutube size={18} />
                        </Link> */}
                        <Link
                            href={siteConfig.socialLinks.whatsapp}
                            target="_blank"
                            className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <FaWhatsapp size={18} />
                        </Link>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-5 text-sm font-bold">
                    <h3 className="font-bold text-xl uppercase mb-1">
                        Useful Links
                    </h3>
                    <Link href="/courses" className="hover:underline uppercase">
                        Courses
                    </Link>
                    <Link
                        href="/admission"
                        className="hover:underline uppercase"
                    >
                        Admission
                    </Link>
                    <Link href="/notices" className="hover:underline uppercase">
                        Notices
                    </Link>
                    <Link
                        href="/contact-us"
                        className="hover:underline uppercase"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-5 text-sm font-bold">
                    <h3 className="font-bold text-xl uppercase mb-1">
                        Useful Links
                    </h3>
                    <div className="flex gap-3">
                        <FaLocationDot size={20} className="shrink-0 mt-0.5" />
                        <p className="leading-relaxed uppercase">
                            {siteConfig.contact.addressLine1}
                            <br />
                            {siteConfig.contact.addressLine2}
                            <br />
                            {siteConfig.contact.addressLine3}
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaRegEnvelope size={20} className="shrink-0" />
                        <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="hover:underline"
                        >
                            {siteConfig.contact.email}
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaMobileScreen size={20} className="shrink-0" />
                        <a href={`tel:${siteConfig.contact.phone.replace("+91-", "")}`} className="hover:underline">
                            {siteConfig.contact.phone}
                        </a>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-4 text-sm">
                    <h3 className="font-bold text-xl uppercase mb-1">
                        Submit Your Feedback
                    </h3>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            className="w-full rounded-md px-3 py-2 text-black focus:outline-none focus:border-2 focus:border-secondary h-10"
                        />
                        <button
                            type="button"
                            className="mx-auto w-fit font-bold border-2 border-white rounded-full px-8 py-2 hover:bg-white hover:text-primary transition-colors"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm font-bold pb-4">
                © 2021 All Rights Reserved, Pakrashi Computer Academy, Konnagar,
                Hooghly
            </div>
        </footer>
    );
};

export default Footer;
