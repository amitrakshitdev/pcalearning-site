// import Logo from './Logo';
import Navigation from "./Navigation";
import MobileMenu from './MobileMenu';
import clsx from "clsx";
import Logo from "./Logo";



export default function Header() {
    return (
        <header className={clsx(["w-full h-auto"],
            ["sm:bg-tr"])}>
            {/* For mobile */}
            <div className={clsx(
                ["sm:hidden h-16 pl-4 pr-3"],
                ["w-full"],
                ["bg-primary flex items-center justify-between"]
            )}>
                <Logo href="/" type="secondary" text1="Pakrashi Computer Academy" />
                <MobileMenu />
            </div>
            {/* For desktop/wide screen */}
            <div className={clsx(
                ["hidden sm:block h-36"],
                ["flex flex-col"]
            )}>
                <div className={clsx(
                    [
                        "bg-primary w-full h-3/5",
                        "flex justify-around items-center"
                    ])}>
                    <Logo href="/" type="main" text1="Pakrashi Computer Academy" text2="Konnagar, West Bengal"/>
                </div>
                <div className={clsx([
                    "w-full h-2/5",
                    "flex justify-center items-center",
                    "border-b-black border-b"
                ])}>
                    <Navigation />
                </div>
            </div>

        </header>
    );
}
