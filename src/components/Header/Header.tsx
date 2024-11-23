// import Logo from './Logo';
import Navigation from "./Navigation";
import MobileMenu from './MobileMenu';
import clsx from "clsx";



export default function Header() {
    return (
        <header className={clsx(["w-full h-14"],
            ["bg-primary flex items-center justify-center"])}>
            {/* For mobile */}
            <div className={clsx(["sm:hidden"],
            ["w-full px-[10%]"],
                ["flex items-center justify-between"])}>
                <h2 className="text-white text-4xl">LOGO</h2>
                <MobileMenu/>
            </div>

        </header>
    );
}
