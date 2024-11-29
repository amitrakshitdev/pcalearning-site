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
                ["sm:hidden h-16"],
                ["w-full px-[10%]"],
                ["bg-primary flex items-center justify-between"]
            )}>
                <h2 className="text-white text-4xl">LOGO</h2>
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
                    <Logo />
                    <h3> Log in </h3>
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
