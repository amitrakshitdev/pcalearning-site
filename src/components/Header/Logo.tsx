import clsx from 'clsx';
import Image from 'next/image';
import mainLogoImg from "@/assets/logo/main-logo.png";
import { Montserrat } from 'next/font/google';
const montserratFont = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
function Logo() {
    return (
        // 
        <div className='logo-wrapper'>
            {/* For mobile */}
            <div className={clsx(["sm: hidden"])}>

            </div>
            {/* For desktop */}
            <div className={clsx(["hidden sm:grid",
                "grid grid-cols-[80px,1fr] grid-rows-2",
                "max-h-20",
                "text-white"
            ])}>
                <Image src={mainLogoImg} alt='Main Logo' width={55} className={clsx(["row-span-2  justify-self-center self-end"])} />
                <h2 className={clsx([
                    montserratFont.className,
                    "self-center",
                    "uppercase font-bold text-xl"
                ])}>
                    Pakrashi computer academy</h2>
                <h4 className={clsx([
                    montserratFont.className,
                    "self-start",
                    "font-regular text-base"])}>Konnagar, West Bengal</h4>
            </div>
        </div>
    );
}

export default Logo;
