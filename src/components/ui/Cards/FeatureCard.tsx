import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";

function FeatureCardWrapper({ children, className }: React.PropsWithChildren<HtmlHTMLAttributes<unknown>>) {
    return (
        <div
            className={clsx(
                ["min-w-36 min-h-52", "flex flex-col items-center justify-start", "relative px-2 py-4", "rounded-md overflow-hidden", "max-w-28", "sm:rounded-none sm:max-w-60", "md:max-w-72"],
                className
            )}
        >
            {children}
        </div>
    );
}

function FeatureCardIcon({ src, alt, className, ...rest }: { src: string | StaticImageData; alt: string; className?: string; rest?: { width?: number; height?: number } & unknown }) {
    return (
        <div>
            <Image src={src} alt={alt} className={clsx([], className)} width={40} height={40} {...rest} />
        </div>
    );
}

function FeatureCardTitle({ children, className, ...rest }: React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>) {
    return (
        <h2 className={clsx(["my-2", "text-textColor text-base text-center font-bold", "sm:text-lg"], className)} {...rest}>
            {children}
        </h2>
    );
}

function FeatureCardDescription({ children, className, ...rest }: React.PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>) {
    return (
        <p className={clsx(["my-2", "text-textColor text-sm text-center font-light", "sm:text-base"], className)} {...rest}>
            {children}
        </p>
    );
}

const FeatureCard = { FeatureCardWrapper, FeatureCardIcon, FeatureCardTitle, FeatureCardDescription };

export default FeatureCard;
