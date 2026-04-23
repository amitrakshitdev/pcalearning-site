import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import { menuItems, MenuItem } from "./menuContent";

export default function Navigation() {
    return (
        <NavigationMenu.Root
            orientation="horizontal"
            className={clsx(["min-w-[600px]"])}
        >
            <NavigationMenu.List
                className={clsx(["flex items-center justify-around"])}
            >
                {menuItems.map((item, index) => (
                    <NavigationMenu.Item key={index}>
                        {!item.children || item?.children.length == 0 ? (
                            <NavigationMenu.Trigger
                                className={clsx([
                                    "py-2 px-4",
                                    "min-w-20 w-auto",
                                    "border-transparent border-b-2 hover:border-primary",
                                ])}
                            >
                                <Link
                                    href={item?.href || "/"}
                                    className={clsx([
                                        "uppercase text-primary",
                                        "sm:text-sm",
                                        "md:text-base",
                                    ])}
                                >
                                    {item.name}
                                </Link>
                            </NavigationMenu.Trigger>
                        ) : (
                            <>
                                <NavigationMenu.Trigger
                                    className={clsx([
                                        "text-primary sm:text-sm md:text-base",
                                        "py-3 px-4",
                                        "uppercase max-w-28 text-center",
                                        "border-transparent border-b-2 hover:border-primary",
                                    ])}
                                >
                                    {item.name}
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content
                                    className={clsx(["fixed", "shadow-lg"])}
                                >
                                    <NavigationMenu.Sub
                                        orientation="vertical"
                                        className={clsx(["bg-gray-50"])}
                                    >
                                        {item.children.length > 0 &&
                                            item.children.map(
                                                (subItem, index) => (
                                                    <NavigationMenu.Item
                                                        key={index}
                                                    >
                                                        <Link
                                                            href={subItem?.href}
                                                        >
                                                            <NavigationMenu.Trigger
                                                                className={clsx(
                                                                    [
                                                                        "py-3 px-7 w-full",
                                                                        "uppercase text-primary text-left",
                                                                        "sm:text-sm",
                                                                        "md:text-base",
                                                                        "hover:bg-blue-100",
                                                                    ],
                                                                )}
                                                            >
                                                                {subItem.name}
                                                            </NavigationMenu.Trigger>
                                                        </Link>
                                                    </NavigationMenu.Item>
                                                ),
                                            )}
                                    </NavigationMenu.Sub>
                                </NavigationMenu.Content>
                            </>
                        )}
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
