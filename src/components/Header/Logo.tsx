import clsx from "clsx";
import Image from "next/image";
import mainLogoImg from "@/assets/logo/main-logo.png";
import { Montserrat } from "next/font/google";
import { useMemo } from "react";
import Link from "next/link";
const montserratFont = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type LogoProps = {
    type: "main" | "secondary";
    href?: string;
    text1?: string;
    text2?: string;
    size?: number;
    bgStyleClass?: string | string[];
    text1StyleClass?: string | string[];
    text2StyleClass?: string | string[];
};

export default function Logo({ type, href, text1, text2, size, bgStyleClass, text1StyleClass, text2StyleClass }: LogoProps) {
    // Determine conditional values based on type
    const isMain = type === "main";

    const containerClass = clsx([isMain ? "hidden sm:grid max-h-20" : "block sm:hidden max-h-16", "grid grid-cols-[80px,1fr] grid-rows-2 text-white", bgStyleClass]);

    const logoSize = size ?? (isMain ? 55 : 40);

    const imageStyleClass = clsx(["row-span-2 justify-self-center self-center", !isMain && "relative top-1 gap-x-1"]);

    const text1Class = clsx([
        montserratFont.className,
        "uppercase font-bold",
        isMain ? "text-xl self-center" : "text-sm self-center",
        { hidden: !text1, "row-span-2": !text2, "row-span-1": text2 },
        text1StyleClass,
    ]);

    const text2Class = clsx([
        montserratFont.className,
        "font-regular",
        isMain ? "text-base self-start" : "text-sm self-start",
        { hidden: !text2, "row-span-2": !text1, "row-span-1": text1 },
        text2StyleClass,
    ]);

    return (
        <div className="logo-wrapper">
            <div className={containerClass}>
                {href ? (
                    <Link href={href} className={imageStyleClass}>
                        <Image src={mainLogoImg} alt="Main Logo" width={logoSize} />
                    </Link>
                ) : (
                    <Image src={mainLogoImg} alt="Main Logo" width={logoSize} className={imageStyleClass} />
                )}

                <h2 className={text1Class}>{text1}</h2>
                <h4 className={text2Class}>{text2}</h4>
            </div>
        </div>
    );
}
